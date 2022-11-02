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