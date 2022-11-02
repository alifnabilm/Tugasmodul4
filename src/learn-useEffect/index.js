import React, { useState, useEffect } from "react";
import "./index.css";
export default function Index() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  //dijalankan 1 kali
  useEffect(() => {
    fetch("https://api.waifu.im/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.images);
        setData(data.images[0].url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //dijalankan terus setiap ada perubahan count
  useEffect(() => {
    if (count === 10) {
      alert("KAMU HEBAT UDAH SAMPE 10");
    }
  }, [count]);
  //dijalankan terus menerus
  useEffect(() => {
    console.log("spam console kuy");
  });
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <div className="Main">
      <p className="Text"> Learn useEffect</p>
      <p>KELOMPOKXX</p>
      <ul>
        <img src={data} width={300} height={300} alt="gambar"/>
      </ul>
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
    </div>
  );
}
