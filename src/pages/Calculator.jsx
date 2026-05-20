import React, { useState } from "react";
import "../index.css";
import useGoldPrice from "../custom_hook/useGoldPrice";

function Calculator() {
  const [gram, setGram] = useState("")
  const[purity, setPurity] = useState("24k")

  const {data, loading} = useGoldPrice("https://api.gold-api.com/price/XAU/INR")
  const priceperGram = data ? data.price / 31.1035 : 0
  const calculatedPrice =  purity === "24k" 
        ? priceperGram * gram
        :priceperGram * gram * 0.916


  if(loading) return <h2>Loading...</h2>
  return (
    <div className="calculat-main-container">
      <div className="sub-container">
        <div className="calculate-page-card">
          <span>Enter grams</span>
          <input type="number" onChange={(e) => (setGram(e.target.value))} />
        </div>
        <div className="calculate-page-card">
          <span>Gold purity</span>
          <div className="gold-purity-btn">
            <button className={purity === "24k" ? "acteave" : ""} onClick={() => (setPurity("24k"))}>
              24k
              <br />
              <span>Pure gold</span>
            </button>
            <button className={purity === "22k" ? "acteave" : ""} onClick={() => (setPurity("22k"))} >
              22k
              <br />
              <span>91.6% pure</span>
            </button>
          </div>
        </div>
        <div className="calculate-page-card output-card">
          <span>Estimated value</span>
          <h1><span>{data.currencySymbol}</span>{calculatedPrice.toLocaleString('en-IN', {maximumFractionDigits: 0})}</h1>
          <p>Based on live gold price {purity === "24k" ? "24k" : "22k"}</p>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
