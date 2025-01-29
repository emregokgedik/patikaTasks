import './App.css';
import Header from './components/Header.js'
import User from './components/User.js';

const name = "Emre";
const surname = "Gokgedik";
const age = 23;
const isLoggedIn = true;



function App(){
  return(
    <div>
      <User name={name} surname={surname} age={age} isLoggedIn={isLoggedIn} />
      <Header />
    </div>
  )
}



export default App;