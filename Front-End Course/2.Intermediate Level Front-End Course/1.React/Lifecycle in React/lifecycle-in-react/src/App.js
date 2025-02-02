import { useState, useEffect } from "react";

function App() {
  const [number,setNumber] = useState(0)
  const [name,setName] = useState("Emre")

  useEffect(()=>{
    console.log("Component mounted");
  },[])

  useEffect(()=>{
    console.log("Number state updated");
  },[number])

  useEffect(()=>{
    console.log("Name state updated");
  },[name])

  return (
    <div className='App'>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click</button>

      <hr/>

      <h1>{name}</h1>
      <button onClick={()=>setName("Ahmet")}>Click</button>
    </div>
  );
}

export default App;
