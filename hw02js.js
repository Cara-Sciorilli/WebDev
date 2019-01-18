(function(){
  var state = {currentSol: 0, operation: "", nextNum: ""}

  function init() {
    var buttons = document.getElementsByClassName("button")
    for(i=0; i<buttons.length; i++){
      buttons[i].addEventListener("click", function() {myCalcFunction(this);});
    }
  }

  function myCalcFunction(button) {
    var name = button.innerHTML;
    console.log(state);
    if(name == "C"){
      state.currentSol = 0;
      state.nextNum = "";
      state.operation = "";
      document.getElementById("display").innerHTML = state.currentSol;
    }
    else if (name == "+=" || name == "-" || name == "*" || name == "/"){
      let parsed = eval(state.nextNum);
      if(state.operation == "+=") {
        state.currentSol += parsed;
      }
      else if(state.operation == "-"){
        state.currentSol -= parsed;
      }
      else if(state.operation == "*"){
        state.currentSol *= parsed;
      }
      else if(state.operation == "/"){
        state.currentSol /= parsed;
      }
      else if(state.operation == "") {
        state.currentSol = parsed;
      }
      state.operation = name;
      state.nextNum = "";
      if(name == "+="){
        state.nextNum = "0";
        document.getElementById("display").innerHTML = state.currentSol;
      }
    }
    else {
      if(state.nextNum == "0" && name != ".") {
        state.nextNum = name;
      }
      else {
        state.nextNum += name;
      }
      document.getElementById("display").innerHTML = state.nextNum;
    }
  }
  //Delay the setup code until page is fully loaded.
  window.addEventListener('DOMContentLoaded', init, false);
})();
