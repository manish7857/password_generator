
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/passchar';

function App() {
  let [uppercase, setUppercase]=useState(false)
  let [lowercase, setLowercase]=useState(false)
  let [number, setNumber]=useState(false)
  let [symbol, setSymbol]=useState(false)
  let [passwordlen,setPasswordLen]=useState(10)
  let [fPass,setPass]=useState('')

  let createPassword=()=>{
    let finalpass=''
    let charSet='';
    if(uppercase||lowercase||number||symbol){
if(uppercase) charSet+=UC;
if(lowercase) charSet+=LC;
if(number) charSet+=NC;
if(symbol) charSet+=SC;
for(let i=0;i<passwordlen;i++){
finalpass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
}
setPass(finalpass)
    }
    else{
      alert("Please select atleast one Checkbox....")
    }
  }
  return (
 
     <div className="App" > 
      <div className="passwordBox" >
        <h2>Password Generator</h2>
        <div className='passwordBoxin'>
          <input type="text" readOnly  value={fPass}/> <button>Copy</button>
        </div>

        <div className="passlength">
          <label >Password Length</label>
          <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)} />
        </div>

        <div className="passlength">
          <label >Include UpeerCase letter</label>
          <input type='checkbox'  checked={uppercase}  onChange={()=>setUppercase(!uppercase)}/>
        </div>
        <div className="passlength">
          <label >Include LowerCase letter</label>
          <input type='checkbox'checked={lowercase}  onChange={()=>setLowercase(!lowercase)} />
        </div>
        <div className="passlength">
          <label >Include Number</label>
          <input type='checkbox' checked={number}  onChange={()=>setNumber(!number)}/>
        </div>

        <div className="passlength">
          <label >Include Symbol</label>
          <input type='checkbox' checked={symbol}  onChange={()=>setSymbol(!symbol)}/>
        </div>
        <button className='btn' onClick={createPassword}>Generate Password</button>

      </div>

    </div>
  );
}

export default App;
