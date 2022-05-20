const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `C:/Users/이준희/Desktop/실습/study/JS project/img/${chosenImage}`;

document.body.appendChild(bgImage);