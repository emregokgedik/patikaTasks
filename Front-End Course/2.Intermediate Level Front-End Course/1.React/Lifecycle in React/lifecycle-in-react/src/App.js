import { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [isVisible,setIsVisible]=useState(true);
  return (<div className='App'>
    {isVisible&&<Counter />}
    <button onClick={()=>setIsVisible(!isVisible)}>Show/Hide</button>
  </div>);
}

export default App;
