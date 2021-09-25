const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input")
const greeting=document.querySelector("#greeting");

const HIDDENCLASS="hidden"
const USERNAME_KEY="username";

// event에 반응하는 함수를 호출시 시스템에서 정보를 기본적으로 넣어주고 
// 이를 event 객체에 넣어서 이용하는 것.
function onLoginSubmit(event){
    event.preventDefault();
    const username= loginInput.value;
    loginForm.classList.add(HIDDENCLASS);
    //greeting.innerText="Hello " + username;
    //greeting.innerText=`Hello ${username}`; //위 아래는 same.
    // 바로 위의 방식은 `로 시작해야 함. 변수를 감싸는 ${}를 챙겨야함.
    //greeting.classList.remove(HIDDENCLASS);
    paintGreetings(username)
    localStorage.setItem(USERNAME_KEY, username);
}
//loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDENCLASS);
}

if(savedUsername === null)
{
    loginForm.classList.remove(HIDDENCLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else
    paintGreetings(savedUsername);