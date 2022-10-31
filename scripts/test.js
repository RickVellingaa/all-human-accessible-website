// Stappen in het Formulier
var Form1 = document.getElementById("form-one");
var Form2 = document.getElementById("form-two");
var Form3 = document.getElementById("form-three");

// Vorige en volgende knoppen
var Next1 = document.getElementById("nextstep-1");
var Next2 = document.getElementById("nextstep-2");
var Back1 = document.getElementById("prevstep-1");
var Back2 = document.getElementById("prevstep-2");

// Progress bar
var progressBar = document.getElementById("progress-bar");

// Voor het redirecten
var apples = $('input[name="apples"]');
var red = $('input[name="red"]');
var green = $('input[name="green"]');

Next1.onclick = function (){
  Form1.style.left = "-450px";
  Form2.style.left = "40px";
  progressBar.style.left = "120px";
}

Back1.onclick = function (){
  Form1.style.left = "40px";
  Form2.style.left = "450px";
  progressBar.style.left = "0px";
}

Next2.onclick = function (){
  Form2.style.left = "-450px";
  Form3.style.left = "40px";
  progressBar.style.left = "240px";
}

Back2.onclick = function (){
  Form2.style.left = "40px";
  Form3.style.left = "450px";
  progressBar.style.left = "120px";
}

function redirectPage(){
    if ( apples.is(':checked') ) {
        window.location.href="http://www.google.com" ;
    } else if ( red.is(':checked') ) {
        window.location.href="http://www.yahoo.com" ;
    } else if ( green.is(':checked') ) {
        window.location.href="http://www.aol.com" ;
    }
}

function selectOnlyThis(id){
    var myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox,function(el){
      el.checked = false;
    });
    id.checked = true;
  }