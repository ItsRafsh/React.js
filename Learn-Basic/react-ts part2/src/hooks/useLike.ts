import { useState } from "react";

export const useLike = () => {
    const [like, setLike] = useState(0);
    const getLike = () => {
        alert('anda di like');
        setLike(1);
    };
    const unLike = () => {
        alert('anda di unlike');
        setLike(0);
    };
    return{
        like,
        getLike,
        unLike,
    };
};