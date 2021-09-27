const setup = document.querySelector("#setup");
const setuptext = document.querySelector("#setup h2");
const btn_reset = document.querySelector("#setup a#reset");

btn_reset.addEventListener("click", ()=>{
    console.log("btn_clicked");
    localStorage.clear();
    window.location.reload();//refresh;
});