import { collection, getDocs, orderBy } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function useFetchDocs() {
  const { data: session } = useSession();
 
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
      const getdocuments = async () => {
        const querySnapshot = await getDocs(collection(db,"userDocs",session.user.email,"docs"),orderBy("Timestamp", "desc"))
        
        setDocuments(querySnapshot.docs.map(doc => {
          return{
            id: doc.id,
            data: {
              filename: doc.data().docfilename,
              body: doc.data().body,
              createdOn: doc.data().timestamp.toDate()
            }
          }
        }))
        
        
      }
      getdocuments()
      
    }, [])

  return { documents };
}
