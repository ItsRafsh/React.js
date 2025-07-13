import { useState } from "react";


export const useCounter = () => {       //export bisa langsung disini
    const [count, setCount] = useState(0);
    const handleDecrement = () => {
        alert('Decrement');
        setCount(count - 1);
    };
    const handleIncrement = () => {
        alert('Increment');
        setCount(count + 1);
    };
    const handleResetCount = () => {
        alert('berhasil di RESET');
        setCount(0);
    }
    return{
        count,
        handleDecrement,
        handleIncrement,
        handleResetCount,
    }
}