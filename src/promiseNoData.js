import React from "react";
import Loading from './assets/spinner-big.gif';
import "./popify.css"

function promiseNoData(promise, data, error){  
    return  (!promise && "no data")     // case "0"  
          || (error && <h1>error</h1>)   // case 3 
          || (!data && <img className="centrePROM" src={Loading} alt=""/>)  // case 1
}
export default promiseNoData;