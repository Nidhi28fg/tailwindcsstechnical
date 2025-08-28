import AttendanceCell from "./AttendanceCell";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiExpandUpDownFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import Profile from "../assets/profile.jpg";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const employees = [
  { name: "Gerald Giles", role: "Sales Manager", photo: Profile },
  { name: "Sanglekar", role: "Business Analyst", photo: Profile },
  { name: "Gayathri N", role: "Sales Manager", photo: Profile },
  { name: "Sachidanan", role: "Sales Manager", photo: Profile },
  { name: "Gerald Giles", role: "Sales Manager", photo: Profile },
  { name: "Sanglekar", role: "Sales Manager", photo: Profile },
  { name: "Gayathri N", role: "", photo: Profile },
  { name: "Sachidanan", role: "", photo: Profile },
  { name: "Gerald Giles", role: "", photo: Profile },
  { name: "Sanglekar", role: "Sales Manager", photo: Profile },
  { name: "Gerald Giles", role: "Sales Manager", photo: Profile },
  { name: "Sanglekar", role: "Sales Manager", photo: Profile },
  { name: "Sachidanan", role: "", photo: Profile },
  { name: "Sanglekar", role: "Sales Manager", photo: Profile },
  { name: "Sachidanan", role: "", photo: Profile },
  { name: "Gerald Giles", role: "", photo: Profile },
  { name: "Sanglekar", role: "Sales Manager", photo: Profile },
];

const generateDays = (year, month) => {
  const days = [];
  const totalDays = new Date(year, month, 0).getDate();

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(year, month - 1, i);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    days.push({
      date: i.toString().padStart(2, "0"),
      day: dayName,
    });
  }

  return days;
};

export default function EmployeeTable() {
  const year = 2025;
  const month = 9;
  const days = generateDays(year, month);

  return (
    <>
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center justify-between font-semibold text-[#008D57]">
          <IoIosArrowBack className="font-semibold md:text-xl" /> Previous Month
        </div>
        <div className="font-semibold md:text-xl">April 2025</div>
        <div className="flex items-center justify-between font-semibold text-[#008D57] ">
          Next Month <IoIosArrowForward className="font-semibold md:text-xl" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-auto">
        <table className="min-w-full text-center border">
          <thead className="border">
            <tr className="border-2 bg-[#f3fcfd] rounded-2xl items-center">
              <th className="md:text-left border-2 py-2">
                {" "}
                <div className="xl:pl-10 md:pl-5 relative flex items-center md:font-bold">
                  <div className="text-sm font-normal md:font-bold xl:text-lg">Employee</div>
                   <div><RiExpandUpDownFill className="hidden absolute xl:block text-yellow-400 text-xl md:right-2 md:top-1" /></div>
                </div>
              </th>
              {days.map((dayObj) => (
                <th
                  key={dayObj.date}
                  className={`${
                    dayObj.day === "Sun" || dayObj.day === "Sat"
                      ? "text-gray-400"
                      : ""
                  } font-semibold border`}
                >
                  <div>{dayObj.date}</div>
                  <div
                    className={`${
                      dayObj.day === "Sun" || dayObj.day === "Sat"
                        ? "text-gray-400"
                        : ""
                    } font-normal`}
                  >
                    {dayObj.day === "Mon" && "M"}
                    {dayObj.day === "Tue" && "T"}
                    {dayObj.day === "Wed" && "W"}
                    {dayObj.day === "Thu" && "T"}
                    {dayObj.day === "Fri" && "F"}
                    {dayObj.day === "Sat" && "S"}
                    {dayObj.day === "Sun" && "S"}
                  </div>
                 
                </th>

              ))}
             {["A", "B", "C", "D"].map((item) => (
  <th key={item} className="border px-2">{item}</th>
))}

            </tr>
          </thead>
          <tbody className="border">
            {employees.map((emp) => (
              <tr key={emp.name}>
                <td className="flex border items-center justify-around px-1 py-1">
                  <IoCall className="hidden xl:block text-[#008D57] md:text-md" />
                  <img
                    src={emp.photo}
                    alt={emp.name}
                    className="w-[32px] h-8 object-cover rounded-full"
                  />
                  <div>
                    <div className="xl:uppercase text-[10px] xl:text-[16px]">{emp.name}</div>
                    <div className="text-[10px]">{emp.role}</div>
                  </div>
                  <div>
                    <PiDotsThreeVerticalBold className="text-left font-bold text-yellow-500" />
                  </div>
                </td>

                {days.map((dayObj) => {
                  if (dayObj.day === "Sun" || dayObj.day === "Sat") {
                    return (
                      <td key={dayObj.date} className="border">
                        <span
                          className={`w-[80px] p-2 h-10 text-[#e1e1e1] bg-[#e1e1e1]`}
                        >
                          0
                        </span>
                      </td>
                    );
                  }

                  if (dayObj.date === "10") {
                    return (
                      <td key={dayObj.date} className="border font-bold">
                        <span
                          className={`w-[80px] p-2 h-10 text-bold bg-[#fff0d1]`}
                        >
                          H
                        </span>
                      </td>
                    );
                  }
                  return (
                    <AttendanceCell
                      key={dayObj.date}
                      status={Math.random() > 0.8 ? "A" : "P"}
                    />
                  );
                })}
                      {["A", "B", "C", "D"].map((item) => (
  <th key={item} className="border px-2"></th>
))}
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
