import './App.css';
import Header from './components/Header.js'

const name = "Emre";
const surname = "Gokgedik";
const isLoggedIn = true;
const fullName = `${name} ${surname}`;



function App(){
  return(
    <div>
      <h1>
      {isLoggedIn
      ? `Hello ${fullName}`:"Please login."}
      </h1>
      <Header />
    </div>
  )
}



export default App;