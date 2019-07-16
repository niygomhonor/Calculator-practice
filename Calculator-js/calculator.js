var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

// Addition

var add = function(number1, number2) {
    return number1 + number2;
  };
// Subtraction

var subtract = function(number1, number2) {
   
    if (number1>number2) {
        return number1 - number2; 
    }
    else{
        return number2 -number1;
    }
  };

  // Multiplcation

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

  //Division
  var divide = function(number1, number2) {
    return number1/number2;
  };
  var operator =prompt("Enter result you need for this numbers");
  switch (operator) {
      case "addition":
      var result = add(number1, number2);
      console.log(result);
          break;
  
          case "subtraction":
          var result =subtract(number1, number2);
          console.log(result);
          break;
          case "multiplication":
          var result=multiply(number1, number2);
          console.log(result);
          break;
          case "quotient":
          var result=divide(number1, number2);
          
          console.log(result);
          break;
      default: number1=0;
          break;
  }


