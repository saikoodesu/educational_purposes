"use client";
import { useState, useEffect} from "react";
import styles from "./page.module.css";

// useState, useEffect...

export default function Testpage() {
//   let count = 0;

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("baro");
    // dependency array:
  }, [count]);

  useEffect(() =>{
    //ინფორმაცია წამოღება, შენახვა local storage-ში.
    console.log(localStorage.getItem("userName"));
  }, []);

  const incrementByOne = () => {
    // count++;
    setCount((prevCount) => {
          console.log(prevCount);


         return prevCount + 1});
  };
    const decrementByOne = () => {
    setCount((prevCount) => {
          console.log(prevCount);


         return prevCount - 1
        });
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={incrementByOne}>+</button>
      {"     "}
      <button onClick={decrementByOne}>-</button>
    </>
  );
}