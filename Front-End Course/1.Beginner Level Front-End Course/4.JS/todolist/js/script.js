function newElement(){
    let task=document.querySelector("#task")
    if(task.value!=""){
        let liste=document.querySelector("ul")
        let li=document.createElement("li"); 
        li.textContent=task.value;
        liste.appendChild(li)
        $(".success").toast('show');

    }else{
        $(".error").toast('show');
    }
}