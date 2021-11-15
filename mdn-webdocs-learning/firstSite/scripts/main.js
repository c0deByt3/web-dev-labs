// window.onload = event => {
//     alert('window fully loaded');
// };

const myHeading = document.querySelector('h1');

// myHeading.onclick = event => myHeading.style.color = 'red';

const subHeading = document.querySelector('h2');
let myButton = document.querySelector('button');
let htmlImg = document.getElementById('htmlImage');

htmlImg.addEventListener('mouseover', function() {
    let mySrc = htmlImg.getAttribute('src');
    if (mySrc === 'images/HTML5-logo-and-wordmark.png') {
        htmlImg.setAttribute('src', 'images/monst3r_profile.jpg');
    } else {
        htmlImg.setAttribute('src', 'images/HTML5-logo-and-wordmark.png');
    }
});

myButton.onclick = function setUserName() {
    let myName = prompt('Please Enter Your Name');
    localStorage.setItem('name', myName);
    subHeading.textContent = 'Web Develpoment technologies, references & resources' + ' for ' + myName;
};


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    subHeading.textContent = 'Web Develpoment technologies, references & resources' + ' for ' + storedName;
};
