'use client'

interface ShowAllColumnsProps {
    col_id: number;
}

export default function ShowAllColumns({ col_id }: ShowAllColumnsProps) {
    return (
        <div>
            <h1>{col_id}</h1>
        </div>
    );
}




// import ShowAllColumns from "./ShowAllColumns"; // مسیر درست را بنویس

// // ...بقیه‌ی کدها
// else if (col === "showAll") {
//   return (
//     <td key={col} className="p-2 text-center">
//       <ShowAllColumns col_id={h.id} />
//     </td>
//   );
// }
