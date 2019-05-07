document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.background = "blue";

});

function fadeOutEffect() {
    var fadeTarget = document.getElementById("box");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

document.getElementById("button3").addEventListener('click', fadeOutEffect);

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").setAttribute(
        "style", "background-color: orange; height: 150px; width: 150px; margin: 25px"
    )
    
});

function myFunction1() {
    document.getElementById("myDIV").style.WebkitAnimation = "mynewmove 4s infinite"; // Code for Safari 4.0 - 8.0
    document.getElementById("myDIV").style.animation = "mynewmove 4s infinite";
  }

  function myFunction2() {
    document.getElementById("myDIV").style.WebkitAnimation = "mymove 4s infinite"; // Code for Safari 4.0 - 8.0
    document.getElementById("myDIV").style.animation = "mymove 4s infinite";
  }

  function myFunction3() {
    document.getElementById("myDIV").style.WebkitAnimation = "mynewmove 4s infinite"; // Code for Safari 4.0 - 8.0
    document.getElementById("myDIV").style.animation = "mynewmove 1s infinite";
  }

  function myFunction4() {
    document.getElementById("myDIV").style.WebkitAnimation = "mymove 4s infinite"; // Code for Safari 4.0 - 8.0
    document.getElementById("myDIV").style.animation = "mymove 1s infinite";
  }

  function myFunction5() {
    document.getElementById("myDIV").style.WebkitAnimation = "mymove 0s 1"; // Code for Safari 4.0 - 8.0
    document.getElementById("myDIV").style.animation = "mymove 0s 1";
  }