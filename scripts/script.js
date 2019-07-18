let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, world';
//myHeading=document.querySelector('h2');
var paragraph = document.querySelector('.prap');
paragraph.textContent = generateHeader('Viet Nam', 'Ho Chi Minh');

function generateHeader(firstPart, secondPart) {
    let result = firstPart + '---' + secondPart;
    return result;

}

let myImage = document.querySelector('#myImg');
myImage.onclick = function() {
    let srcImg = myImage.getAttribute('src');
    if (srcImg === 'firefox.webp') {
        myImage.setAttribute('src', 'images/scene1.jpg');
    } else {
        myImage.setAttribute('src', 'firefox.webp');
    }
}
let changeUserBtn = document.querySelector('#changeUserBtn');
let mainHeader = document.querySelector('h1');

function setUserName() {
    let inputName = prompt('Pls enter you name');
    localStorage.setItem('inputName', inputName);
    mainHeader.textContent = 'Mozilla is cool, ' + inputName;
}
if (!localStorage.getItem('inputName')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('inputName');
    mainHeader.textContent = 'Mozilla is cool, ' + storedName;
}
changeUserBtn.onclick = function() {    
        setUserName();
}
/*
function alertMe(string) {
    alert('onclick attribute from ' + string );
}
let allSite = document.querySelector('img').onclick = function() {
    alert('Stop poking me');
}
let all = document.querySelector('img[src="firefox.webp"]').onclick= function() {alertMe('firefox');}
//let another = document.querySelector('li').onclick=alertMe('property selector');
*/
