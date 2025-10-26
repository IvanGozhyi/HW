import React, { useState } from 'react'
import Div1 from './components/Div1.jsx'
import Div2 from './components/Div2.jsx'
import Div3 from './components/Div3.jsx'
import Input from './components/Input.jsx'
import './App.css'

function App() {
    const regExp = "https:\\\\/\\\\/";
    const [counts, setCount] = useState(0);
    let Div = null;
    let DivInput = <Input />;
    if (counts === 5) {
        console.log(`You have clicked ${counts} times`);
        Div = <Div1 />
    } else
        if (counts === 10){
            console.log(`You have clicked ${counts} times`);
            Div =<Div2 />
        }else
            if (counts === 30){
                console.log(`WOW! You have clicked ${counts} times, here is the silly cat picture for you, as a reward :)`);
                Div = <Div3 />
            }
            else {
                console.log(`You have clicked ${counts} times`);
            }

  return (
    <>
        <div className = "btnDiv">
            <button type = "button" className="countButton" onClick={()=>{setCount(counts + 1)}}>press me</button>
            <button type = "button" className="countButton" onClick={()=>{setCount(0)}}>reset</button>
        </div>



        {Div}
        {DivInput}
    </>
  )
}

export default App;
