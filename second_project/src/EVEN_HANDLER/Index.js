import React, { useState } from "react";

const Index = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{background: "pink", textAlign: "center", fontSize: "20px", padding: "1rem", margin : "1rem"}}>
      {toggle && <p>My name is Rakib Hasan . i am bangladeshi . out village name is Auria</p>}
      <div>
        <button onClick={() => setToggle(!toggle)}>{toggle ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
};

export default Index;
