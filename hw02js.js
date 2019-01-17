/*Need to do: figure out how to do decimal and more than one digit numbers- is probably the same solution, thinking use the lastClickedNum boolean defined below, also handle clicking operations in a row(look at piazza), figure out if you are supposed to display the calculations as you go or only when = is pressed*/
var currentSolution = 0;
var operation = "";
var lastClickedNum = true;
var buttons = document.getElementsByClassName("button")
for(i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click", function() {myCalcFunction(this);});
}

function myCalcFunction(button) {
  var name = button.innerHTML;
  if(name == "+=") {
    operation = name;
    document.getElementById("display").innerHTML = currentSolution;
  }
  else if (name == "-" || name == "*" || name == "/" || name == "."){
    operation = name;
  }
  else if(name == "C"){
    currentSolution = 0;
    operation = "";
    document.getElementById("display").innerHTML = currentSolution;
  }
  else {
    if(operation == "") {
      currentSolution = parseFloat(name);
      document.getElementById("display").innerHTML = currentSolution;
    }
    else if (operation == "+=") {
      currentSolution += parseFloat(name);
    }
    else if (operation == "-") {
      currentSolution -= parseFloat(name);
    }
    else if (operation == "*") {
      currentSolution *= parseFloat(name);
    }
    else if (operation == "/") {
      currentSolution /= parseFloat(name);
    }
    else if (operation == ".") {
      currentSolution += ".";
    }
  }
  //document.getElementById("display").innerHTML = currentSolution; put this in if you display solution as you go
}
