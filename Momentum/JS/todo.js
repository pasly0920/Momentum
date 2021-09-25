const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteToDo(event){
    //target = clicked button HTML
    const li = event.target.parentElement; 
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    const check_btn = document.createElement("button");
    check_btn.innerText = "✔";
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(check_btn);
    li.appendChild(button);//append는 맨 아래에 추가하는 것
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value = "";//input 창 비우기
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }; //object 내에서는 : 사용
    toDos.push(newTodoObj);
    saveToDos();
    paintToDo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDo = localStorage.getItem("todos");

if(savedToDo){
    const parsedToDos = JSON.parse(savedToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function Filter(item){

}//should return true if you want remain that element, if you return false, then that item will not be included