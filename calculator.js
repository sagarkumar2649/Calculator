// select elements
const inputBox = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');

// initialize input string
let input = '';

// add click event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;

    // handle different button functionalities
    if (buttonValue === 'AC') {
      // clear input
      input = '';
      inputBox.value = '';
    } else if (buttonValue === 'Del') {
      // delete last character
      input = input.slice(0, -1);
      inputBox.value = input;
    } else if (buttonValue === '=') {
      // evaluate the expression
      try {
        input = eval(input).toString();
        inputBox.value = input;
      } catch {
        inputBox.value = 'Error';
        input = '';
      }
    } else {
      // append value to input
      input += buttonValue;
      inputBox.value = input;
    }
  });
});


// 2nd method 

// // select elements
// const inputBox = document.getElementById('inputbox');
// const buttons = document.querySelectorAll('button');

// // initialize input string
// let input = '';

// // add click event listener to all buttons
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const buttonValue = button.textContent;

//     // handle different button functionalities
//     if (buttonValue === 'AC') {
//       // clear input
//       input = '';
//       inputBox.value = '';
//     } else if (buttonValue === 'Del') {
//       // delete last character
//       input = input.slice(0, -1);
//       inputBox.value = input;
//     } else if (buttonValue === '=') {
//       // evaluate the expression
//       inputBox.value = evaluateExpression(input);
//       input = inputBox.value; // update input to the evaluated result
//     } else {
//       // append value to input
//       input += buttonValue;
//       inputBox.value = input;
//     }
//   });
// });

// // function to evaluate mathematical expressions
// function evaluateExpression(expression) {
//   try {
//     // split expression into numbers and operators
//     const tokens = expression.match(/(\d+\.?\d*|\.\d+|[+\-*/%])/g);
//     if (!tokens) return 'Error';

//     const numbers = [];
//     const operators = [];

//     // operator precedence and associativity
//     const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2 };
//     const applyOperator = (operator, b, a) => {
//       switch (operator) {
//         case '+': return a + b;
//         case '-': return a - b;
//         case '*': return a * b;
//         case '/': return b === 0 ? 'Error' : a / b;
//         case '%': return a % b;
//       }
//     };

//     tokens.forEach(token => {
//       if (!isNaN(token)) {
//         // if it's a number, push to numbers stack
//         numbers.push(parseFloat(token));
//       } else {
//         // if it's an operator, handle precedence
//         while (
//           operators.length &&
//           precedence[operators[operators.length - 1]] >= precedence[token]
//         ) {
//           numbers.push(applyOperator(operators.pop(), numbers.pop(), numbers.pop()));
//         }
//         operators.push(token);
//       }
//     });

//     // apply remaining operators
//     while (operators.length) {
//       numbers.push(applyOperator(operators.pop(), numbers.pop(), numbers.pop()));
//     }

//     // return the result or 'Error' if calculation failed
//     return numbers[0] === undefined || numbers.length > 1 ? 'Error' : numbers[0];
//   } catch {
//     return 'Error';
//   }
// }












