
function repeatvalue() {
    var q1=parseInt(document.getElementById("q1").value);
 //   label.innerHTML = q1.value;
 var q2=parseInt(document.getElementById("q2").value);
 var q3=parseInt(document.getElementById("q3").value);
 var q4=parseInt(document.getElementById("q4").value);
 var q5=parseInt(document.getElementById("q5").value);
 var q6=parseInt(document.getElementById("q6").value);
 
var total = (q1 * 0.5) + (q2 * 0.5) + (q3 * 0.5) + (q4 * 0.5) + (q5 * 0.5) +(q6 * 0.5);

    document.getElementById("label").innerHTML= "ನಿಮ್ಮ ಗ್ರಾಮದಲ್ಲಿ ತಿಂಗಳಿಗೆ ಅಂದಾಜು ಉತ್ಪಾದನೆಯಾಗುತ್ತಿರುವ ತ್ಯಾಜ್ಯ  " + total  + " KG";
 }
 