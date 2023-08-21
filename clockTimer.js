import React, { useEffect, useState, useRef } from "react";

const ClockTimer = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  let id = useRef(); // useref used to store the reference or some value that is not going to change wheneevr compo get rerender
  useEffect(() => {
    return () => {
      clearInterval(id.current);
    };
  }, []);

  const handleStart = () => {
    id.current = setInterval(() => {
      setTime((prev) => {
        if (prev.sec === 60) {
          return { ...prev, min: prev.min + 1, sec: 0 };
        }
        if (prev.min === 60) {
          return { ...prev, hr: prev.hr + 1, min: 0, sec: 0 };
        }
        return { ...prev, sec: prev.sec + 1 };
      });
    }, 1000);
  };

  return (
    <>
      <span>
        <h1>
          {time.hr.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
          :
          {time.min.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
          :
          {time.sec.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </h1>
      </span>
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
            setTime({ hr: 0, min: 0, sec: 0 });
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ClockTimer;
