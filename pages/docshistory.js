import {
    useState,
    
  } from "react";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function DocsHistory() {
    const{data: session} = useSession();
    const router = useRouter();
    const [loading, setLoading] =useState(true);
     
    if (loading) {
        return <progress className="flex justify-center progress progress-secondary h-1 opacity-70 max-w-screen"></progress>
    }

    if(!session){
        router.push("/signin")
        setLoading(false)
    } 
    return (
        <div>
            <h1>
                This is DocsHistory
            </h1>
        </div>
    )
}