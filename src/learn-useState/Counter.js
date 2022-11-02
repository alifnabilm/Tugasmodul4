import React, { useState } from "react";
import logo from "../logo.svg";
import "./Counter.css";
import { RootContext } from "../App";
export default function Counter() {
  const [showImage, setShowImage] = useState(true);
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  const hideImage = () => {
    setShowImage(!showImage);
  };

  function getvalue(e){
    setWord(e.target.value)
  }
  return (
    <div className="Main">
      <p className="Text">Counter with useState</p>
      <p>KELOMPOK 25</p>
      <div className="ViewImage">
        <div className="ViewImage1">
          <img
            className="App-logo"
            style={{ display: showImage === true ? "flex" : "none" }}
            src={logo}
            alt="logo"
          />
        </div>
        <button className="Button" onClick={hideImage}>
          {showImage !== true ? "show" : "hide"}
        </button>
      </div>
      <p className="Text">{count}</p>
      <div className="ViewButton">
        <div className="ViewButton2">
          <button className="Button" onClick={countUp}>
            Up
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={countDown}>
            Down
          </button>
        </div>
        
      </div>

      <p>{word}</p>
        <input onChange={(e) => getvalue(e)} />
        <RootContext.Consumer>
        {(value) => {
          return (
            <div
              style={{
                backgroundColor: "#59b",
                borderRadius: 25,
                paddingBottom: 1,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              <h1>Tugas Use Context</h1>
              {value.data.length === 0 ? (
                <p>Data Not Set! Open Use Context Page first!</p>
              ) : (
                value.data.map((data, i) => {
                  return (
                   <div>
                  <p>{data.nama}</p>
                  <a href={data.link}>Use Context</a>
                  </div>
                  );
                })
              )}
            </div>
          );
        }}
      </RootContext.Consumer>
    </div>
  );
}
