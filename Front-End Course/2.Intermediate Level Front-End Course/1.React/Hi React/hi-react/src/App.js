import './App.css';
import Header from './components/Header.js'

const name = "Emre"
const surname = "Gokgedik"
const isLoggedIn = true;

function App(){
  return(
    <div>
      <h1>
      {isLoggedIn
      ? `Hello ${name} ${surname}`:"Please login."}
      </h1>
      <Header />
    </div>
  )
}



export default App;