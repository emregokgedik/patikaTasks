import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import './style.css'

function Contacts() {
  const [contacts,setContacts] = useState([{
    full_name:'Emre',
    phone_number:'123123'
  },
  {
    full_name:'Ahmet',
    phone_number:'123123'
  },{
    full_name:'Nazli',
    phone_number:'123123'
  },]);
  useEffect(()=>{
    console.log("Contacts log:",contacts);
  },[contacts])
  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts = {contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
