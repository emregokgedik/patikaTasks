import {useState} from 'react'

function Form() {
    const [form,setForm] = useState({full_name:"",phone_number:""})

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(form.full_name === "" || form.phone_number === ""){
            return false;
        }
        console.log(form);
    }
  return (
    <form onSubmit={onSubmit}>
    <div>
        <div>
      <input name="full_name" placeholder='Full Name' onChange={onChangeInput}/>
        </div>
        <div>
      <input name="phone_number" placeholder='Phone Numberf' onChange={onChangeInput}/>
      </div>
        <div>
            <button>Add</button>
        </div>
    </div>
    </form>
  )
}

export default Form
