const images = ["3.jpg", "1.jpg", "2.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/front-end/Momentum/img/${chosenImage}`;

document.body.appendChild(bgImage);//body에 html 추가