import React, { useState } from "react"
import './App.css';
import axios from 'axios';  
import { getDefaultNormalizer } from "@testing-library/react";
function App() {
  const [data,setDatastate] = useState({rollno:'',sem:''});
  // const data1 = (d)=>{
  //   setDatastate(prev=>{
  //     return {...prev,name:''}
  //   })
  // }
  const getData = ()=>{
    axios.post('http://localhost:8080',data).then(
      (res)=>{
        console.log(res)
      })
    }
  return (
    <div className="App">
       <h1>KNOWN YOUR CGPA/SGPA</h1> 
       <div>
      <label>Roll No </label>
      <input value={data.rollno} onChange={(rollno)=>{setDatastate({...data,name:rollno.target.value})}} type="text"/>
    </div>
    <div>
      <label>Semester    </label>
      <select value={data.sem} onChange={(sem)=>{setDatastate({...data,sem:sem.target.value})}}>
        <option value={'1'}>1</option>
        <option value={'2'}>2</option>
        <option value={'3'}>3</option>
        <option value={'4'}>4</option>
        <option value={'5'}>5</option>
      </select>
    </div>
      <button onClick={()=>{getData()}}>Submit</button>
    </div>
  )
}


export default App;
