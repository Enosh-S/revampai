import {
    useState,
    useEffect
  } from "react";
import { getSession, signIn } from "next-auth/react";

export default function DocsHistory() {
    const [loading, setLoading] =useState(true);

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            console.log({
                session
            })
            if(!session) {
                signIn()
            } else {
                setLoading(false)
            }
        }
        securePage()
    }, [] )

    if (loading) {
        return <progress class="flex justify-center progress progress-secondary h-1 opacity-70 max-w-screen"></progress>
    }
    return (
        <div>
            <h1>
                This is DocsHistory
            </h1>
        </div>
    )
}