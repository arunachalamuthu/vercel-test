
import { useState } from 'react';
import './App.css';


function App() {
const[name,setname]=useState([])
  const find= async(e)=>{
    e.preventDefault()
    const wait= await fetch('http://localhost:5050/api/product')
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setname(...name,data.message)
alert()
    })
  }
const search= async()=>{
  alert()
   const wait= await fetch('http://localhost:5050/api/product')
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setname(...name,data.message)
alert()
    })
}
  return (
    <div className="App">
      <form onSubmit={find}>

        <input type='submit'  />
      </form>

      {name}
  <button onClick={search}>click</button>
    </div>
  );
}

export default App;
