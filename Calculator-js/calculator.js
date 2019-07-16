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
    return number1 + number2;
  };

  //Division
  var divide = function(number1, number2) {
    return number1 + number2;
  };
   
  switch (operator) {
      case "sum":
      var result = add(number1, number2);
      alert(result);
          break;
  
          case "difference":
          var result = subtract(number1, number2);
alert(result);
          break;
          case "product":
          var result = multiply(number1, number2);
alert(result);
          break;
          case "quotient":
          var result = divide(number1, number2);
alert(result);
          break;
      default:
          break;
  }


