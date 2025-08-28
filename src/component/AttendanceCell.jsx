export default function AttendanceCell({ status }) {
  let bg = "bg-green-100 text-green-700";
  if (status === "A") bg = "text-gray-900";
  else if (status === "P") bg = "bg-[#cdede3] text-green-700";
  return (
    <td className={`border `}>
      <span className={`w-[70px] font-semibold text-lg p-2 h-10 ${bg}`}>
      {status}</span>
    </td>
  );
}
