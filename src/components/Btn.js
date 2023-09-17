import React, { useState } from "react";
import "../App.css";

const Buttons = () => {
  const [result, setresult] = useState("");
  // Method to add entry from user on input
  const onc = (e) => {
    setresult(result+e);
  };
  //To clear the whole screen
  const clear = () => {
    setresult("");
  };
  //For One Backspace
  const C = (e) => {
   try {
    setresult(result.slice(0,-1));
   } catch (error) {
    clear();
   }
  };
  //For get Collections
  const Equal = () => {
    try {
      // eslint-disable-next-line no-eval
      setresult(eval(result));
    } catch (error) {
      setresult('Error')
    }
  };
  return (
    <div className="block">
      <input className="input" defaultValue={result}></input>
      <div className="calculator">
        <button
          className="btn-0"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          9
        </button>
        <button
          className="btn-1"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          8
        </button>
        <button
          className="btn-2"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          7
        </button>
        <button
          className="btn-3"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          6
        </button>
        <button
          className="btn-4"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          5
        </button>
        <button
          className="btn-5"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          4
        </button>
        <button
          className="btn-6"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          3
        </button>
        <button
          className="btn-7"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          2
        </button>
        <button
          className="btn-8"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          1
        </button>
        <button
          className="btn-9"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          0
        </button>
        <button className="btn-C" onClick={C}>
          C
        </button>
        <button
          className="btn-SUM"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          +
        </button>
        <button
          className="btn-SUB"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          -
        </button>
        <button
          className="btn-MUL"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          *
        </button>
        <button
          className="btn-DIV"
          onClick={(e) => {
            onc(e.currentTarget.textContent);
          }}
        >
          /
        </button>
        <button className="btn-EQUAL" onClick={Equal}>=</button>
        <button className="btn-Clear" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Buttons;
