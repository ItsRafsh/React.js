import { useState } from "react";

const Like = () => {
  const [count, setCount] = useState(1999);

  const handleLike = () => {
    setCount(prev => prev + 1);
  };

  const handleUnlike = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div style={{ textAlign: "center", fontSize: "2rem", marginTop: "50px" }}>
      <button onClick={handleLike} style={{ fontSize: "2rem", marginRight: "10px" }}>
        👍 {count}
      </button>
      <button onClick={handleUnlike} style={{ fontSize: "2rem" }}>👎</button>
    </div>
  );
};

export default Like;
