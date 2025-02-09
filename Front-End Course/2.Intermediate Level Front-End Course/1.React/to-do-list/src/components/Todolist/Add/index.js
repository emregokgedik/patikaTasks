import {useState,useEffect} from 'react'
const initialFormValues = {toDoName:"",toDoStatue:""}

function Add({addToDo,toDoList}) {
	const [add,setAdd] = useState(initialFormValues)

	useEffect(()=>{
		setAdd(initialFormValues)
	  },[add])

	  const onSubmit = (e) => {
        e.preventDefault()
        if(add.toDoName === ""){
          alert('To do name is empty')
            return false;
        }
        addToDo([...toDoList,add])
    }




  return (
    <>
      	<header class="header">
		<h1>todos</h1>
		<form onSubmit={onSubmit}>
			<input class="new-todo" placeholder="What needs to be done?" autoFocus/>
		</form>
	</header>
    </>
  )
}

export default Add
