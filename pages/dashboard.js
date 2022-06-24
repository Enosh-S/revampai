import Link from "next/link";
import { ImPilcrow } from "react-icons/im";

export default function Dashboard() {
    return (
        <div>
        <div className="px-4 sm-px-6 md:px-8 dark:bg-base-200 shadow-inner-xl">
            <div className="relative max-w-5xl mx-auto py-20 ">
                <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg-text-6xl tracking-tight text-center dark:text-white">
                    Revamp your
                    <span className="text-slate-900 ml-2 font-extrabold text-4xl sm:text-5xl lg-text-6xl tracking-tight text-center dark:text-secondary">
                        AI content
                    </span>
                </h1>

                <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                    Create a new document and select your usecase
                </p>
                <div className="mt-6 sm:mt-10 flex justify-center">
                    <Link href="/newdoc">
                        <a>
                        <button className="btn btn-primary gap-2 text-slate-100 text-base font-sans capitalize">
                            <ImPilcrow size={15} />
                            New Document
                        </button>
                        </a>
                    </Link>

                </div>

            </div>
        </div>
        <section>
            <div className="max-w-5xl mx-auto relative py-10">

            </div>
        </section>

    </div>

    )
}