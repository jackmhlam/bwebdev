const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/webdev.png') {
		myImage.setAttribute('src','images/webdev2.png');
	} else {
		myImage.setAttribute('src','images/webdev.png');
	}
}

