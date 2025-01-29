import './App.css';
import Header from './components/Header.js'
import User from './components/User.js';

const name = "Emre";
const surname = "Gokgedik";
const age = 23;
const isLoggedIn = true;
const friends = [
  {
  id:1,
  name: 'Ahmet'
  },
  {
  id:2,
  name: 'Mehmet'
  },
  {
  id:3,
  name:'Tayfun'
  },
  {
  id:4,
  name:'Ayse'
  }]

function App(){
  return(
    <div>
      <User name={name} surname={surname} age={age} isLoggedIn={isLoggedIn} friends={friends}/>
      <Header />
    </div>
  )
}

export default App;