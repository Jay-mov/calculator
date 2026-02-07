


const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "I LOVE YOU";
    }
}

function checkCode() { 
    var redirectCode = "221122";
    var targetURL = "https://jay-mov.github.io/22/love.html"; 

    if (display.value === redirectCode) { 
          window.location.href = targetURL; 
    } else {
        alert("Invalid");
    }
}


