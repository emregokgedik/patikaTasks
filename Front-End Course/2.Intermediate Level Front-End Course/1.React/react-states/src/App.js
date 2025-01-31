import { useState } from "react"
import './App.css';

function App() {
  const [name, setName] = useState("Emre");
  const [age, setAge] = useState(18);
  return (
    <div className="App">
        <h1>Hi {name} !</h1>
        <h1>Age: {age}</h1>
        <button onClick={()=>setName("Ahmet")}>Set Name</button>
        <button onClick={()=>setAge(19)}>Set Age</button>
    </div>
  );
}

export default App;
