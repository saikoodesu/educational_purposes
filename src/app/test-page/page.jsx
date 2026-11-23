
"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

// useState, useEffect...

export default function Testpage() {
  // let count = 0;

  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("გამარჯობა");
    // Dependency array:
  }, []);

  useEffect(() => {
    // მაგ. ინფორმაციის წამოღება, შენახვა localStorage-ში.
    console.log(localStorage.getItem("userName"));
  }, []);


    useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("count", JSON.stringify(count));
    }
  }, [count, isLoaded]);

  
  useEffect(() => {
    const savedCount = localStorage.getItem("count");

    if (savedCount !== null) {
      setCount(JSON.parse(savedCount));
    }

    setIsLoaded(true);
  }, []);


  const incrementByOne = () => {
    // count++;

    setCount((prevCount) => {
      // console.log(prevCount);

      return prevCount + 1;
    });
  };

  const decrementByOne = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
        return prevCount;
      } else {
        return prevCount - 1;
      }
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.count}>{count}</h2>

      <button className={styles.button} onClick={incrementByOne}>
        +
      </button>

      <button className={styles.button} onClick={decrementByOne}>
        -
      </button>
    </div>
  );
}
