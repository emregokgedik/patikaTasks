const taskInput=document.getElementById("taskInput"); //assign input which enters by user
const taskList=document.getElementById("list"); //assign ul element(entire list)

taskList.addEventListener("click",function(e){
    if(e.target.tagName==="I"){
        editTodo(e);
    }else if(e.target.tagName==="BUTTON"){
        deleteTodo(e.target);
    }else{
        selectTodo(e);
    }
},false);


function addTodo(){
    if(taskInput.value===""){
        alert("Bir görev girmelisin!");
    }else{
        let li=document.createElement("li");
        li.classList.add("list-group-item","d-flex","justify-content-between","align-items-start");
        li.innerHTML=`<div class="me-auto"><input class="form-check-input" type="checkbox"> ${taskInput.value}</div><i class="fa-solid fa-pen me-1"></i><button type="button" class="btn-close "  aria-label="Close"></button>
            `
        taskList.appendChild(li);
        alert("Görev başarıyla eklendi");
        taskInput.value="";
        saveData();
    }
}

taskInput.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
addTodo();
    }
});

function deleteTodo(button){
    var listItem = button.closest('.list-group-item');
    listItem.parentNode.removeChild(listItem);
    saveData();
}
function editTodo(e) {
    let newItem=prompt("Yeni değeri girin",e.target.parentNode.querySelector(".me-auto").textContent);
    if(!newItem==="null"||!newItem=="")
    e.target.parentNode.querySelector(".me-auto").innerHTML=`<input class="form-check-input" type="checkbox"> ${newItem}`
    saveData();
}

function selectTodo(e) {
    let checked=e.target.closest("li").querySelector("div");
    if(checked.classList.contains("text-decoration-line-through")){
        checked.classList.remove("text-decoration-line-through");
        e.target.closest("li").querySelector(".form-check-input").checked=false;
    }else{
        checked.classList.add("text-decoration-line-through");
        e.target.closest("li").querySelector(".form-check-input").checked=true;
    }
    
    saveData();
}

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showData(){
    taskList.innerHTML=localStorage.getItem("data");
}
showData();