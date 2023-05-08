import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [time,setTime] = useState(0);

  const handleKeyDown=(e)=>{
    if(e.key === 'Enter'){
      const inputTime = Math.floor(e.target.value);
      if(isNaN(inputTime)){
        setTime(0);
      } else{
        setTime(inputTime)
      }
    }
  }
  useEffect(()=>{
    let intervalId;
    if(time>0){
      intervalId = setInterval(()=>{
        setTime((prevTime)=>   prevTime-1)
      },1000)
    }else{
      setTime(0)
    }
    return ()=> clearInterval(intervalId)
  } ,[time])
  return (
    <>
    <div>
      <h1>Count Down Timer      </h1>
      <label htmlFor='timecount'>Time Count: </label>
      <input id="timecount" onKeyDown={handleKeyDown} placeholder="Enter the time count"/>
      <div id="current-time">Timer: {time}</div>
    </div>
    <h2>Press "Enter" after giving Input</h2>

    </>
  );
}

export default App;
