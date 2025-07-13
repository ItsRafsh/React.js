// import { useState } from "react";

// // penjelasannya: count pasangannya setCount. saat setcount dipanggil, value yg ditaro diparameter(1) dia akan merubah valuenya count yg atas
// // awalnya count itu isinya 0, tapi karna sudah dipanggil setcount(count + 1), ini akan merubah usestate(0) ininya dan masuk 
// // ke dalam variabel count. gunanya setCount untuk ngetrigger proses re-rendering/menampilkan ulang. setCount bisa ubah nama sesuka elu.
// // bisa lebih dari banyak state

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     // let count = 0;
//     const handleDecrement = () =>{
//         alert('Decrement');
//         // count -= 1;
//         setCount(count - 1);
//     };
//     const handleIncrement = () =>{
//         alert('Increment');
//         // count += 1;
//         setCount(count + 1);
//     };
//     const handleResetCount = () =>{
//         alert('berhasil di RESET');
//         setCount(0);
//     }

//     return(
//         <div style={{
//             display: 'flex',
//             gap: '16px',
//         }}>
//             <button onClick={handleDecrement}>Kurang</button>
//             <p style={{fontSize: "48px"}}>{count}</p>
//             <button onClick={handleIncrement}>Tambah</button>

//             <button onClick={handleResetCount}>RESET</button>
//         </div>
//     )
// }

// export default Counter





// session 2 di menit 1.19.00

// const useCounter = () => {
//     const [count, setCount] = useState(0);
//     const handleDecrement = () => {
//         alert('Decrement');
//         setCount(count - 1);
//     };
//     const handleIncrement = () => {
//         alert('Increment');
//         setCount(count + 1);
//     };
//     const handleResetCount = () => {
//         alert('berhasil di RESET');
//         setCount(0);
//     }
//     return{
//         count,
//         handleDecrement,
//         handleIncrement,
//         handleResetCount,
//     }
// }



// semua function sudah dipindah ke folder hooks di menit 1.30.00
// liat pengambilan function lagi di file Welcome.tsx
import { useCounter } from "../hooks/useCounter"

const Counter = () => {
    const {count,handleDecrement,handleIncrement,handleResetCount} = useCounter();    //panggil pake . bisa juga
    return(
        <div style={{
            display: 'flex',
            gap: '16px',
        }}>
            <button onClick={handleDecrement}>Kurang</button>
            <p style={{fontSize: "48px"}}>{count}</p>
            <button onClick={handleIncrement}>Tambah</button>

            <button onClick={handleResetCount}>RESET</button>
        </div>
    )
}
export default Counter