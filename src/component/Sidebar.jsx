import { LuLayoutDashboard } from "react-icons/lu";
import { PiChartLineUp } from "react-icons/pi";
import { FaPeopleRoof } from "react-icons/fa6";
import { VscCalendar } from "react-icons/vsc";
import { GiShoppingCart } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidBuildings } from "react-icons/bi";
import { GrUserManager } from "react-icons/gr";
import { TfiWallet } from "react-icons/tfi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { RiShutDownLine } from "react-icons/ri";


const icons = [<LuLayoutDashboard/>, <PiChartLineUp/>, <FaPeopleRoof />, <VscCalendar/>, <GiShoppingCart/>, <FaMapMarkerAlt />, <BiSolidBuildings/>, <GrUserManager/>, <TfiWallet />, <HiOutlineLightBulb/>, <AiOutlineSetting/>, <RiShutDownLine/>];
const style = ["text-blue-400",      "text-green-500",   "text-blue-400", "text-[#2EC0DE]", "text-blue-400", "text-[#2ec0de]", "text-[#32c89a]", "text-blue-800", "text-[#32c89a]", "text-[#2ec0de]", "text-blue-800", "text-blue-400"];
export default function Sidebar() {
  return (
    <aside className="bg-white border-2 border-gray-800 -mt-12 rounded-tr-xl md:w-[110px] min-w-[70px] flex flex-col items-center py-4">
      {icons.map((icon, idx) => (
        <div key={idx} className={`mb-10 md:text-4xl text-2xl ${style[idx]}`}>{icon}</div>
      ))}
    </aside>
  );
}
