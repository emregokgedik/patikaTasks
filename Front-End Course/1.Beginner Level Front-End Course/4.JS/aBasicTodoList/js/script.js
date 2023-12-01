const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("list");


function addTodo(){
    if(taskInput.value===""){
        alert("Bir görev girmelisin!");
    }else{
        let li=document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML=`<input class="form-check-input" type="checkbox">
                ${taskInput.value} <button type="button" class="btn-close " aria-label="Close"></button>
            `
        taskList.appendChild(li);
        alert("Görev başarıyla eklendi");
        taskInput.value="";
    }
}
function deleteTodo(){
    
}
function editTodo() {
    
}