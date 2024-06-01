import React, { useEffect, useState } from "react";

const App = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      // hexColor += hex[Math.floor(Math.random() * 15)];
      hexColor += hex[randomColor(hex.length)];
    }
    // console.log(hexColor);

    setColor(hexColor);
  }
  function handleCreateRandomColorRGB() {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(()=>{
    if(typeOfColor === "rgb") handleCreateRandomColorRGB();
    else handleCreateRandomHexColor();
  },[typeOfColor]);

  return (
    <div
      style={{
      width: "100vw",
        height: "100vh",
        background: color,
        // display: "grid",
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: 'column'
        

      }}
    > 
    <div style={{
      width:'50vw',
      height: '100vh',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '10px',
      marginTop:'20px',
      // display: 'flex',
    //  gridTemplateColumns:'repeat(n,3fr)',
    // flexDirection:'column',
      // gap: '10px'
    }}>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomColorRGB
        }
      >
        Generate Random Color
      </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection:'column',
          gap:'20px'
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' :  'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default App;
