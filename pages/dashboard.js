import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { ImPilcrow } from "react-icons/im";
import { FcFolder } from "react-icons/fc";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";
import DocGrid from "../components/Docsgrid";
import useFetchDocs from "../hooks/FetchDocs";
import Image from "next/image";
import Container from "../components/Container";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  const [documentname, setDocumentname] = useState("");
  const { documents } = useFetchDocs();

  const createDoc = (e) => {
    if (!documentname) return;
    else {
      addDoc(collection(db, "userDocs", session.user.email, "docs"), {
        docfilename: documentname,
        timestamp: serverTimestamp(),
        body: "",
      });
    }
    router.reload();
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
              onKeyDown={(e) => e.key === "Enter" && createDoc()}
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
                onClick={(e) => createDoc()}
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
                onClick={() => setDocumentname("")}
              >
                <ImPilcrow size={15} />
                New Document
              </label>
            )}
          </div>
        </div>
      </div>
      {documents.length == 0 && (
        <>
          <section>
            <div className="sm:max-w-4xl sm:mx-auto mx-3 relative mt-10 px-5 py-1 rounded-lg items-center flex justify-between bg-neutral ">
              <h2 className="text-xl font-sans font-bold">My Documents</h2>
              <button className="btn btn-ghost btn-circle">
                <FcFolder size={28} />
              </button>
            </div>
          </section>
          <section className="flex flex-col lg:max-w-5xl sm:max-w-2xl items-center mx-auto justify-center opacity-90 py-5">
            <div>
              <Image
                alt="No Documents"
                src="/nodata.svg"
                height={220}
                width={220}
                objectFit="contain"
              />
            </div>
            <div>
              <h2 className="font-sans text-center  px-3 lg:text-sm md:text-xs">
                Looks like you have no documents yet, Create One
              </h2>
            </div>
          </section>
        </>
      )}
      {documents.length > 0 && (
        <>
          <section>
            <div className="sm:max-w-4xl sm:mx-auto mx-3 relative mt-10 px-5 py-1 rounded-lg items-center flex justify-between bg-neutral ">
              <h2 className="text-xl font-sans font-bold">My Documents</h2>
              <button className="btn btn-ghost btn-circle">
                <FcFolder size={28} />
              </button>
            </div>
          </section>

          <section className=" max-w-4xl mx-auto focus:outline-none my-5">
            <div className=" grid gap-4 lg:mx-auto mx-3 lg:grid-cols-3 grid-cols-2 justify-center place-content-stretch content-start">
              {documents.map((doc) => (
                <DocGrid key={doc.id} docfile={doc} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
