var modalBox = document.getElementById('modalbox');
var crossIcon = document.querySelector('.fa-xmark');
var step1 = document.querySelector('.steps-advice1');

step1.onclick = function () {
    modalBox.style.display = 'grid';
}

crossIcon.onclick = function () {
    modalBox.style.display = 'none';
}

var bodyElHeight = document.getElementById('bodyEl').style.height;
var bgImgHeight = document.getElementById('bgimg').style.height;

if (bodyElHeight>bgImgHeight) {
    bgImgHeight.style.height=bodyElHeight;  
}

function shopFunction (){
    window.location.href = "https://vinimini.nl/collections/frontpage/products/3-stappen-starter-kit";
}
function shopFunction1 (){
    window.location.href = "https://vinimini.nl/collections/frontpage/products/6-stappen-starter-kit";
}

function shopFunctionAll (){
    window.location.href = "https://vinimini.nl/collections/all";
}

function shopFunctionYoung (){
    window.location.href = "https://vinimini.nl/";
}