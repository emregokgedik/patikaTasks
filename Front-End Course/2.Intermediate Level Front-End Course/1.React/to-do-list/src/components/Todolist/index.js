import {useState,useEffect} from 'react'
import StaticFooter from '../StaticFooter'
import Add from './Add'
import List from './List'

function Todolist() {
	const [toDoList,setToDoList] = useState([{
		toDoName: 'Learn React',
		toDoStatue: 'true'
	}])
	useEffect(()=>{
		console.log("toDoList log:",toDoList);
	  },[toDoList])
  return (
    <div>
      <section class="todoapp">
	<Add addToDo={setToDoList} toDoList={toDoList}/>
	<List />
</section>

<StaticFooter />
    </div>
  )
}

export default Todolist
