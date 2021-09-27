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
    let button = document.createElement("button");
    button.classList.add("pop");
    let check_btn = document.createElement("button");
    check_btn.classList.add("toDone")
    check_btn.innerText = "✔";
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);
    check_btn.addEventListener("click", submitDone);
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

const doneForm = document.querySelector(".done");
const doneList = document.querySelector("#done-list");

let Dones = [];
function saveDones(){
    localStorage.setItem("dones", JSON.stringify(Dones));
}
function deleteDone(event){
    //target = clicked button HTML
    const li = event.target.parentElement; 
    Dones = Dones.filter((Done) => Done.id !== parseInt(li.id));
    li.remove();
    saveDones();
}
function paintDone(newDone){
    const li = document.createElement("li");
    li.id = newDone.id;
    const span = document.createElement("span");
    span.innerText = newDone.text;
    let button = document.createElement("button");
    button.classList.add("donePopBtn");
    button.innerText = "✖";
    button.addEventListener("click", deleteDone);
    li.appendChild(span);
    li.appendChild(button);//append는 맨 아래에 추가하는 것
    doneList.appendChild(li);
}

function submitDone(event){
    event.preventDefault();
    console.log(event);
    let inText = event.target.parentNode.innerText;
    const newDoneObj = {
        text : inText.slice(0, -2),
        id : Date.now(),
    }; //object 내에서는 : 사용
    Dones.push(newDoneObj);
    saveDones();
    paintDone(newDoneObj);
    deleteToDo(event);
}

const savedDone = localStorage.getItem("dones");

if(savedDone){
    const parsedDones = JSON.parse(savedDone);
    Dones = parsedDones;
    parsedDones.forEach(paintDone);
}