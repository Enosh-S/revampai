import { HiOutlineDocumentText, HiOutlineDotsVertical, HiOutlineShare } from "react-icons/hi";

export default function DocGrid({ docfile }) {
  return (
    
    <div>
      <a
        href="#"
        className="group block sm:max-w-xs max-w-md mx-auto rounded-lg p-6 bg-neutral ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-primary hover:ring-sky-500"
      >
        <div className="flex flex-grow items-center justify-between">
          <HiOutlineDocumentText size={28} className="dark:text-primary group-hover:text-neutral"/>
          <h3 className="text-slate-900 dark:text-slate-200 group-hover:text-neutral text-md font-semibold flex flex-grow ml-1">{docfile.data.filename}</h3>
          <div className="dropdown dropdown-end">
          <label
           tabIndex="0"
           className="btn btn-circle btn-ghost btn-xs ">
           <HiOutlineDotsVertical size={20} className="dark:text-slate-200 text-gray-400 group-hover:dark:text-neutral" />
          </label>
          <ul tabIndex="0" className="dropdown-content menu p-3 space-y-2 shadow bg-base-200 rounded-box w-44" >
          <li><button className="btn bg-neutral gap-2 text-slate-200 capitalize hover:bg-neutral hover:text-slate-200 mt-1 text-md">
             <HiOutlineShare size={18} />
             Share
             </button></li>
             <li><button className="btn bg-secondary capitalize text-neutral hover:bg-neutral hover:text-slate-200 mt-1 text-md">
             Edit
             </button></li>
          </ul>
          </div>
          
        </div>
        <p className="text-slate-500 group-hover:text-neutral text-xs ml-1">
        {new Date(docfile.data.createdOn).toLocaleString("en-US", {
          day: "numeric",
          month: "short",
          year: "2-digit",
        })} </p>
      </a>
    </div>
  );
}
