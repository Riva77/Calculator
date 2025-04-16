import Button from "./Button";
import { useState } from "react";

const Display=()=> {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    if (val === "=") {
      try {
        setInput(eval(input)); 
      } catch {
        setInput(" Syntax Error");
      }
    } else if (val === "C") {
      setInput(""); 
    } else {
      setInput(input + val); 
    }

  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={styles.outer}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={styles.screen}>
            <span style={{ color: "black", fontSize: "30px", padding: "10px" }}>
              {input}
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Button value="1" onClick={(val) => handleClick(val)} />
          <Button value="2" onClick={(val) => handleClick(val)} />
          <Button value="3" onClick={(val) => handleClick(val)} />
          <Button value="4" onClick={(val) => handleClick(val)} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Button value="5" onClick={(val) => handleClick(val)} />
          <Button value="6" onClick={(val) => handleClick(val)} />
          <Button value="7" onClick={(val) => handleClick(val)} />
          <Button value="8" onClick={(val) => handleClick(val)} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Button value="9" onClick={(val) => handleClick(val)} />
          <Button value="0" onClick={(val) => handleClick(val)} />
          <Button value="+" onClick={(val) => handleClick(val)} />
          <Button value="-" onClick={(val) => handleClick(val)} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Button value="*" onClick={(val) => handleClick(val)} />
          <Button value="/" onClick={(val) => handleClick(val)} />
          <Button value="=" onClick={(val) => handleClick(val)} />
          <Button value="C" onClick={(val) => handleClick(val)} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Button value="AC" onClick={(val) => handleClick(val)} />
          <Button value="." onClick={(val) => handleClick(val)} />
          <Button value="%" onClick={(val) => handleClick(val)} />
          <Button value="←" onClick={(val) => handleClick(val)} />
        </div>
      </div>
    </section>
  );
}

export default Display;

const styles = {
  outer: {
    width: "380px",
    height: "600px",
    backgroundColor: "#EFDEFF",
    borderRadius: "19px",
    boxShadow: "8px 11px rgba(73, 31, 67, 0.6",
    border: "2px solid black",
    margin: "70px",
    cursor: "pointer",
  },

  screen: {
    width: "345px",
    height: "110px",
    borderRadius: "19px",
    backgroundColor: "#FFFFFF",
    marginTop: "20px",
    border: "2px solid black",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end", 
  },
};
