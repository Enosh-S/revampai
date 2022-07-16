import Link from "next/link";
import {
  HiOutlineDocumentText,
  HiOutlineDotsVertical,
  HiOutlineShare,
} from "react-icons/hi";

export default function DocGrid({ docfile }) {
  return (
    <div>
      <Link href={`/editdoc/${docfile.id}`}>
        <div className=" dark:bg-neutral flex flex-1 rounded-md py-5 px-2 justify-between cursor-pointer hover:bg-base-200 group">
          <div className="inline-block">
            <HiOutlineDocumentText size="24" />
          </div>
          <div className="flex flex-col space-y-1 flex-grow ml-2 group">
            <h2 className="text-sm font-sans truncate capitalize dark:text-slate-300  ">
              {docfile.data.filename}
            </h2>
            <p className="text-xs font-sans dark:text-slate-500 ">
              {new Date(docfile.data.createdOn).toLocaleString("en-Us", {
                day: "numeric",
                month: "short",
                year: "2-digit",
              })}
            </p>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex="0"
              className="btn btn-circle btn-ghost btn-xs flex-grow-0 "
            >
              <HiOutlineDotsVertical
                size={20}
                className="dark:text-slate-200 text-gray-400"
              />
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-3 space-y-2 shadow bg-base-200 rounded-box w-32 h-24"
            >
              <li>
                <button className="btn btn-sm bg-neutral gap-2 text-slate-200 capitalize hover:bg-neutral hover:text-slate-200 text-sm py-1">
                  <HiOutlineShare size={18} />
                  Share
                </button>
              </li>
              <li>
                <button className="btn btn-sm bg-secondary capitalize text-neutral hover:bg-neutral hover:text-slate-200 py-1 text-sm">
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}
