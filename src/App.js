
import './App.css';


function App() {

  const find=()=>{
    fetch('http://localhost:5050/api/product')
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
    })
  }

  return (
    <div className="App">
  <button onClick={find}>click</button>
    </div>
  );
}

export default App;
