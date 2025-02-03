import { useState, useEffect } from "react";

function Counter() {
  const [number,setNumber] = useState(0)

  useEffect(() => {
    console.log("Component mounted");

    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval(interval); // Clean previous interval
  }, []);

  useEffect(()=>{
    console.log("Number state updated");
  },[number])

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click</button>

    </div>
  );
}

export default Counter;
