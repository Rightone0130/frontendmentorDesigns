function appendCharacter(char) {
    document.getElementById('result').value += char;
  }
  
  function deleteLastCharacter() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }

  function calculateResult() {
    let result = document.getElementById('result').value;
    try {
      var calculatedResult = eval(result);
      document.getElementById('result').value = calculatedResult;
      
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  
  function calcResult(){

    let userInput = document.getElementById('result').value;  

    const validOperations = ['+', '-', '*', '/'];
    
    let lastChar = null;

   for (let i = 0; i < userInput.length; i++) {
      const char = userInput[i];
  
       if (validOperations.includes(char)) {
      
        if (validOperations.includes(lastChar)) {
          document.getElementById('result').value = 'Syntax Error';
          break;  
        }
        else{
          calculateResult();
        }
      }
    
      lastChar = char;  
    }

    }
  

  function floatRight(){
    let history = document.getElementById("history");
    let hrElement = document.getElementById("myHr");
    hrElement.classList.remove("float-left");
    hrElement.classList.add("float-right");
  }

  function floatLeft(){
    let history = document.getElementById("history");
    let hrElement = document.getElementById("myHr");
    hrElement.classList.remove("float-right");
    hrElement.classList.add("float-left");
  }
