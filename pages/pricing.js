import {
    useState,
    useEffect
  } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Pricing() {
    const router = useRouter();
    const [loading, setLoading] =useState(true);

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            console.log({
                session
            })
            if(!session) {
                router.push("/signin")
            } else {
                setLoading(false)
            }
        }
        securePage()
    }, [] )

    if (loading) {
        return <progress className="flex justify-center progress progress-secondary h-1 opacity-70 max-w-screen"></progress>
    }
    return (
        <div>
            <h1>
                This is Pricing
            </h1>
        </div>
    )
}