import React, { useEffect, useState, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [val, setVal] = useState("");
  let id = useRef(); // useref used to store the reference or some value that is not going to change wheneevr compo get rerender
  useEffect(() => {
    return () => {
      clearInterval(id.current);
    };
  }, []);

  const handleStart = () => {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  //   const handleCheck = (event) => {
  //     console.log(event);
  //   };
  return (
    <>
      <span>{time}</span>
      <div>
        <button onClick={handleStart}>Start</button>
        <button
          onClick={() => {
            clearInterval(id.current);
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            clearInterval(id.current);
            setTime(0);
          }}
        >
          Reset
        </button>
        {/* <button value="test" onClick={handleCheck}>
          Check
        </button> */}
      </div>
      {/* <div>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div> */}
    </>
  );
};

export default Timer;
