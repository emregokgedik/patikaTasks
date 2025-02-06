import {useState} from 'react'

function Form({addContact,contacts}) {
    const [form,setForm] = useState({full_name:"",phone_number:""})

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(form.full_name === "" || form.phone_number === ""){
            return false;
        }
        addContact([...contacts,form])
        setForm({full_name:"",phone_number:""})
    }
  return (
    <form onSubmit={onSubmit}>
    <div>
        <div>
      <input name="full_name" placeholder='Full Name' value={form.full_name} onChange={onChangeInput}/>
        </div>
        <div>
      <input name="phone_number" placeholder='Phone Numberf' value={form.phone_number}  onChange={onChangeInput}/>
      </div>
        <div>
            <button>Add</button>
        </div>
    </div>
    </form>
  )
}

export default Form
