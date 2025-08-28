// src/component/Count.jsx
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiExpandUpDownFill } from "react-icons/ri";
import EmployeeTable from "./EmployeeTable";

const Count = ({ year, month }) => {
  const generateDays = () => {
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

  const daysArray = generateDays();

  return (
    <div className="bg-gray-100  px-4 w-full">
      {/* <div className="flex items-center justify-between p-2">
        <div className="flex items-center justify-between text-[#008D57]"><IoIosArrowBack className="font-semibold text-2xl"/> Previous Month</div>
        <div className="font-semibold">April 2025</div>
        <div className="flex items-center justify-between  text-[#008D57] ">Next Month <IoIosArrowForward className="font-semibold text-2xl"/></div>
    </div>


      <ul className="flex border-2 bg-[#f3fcfd] rounded-lg items-center"> 
        <div className="px-4 w-40 flex items-center font-bold">
             <RiExpandUpDownFill className="text-yellow-400 text-xl absolute ml-[110px] mt-1" />
             Employee</div>
        {daysArray.map((item, index) => (
          <li key={index} className="p-2 flex flex-col items-center rounded shadow-sm border">
            <p className={`${item.day === "Sun" || item.day === "Sat" ? "text-gray-400" : ""} font-semibold` }>{item.date}
                </p>
                <p className={`${item.day === "Sun" || item.day === "Sat" ? "text-gray-400" : ""}`}>{item.day === "Mon" && "M"}
               {item.day === "Tue" && "T"}
               {item.day === "Wed" && "W"}
               {item.day === "Thu" && "T"}
               {item.day === "Fri" && "F"}
               {item.day === "Sat" && "S"}
               {item.day === "Sun" && "S"}</p>

          </li>
        ))}
      </ul> */}
      <EmployeeTable />
    </div>
  );
};

export default Count;
