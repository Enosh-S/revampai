

import { signIn, useSession, getProviders } from "next-auth/react";
import { Router, useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";

export default function Signin({ providers }) {
  const {data: session} = useSession();
  const router = useRouter();

  return (
    <>
      <div>
        <div className="flex flex-col items-center mt-32 sm:mx-auto mx-6">
          <div className="card w-96 bg-neutral shadow-xl">
            <div className="card-body">
              <h2 className="card-title mx-auto  text-slate-200 lg:text-2xl text-xl font-semibold tracking-tight">
                Sign In
              </h2>
              <div className="divider"> 👇 </div>
              {Object.values(providers).map((provider) => (
                <div className=" flex justify-center" key={provider.name}>
                  <button
                    className=" btn gap-2 dark:bg-base-100 mt-5 bg-gray-400"
                    onClick={() => signIn(provider.id, {callbackUrl: "/"})}
                  >
                    <FcGoogle size="28" />
                    Continue with {provider.name}
                  </button>
                </div>
                ))}
            </div>
          </div>
          <div className="flex mt-5">
            <p className="text-slate-400 text-sm">
              By signing in you are accepting terms and privacy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
  
  
}
