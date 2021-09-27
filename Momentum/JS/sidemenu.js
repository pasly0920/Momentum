const ta_btn=document.querySelector(".ta-btn");
const ta_show=document.querySelector("nav ul .ta-show");
const ta_rotate=document.querySelector("nav ul .first");
const menu_btn = document.querySelector(".btn");
const side_bar = document.querySelector(".sidebar");
const btn_setup = document.querySelector(".btn_set");
const setupContainer = document.querySelector("#setup");
const setupPopBtn = document.querySelector("#setupPop");
const body = document.querySelector("body");
const image = document.querySelector("img");
const todo_btn = document.querySelector("#btn_todo");
const todoContainer = document.querySelector(".todo");
const todoPopBtn = document.querySelector("#todoPop");
const doneContainer = document.querySelector(".done");
const done_btn = document.querySelector("#btn_done");
const donePopBtn = document.querySelector("#donePop");

ta_btn.addEventListener("click", ()=>{
    ta_show.classList.toggle("show");
});
ta_rotate.addEventListener("click", ()=>{
    ta_show.classList.toggle("rotate");
});
ta_show.addEventListener("click", ()=>{
    ta_btn.classList.toggle("rotate");
});
menu_btn.addEventListener("click", ()=>{
    menu_btn.classList.toggle("click");
    side_bar.classList.toggle("show");
});

btn_setup.addEventListener("click", ()=>{
    setupContainer.classList.add('show');
    image.classList.add('shadow');
});
setupPopBtn.addEventListener("click", ()=>{
    setupContainer.classList.remove('show');
    image.classList.remove('shadow');
});

todo_btn.addEventListener("click", ()=>{
    todoContainer.classList.add('show');
    image.classList.add('shadow');
})

todoPopBtn.addEventListener("click", ()=>{
    todoContainer.classList.remove('show');
    image.classList.remove('shadow');
})

done_btn.addEventListener("click", ()=>{
    doneContainer.classList.add('show');
    image.classList.add('shadow');
})
donePopBtn.addEventListener("click", ()=>{
    doneContainer.classList.remove('show');
    image.classList.remove('shadow');
})