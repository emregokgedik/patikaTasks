import { useState } from "react"
import './App.css';

function App() {
  const [name, setName] = useState("Emre");
  const [age, setAge] = useState(18);
  const [friends, setFriends] = useState (['Ahmet','Murat']);
  const [address, setAddress] = useState ({title: 'Istanbul', zip: 34340})

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

        <hr/>
        <h2>Address</h2>
        <div>{address.title} {address.zip}</div>
        <button onClick={()=>setAddress({title:"Ankara",zip:"03033"})}>Add New Address</button>
        <button onClick={()=>setAddress({...address,title:"Izmir"})}>Change City</button>
        <button onClick={()=>setAddress({...address,zip:"03950"})}>Change Zip</button>
    </div>
  );
}

export default App;