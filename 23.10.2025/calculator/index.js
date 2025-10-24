document.getElementById("calcBtn").addEventListener("click", function() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operator").value;
  let res;

  if (isNaN(n1) || isNaN(n2)) {
    res = "Please enter valid numbers!";
  } else {
    switch(op) {
      case "+": res = n1 + n2; break;
      case "-": res = n1 - n2; break;
      case "*": res = n1 * n2; break;
      case "/": 
        if (n2 === 0) {
          res = "Can't divide by zero!";
        } else {
          res = n1 / n2;
        }
        break;
      default: res = "Invalid operation";  
    }
  }

  document.getElementById("result").innerText = "Result: " + res;
});
