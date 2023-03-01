import React, { useEffect, useState } from "react";

const Counter = () => {
  const [timer, setTimer] = useState(10);

  useEffect(()=>{
    if(timer !==0){
    const interval=setInterval(()=>{
        setTimer(timer -1 )
    },1000)

    return()=>clearInterval(interval);
    }
   

    

  },[timer])

  return (
    <div>
        <h1 className="bg-success">2.Step Counter</h1>
      <div
        style={{
          height: "250px",
          width: "250px",
          backgroundColor: "blue",
          borderRadius: "50%",
          color: "white",
          fontSize: "60px",
          margin:"10px auto", lineHeight:"250px"
        }}
      > {timer} </div>

      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Arttır
      </button> */}
      {/* <p>{title} </p> */}
    </div>
  );
};

export default Counter;
