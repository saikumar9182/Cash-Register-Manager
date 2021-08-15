import "./App.css";
import React, { useState } from "react";

function App() {
  let tableval2;
  const [cashDiv, setcashDiv] = useState("");
  const [bill, setBill] = useState(0);
  const [cash, setCash] = useState(0);
  const [valid, setValid] = useState("");
  const [casherror, setCashError] = useState("");
  const [twok, setTwoK] = useState(0);
  const [fiveh, setFiveH] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [five, setFive] = useState(0);
  const [one, setOne] = useState(0);
  const [flag, setFlag] = useState(false);

  function billHandler(e) {
    setBill(e.target.value);
  }
  function cashHandler(e) {
    setCash(e.target.value);
  }
  const cashDivValue = (
    <>
      <label>
        <h2>Cash Given:</h2>
      </label>
      <br />
      <input type="number" onChange={cashHandler}></input>
      <br />
    </>
  );

  const tableval = (
    <div class="changeReturn">
      <div class="label">Return Change:</div>
      <div id="output">
        <table>
          <tr>
            <th class="bottom-row">No of Notes</th>
            <td class="noOfNotes height-col">{twok}</td>
            <td class="noOfNotes height-col">{fiveh}</td>
            <td class="noOfNotes height-col">{hundred}</td>
            <td class="noOfNotes height-col">{twenty}</td>
            <td class="noOfNotes height-col">{ten}</td>
            <td class="noOfNotes height-col">{five}</td>
            <td class="noOfNotes height-col">{one}</td>
          </tr>
          <tr>
            <th class="bottom-row">Note</th>
            <td class="bottom-row ">2000</td>
            <td class="bottom-row">500</td>
            <td class="bottom-row">100</td>
            <td class="bottom-row">20</td>
            <td class="bottom-row">10</td>
            <td class="bottom-row">5</td>
            <td class="bottom-row">1</td>
          </tr>
        </table>
      </div>
    </div>
  );

  function set() {
    setTwoK(0);
    setFiveH(0);
    setHundred(0);
    setTwenty(0);
    setTen(0);
    setFive(0);
    setOne(0);
  }

  function buttonHandler(e) {
    if (cashDiv == "") {
      if (bill <= 0) {
        setValid(<p>Enter Valid Bill Amount</p>);
      } else {
        setValid("");
        setcashDiv(cashDivValue);
      }
    } else {
      if (Number(cash) < Number(bill)) {
        set();
        setCashError(<p>Cash is less than bill, please enter right amount</p>);
      }else if(Number(bill)<0){
        set();
        setCashError(<p>Bill cannot be negative.</p>);


      } else {
        setCashError("");
        let num = cash - bill;

        set();

        if (num >= 2000) {
          setTwoK(Math.floor(num / 2000));
          num = num % 2000;
          console.log(twok);
        }

        if (num >= 500) {
          setFiveH(Math.floor(num / 500));
          num = num % 500;
        }

        if (num >= 100) {
          setHundred(Math.floor(num / 100));
          num = num % 100;
        }

        if (num >= 20) {
          setTwenty(Math.floor(num / 20));
          num = num % 20;
        }

        if (num >= 10) {
          setTen(Math.floor(num / 10));
          num = num % 10;
        }

        if (num >= 5) {
          setFive(Math.floor(num / 5));
          num = num % 5;
        }

        if (num >= 1) {
          setOne(Math.floor(num / 1));
          num = num % 1;
        }

        console.log("flag set");
        console.log(flag);
        tableval2 = tableval;

        setFlag(true);

        //  setTable(tableval);
      }
    }
  }

  return (
    <div className="App">
      <h1>Cash Register Manager</h1>
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </p>
      <label>
        <h2>Bill Amount:</h2>
      </label>
      <br />
      <input type="number" onChange={billHandler}></input>
      <br />

      {cashDiv}

      <button onClick={buttonHandler}>Next</button>
      {valid}
      {casherror}

      {flag == true ? tableval : ""}
    </div>
  );
}

export default App;
