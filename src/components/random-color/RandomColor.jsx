import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function generateColor() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    if (typeOfColor === "hex") {
      const redHex = R.toString(16).padStart(2, "0");
      const greenHex = G.toString(16).padStart(2, "0");
      const blueHex = B.toString(16).padStart(2, "0");

      // Concatenate the components into a hexadecimal color string
      const hexColor = `#${redHex}${greenHex}${blueHex}`;

      setColor(hexColor);
    } else { 
      setColor(`rgb(${R}, ${G}, ${B})`);
    }
  }

  useEffect(()=>{
    generateColor();
  },[typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign: "center",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={generateColor}>Generate Candom Color</button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection:"column",
        }}
      >
        <h1>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
