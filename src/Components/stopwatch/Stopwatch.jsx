import { useState } from "react";
import "./stopwatch.scss";

const Stopwatch = () => {
  const [time, setTime] = useState({hr:0,min:0,sec:0,milli:0});
  const [status, setStatus]=useState();

  let updemin=time.min;
  let updesec=time.sec;
  let updemilli=time.milli;
  let updehr=time.hr;

  const start=()=>{
    myFun();
    setStatus(setInterval(myFun,10))
  }

  const myFun=()=>{
    if(updemilli === 100){
        updemilli=0;
        updesec++
    }
    if(updesec === 60){
        updesec=0;
        updemin++
    }
    if(updemin === 60){
        updemin=0;
        updehr++
    }
    updemilli++;
    return(setTime({hr:updehr,min:updemin,sec:updesec,milli:updemilli}))
  }

  const stop=()=>{
    clearInterval(status);
  }

  const restart=()=>{
    clearInterval(status);
    setTime({hr:0,min:0,sec:0,milli:0})
  }

  return (
    <>
      <h1>{time.hr+":"+time.min+":"+time.sec+":"+time.milli}</h1>
      <div className="buttons">
        <button className="start" onClick={start}>start</button>
        <button className="stop" onClick={stop}>stop</button>
        <button className="restart" onClick={restart}>restart</button>
      </div>
    </>
  );
};

export default Stopwatch;
