import Logo from "../assets/logo.png";
import { AiOutlineMessage } from "react-icons/ai";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
import { TfiPrinter } from "react-icons/tfi";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="mx-2">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center h-[70px] px-3">
          <div className="">
            <img
              src={Logo}
              alt="logo"
              className="md:w-60 w-30 h-[70px] rounded-full object-cover"
            />
          </div>
          <div className="md:text-4xl font-bold text-[#2171B5]">
            Employee Attendance
          </div>
          <div className="hidden md:block md:flex gap-2 h-full pt-2 cursor-pointer">
            <div className="text-gray-400 text-[25px]">
              <AiOutlineMessage />
            </div>
            <div className="text-gray-500 text-[25px]">
              <CiBellOn />
            </div>
            <div className="text-[#2171B5] text-3xl">
              <FaUserCircle />
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[140px] flex items-center justify-between pb-6">
        <div>
          <div className="flex gap-2 mt-2">
            <CiSearch className="text-gray-800 text-xl absolute ml-3 mt-3" />
            <input
              type="text"
              placeholder="Search Employee"
              className="pl-12 py-2 w-[300px] border border-[#217185] rounded-md"
            />
          </div>
        </div>
        <div className="hidden md:flex gap-2">
          <div>
            <TiArrowSortedDown className="text-yellow-400 text-xl absolute ml-[122px] mt-3" />
            <select className="appearance-none w-[150px]  font-semibold px-3 py-2 border border-[#217185] rounded-md">
              <option>Department</option>
            </select>
          </div>

          <div>
            <TiArrowSortedDown className="text-yellow-400  font-semibold text-xl absolute ml-[115px] mt-3" />
            <select className="appearance-none w-[140px]  font-semibold px-3 py-2 border border-[#217185] rounded-md">
              <option>Project</option>
            </select>
          </div>

          <button className="px-3 py-2  font-semibold text-[#2171B5] rounded-md flex items-center bg-[#d1f1f8] gap-1">
            {" "}
            <TfiPrinter /> Print
          </button>
          <button className="px-3 py-2  font-semibold text-[#2171B5] rounded-md flex items-center bg-[#d1f1f8] gap-1">
            {" "}
            <MdOutlineFileDownload /> Download
          </button>
          <button className="px-3 py-2 font-semibold text-[#2171B5] rounded-md flex items-center bg-[#d1f1f8] gap-1">
            <HiOutlineNewspaper />
            Import
          </button>
        </div>
      </div>
    </div>
  );
}
