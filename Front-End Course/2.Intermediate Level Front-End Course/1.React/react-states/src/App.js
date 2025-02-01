import { useState } from "react"
import './App.css';

function App() {
  const [name, setName] = useState("Emre");
  const [age, setAge] = useState(18);
  const [friends, setFriends] = useState (['Ahmet','Murat']);
  return (
    <div className="App">
        <h1>Hi {name} !</h1>
        <h1>Age: {age}</h1>
        <button onClick={()=>setName("Ahmet")}>Set Name</button>
        <button onClick={()=>setAge(19)}>Set Age</button>
        <hr/>
        <h2>Friends</h2>
        {
          friends.map((friend,index) =>
          (<div key={index}>{friend}</div>
          ))
        }
        <button onClick={()=>setFriends(...friends,'Ayse')}>Add New Friend</button>
    </div>
  );
}

export default App;