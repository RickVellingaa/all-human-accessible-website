// Stappen in het Formulier
var Form1 = document.getElementById("form-one");
var Form2 = document.getElementById("form-two");
var Form3 = document.getElementById("form-three");
var Form4 = document.getElementById("form-four");
var Form5 = document.getElementById("form-five");
var Form5A = document.getElementById("form-fiveA");
var Form6 = document.getElementById("form-six");
var Form6A = document.getElementById("form-sixA");

// Vorige en volgende knoppen
var Next1 = document.getElementById("nextstep-1");
var Next2 = document.getElementById("nextstep-2");
var Next3 = document.getElementById("nextstep-3");

var Back1 = document.getElementById("prevstep-1");
var Back2 = document.getElementById("prevstep-2");
var Back3 = document.getElementById("prevstep-3");
var Back4 = document.getElementById("prevstep-4");
var Back5 = document.getElementById("prevstep-5");
var Back6 = document.getElementById("prevstep-6");
var Back7 = document.getElementById("prevstep-7");

// Progress bar
var progressBar = document.getElementById("progress-bar");

// Voor het redirecten naar eerdere reacties vraag
var redirectOne = $('input[name="redirect1"]');
var redirectTwo = $('input[name="redirect2"]');

// Voor het redirecten naar specifieke eerdere reacties vraag
var redirectThree = $('input[name="redirect3"]');
var redirectFour = $('input[name="redirect4"]');

// Voor het redirecten naar eczeem
var redirectFive = $('input[name="redirect5"]');
var redirectSix = $('input[name="redirect6"]');
var redirectSeven= $('input[name="redirect7"]');


Next1.onclick = function (){
  Form1.style.left = "-450px";
  Form2.style.left = "40px";
}

Back1.onclick = function (){
  Form1.style.left = "40px";
  Form2.style.left = "450px";
}

Next2.onclick = function (){
  Form2.style.left = "-450px";
  Form3.style.left = "40px";
}

Back2.onclick = function (){
  Form2.style.left = "40px";
  Form3.style.left = "450px";
}

Next3.onclick = function (){
  Form3.style.left = "-450px";
  Form4.style.left = "40px";
}

Back3.onclick = function (){
  Form3.style.left = "40px";
  Form4.style.left = "450px";
}

Back4.onclick = function (){
  Form4.style.left = "40px";
  Form5.style.left = "450px";
}

Back5.onclick = function (){
  Form4.style.left = "40px";
  Form5A.style.left = "450px";
}

Back6.onclick = function (){
  Form5.style.left = "40px";
  Form6.style.left = "450px";
}

Back7.onclick = function (){
  Form5A.style.left = "40px";
  Form6A.style.left = "450px";
}

function redirectPage(){
    if ( redirectOne.is(':checked') ) {
        window.location.href="jong.html" ;
    } else if ( redirectTwo.is(':checked') ) {
        window.location.href="overleg.html" ;
    } else if ( redirectThree.is(':checked') ) {
      Form4.style.left = "-450px";
      Form5.style.left = "40px";
    } else if ( redirectFour.is(':checked') ) {
      Form4.style.left = "-450px";
      Form5A.style.left = "40px";
    }
}

function redirectPageEczeem(){
  if ( redirectFive.is(':checked') ) {
      window.location.href="overleg.html" ;
  } else {
    Form5.style.left = "-450px";
    Form6.style.left = "40px";
  }
}

function redirectPageEczeemA(){
  if ( redirectSix.is(':checked') ) {
      window.location.href="overleg.html" ;
  } else {
    Form5A.style.left = "-450px";
    Form6A.style.left = "40px";  }
}


// Maar 1 vakje selecteren
function selectOnlyThis(id) {
  for (var i = 1;i <= 2; i++)
  {
      document.getElementById("Check" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis1(id) {
  for (var i = 1;i <= 4; i++)
  {
      document.getElementById("Redirect" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis2(id) {
  for (var i = 1;i <= 3; i++)
  {
      document.getElementById("CheckA" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis3(id) {
  for (var i = 1;i <= 3; i++)
  {
      document.getElementById("CheckB" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis4(id) {
  for (var i = 1;i <= 3; i++)
  {
      document.getElementById("CheckEc" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis5(id) {
  for (var i = 1;i <= 3; i++)
  {
      document.getElementById("CheckEcA" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}