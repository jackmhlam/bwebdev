let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myHeading.textContent = 'Hello world!';

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
  	setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/webdev.png') {
		myImage.setAttribute('src','images/webdev2.png');
	} else {
		myImage.setAttribute('src','images/webdev.png');
	}
}

myButton.onclick = function() {
  setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
