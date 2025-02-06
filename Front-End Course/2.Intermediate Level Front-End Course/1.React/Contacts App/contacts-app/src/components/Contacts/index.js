import {useState,useEffect} from 'react'
import Form from './Form'

function Contacts() {
  const [contacts,setContacts] = useState([]);
  useEffect(()=>{
    console.log("Contacts log:",contacts);
  },[contacts])
  return (
    <div>
      Contacts
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
