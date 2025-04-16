


const Button = ({value, onClick}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={styles.outer} onClick={()=>onClick(value)}>
      <span style={styles.text}>{value}</span>
      </div>
     
      
    </div>
  );
};

export default Button;

const styles = {
  outer: {
    width: "60px",
    height: "60px",
    backgroundColor: "#EFDEFF",
    borderRadius: "17px",
    boxShadow: "8px 7px rgba(73, 31, 67, 0.6",
    border: "1px solid black",  
    margin: "10px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
  },

  text:{
   
    fontSize: "34px",
    fontWeight: "bold",
    color: "#000",

  }
};

