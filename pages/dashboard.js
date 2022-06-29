import {
  addDoc,
  serverTimestamp,
  collection,
  orderBy,
  
  onSnapshot,
} from "firebase/firestore";


import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

import { ImPilcrow } from "react-icons/im";
import { FcFolder } from "react-icons/fc";

import { db } from "../firebase.config";
import DocGrid from "../components/Docsgrid";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
 
  const [documentname, setDocumentname] = useState("");
  const [docsData, setdocsData] = useState([]);
  

  useEffect(() => {
    if (!session) return;

    onSnapshot(collection(db,"userDocs",session.user.email,"docs"), orderBy("timestamp", "desc"), (response) => {
      setdocsData(
        response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  const createDocument = () => {
   

    addDoc(collection(db, "userDocs", session.user.email, "docs"), {
      filename: documentname,
      timestamp: serverTimestamp(),
    });
    
  };
  

  return (
    <div>
      <div>
        <input type="checkbox" id="modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col max-w-xs sm:max-w-sm items-center bg-base-300 relative">
            <input
              value={documentname}
              onChange={(e) => setDocumentname(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && createDocument()}
              maxLength={20}
              type="text"
              placeholder="Give your document a name.."
              className="input w-full max-w-xs focus:input-bodered bg-neutral "
            ></input>
            <div className="flex space-x-5">
              <label
                htmlFor="modal"
                onClick={() => setDocumentname("")}
                className="btn bg-neutral btn-md mt-5 capitalize text-base font-semibold tracking-tight"
              >
                Cancel
              </label>

              <label
                htmlFor="modal"
                className="btn btn-primary btn-md mt-5 capitalize text-base font-semibold tracking-tight"
                onClick={createDocument}
              >
                Create
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm-px-6 md:px-8 dark:bg-neutral shadow-inner-xl">
        <div className="relative max-w-5xl mx-auto py-20 ">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg-text-6xl tracking-tight text-center dark:text-white">
            Revamp your
            <span className="text-slate-900 ml-2 font-extrabold text-4xl sm:text-5xl lg-text-6xl tracking-tight text-center dark:text-secondary">
              AI content
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-base text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            Create a new document and select your usecase
          </p>

          <div className="mt-6 sm:mt-10 flex justify-center">
            {!session && (
              <button
                className="btn btn-primary gap-2 text-slate-800 text-base font-sans capitalize"
                onClick={() => router.push("/signin")}
              >
                <ImPilcrow size={15} />
                New Document
              </button>
            )}
            {session && (
              <label
                htmlFor="modal"
                className="btn btn-primary modal-button gap-2 text-slate-800 text-base font-sans capitalize"
              >
                <ImPilcrow size={15} />
                New Document
              </label>
            )}
          </div>
        </div>
      </div>
      
        <section>
        <div className="sm:max-w-4xl sm:mx-auto mx-3 relative mt-10 px-5 py-1 rounded-lg items-center flex justify-between bg-neutral ">
          <h2 className="text-xl font-sans font-bold">My Documents</h2>
          <button className="btn btn-ghost btn-circle">
            <FcFolder size={28} />
          </button>
        </div>
      </section>
      
      
      <section className="relative max-w-4xl mx-auto px-2 focus:outline-none sm:px-3 md:px-5 my-5">
        <div className="max-w-4xl grid gap-4 mx-auto sm:grid-cols-3">
          
          {docsData.map((doc) => (
            <DocGrid
              key={doc.id}
              id={doc.id}
              filename={doc.filename}
              date={doc.timestamp}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
