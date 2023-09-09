// Before ES6 (2015), JavaScript had Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:


{
    let x = 2;
}
  // x can NOT be used here


//   Variables declared with the var keyword can NOT have block scope.

//   Variables declared inside a { } block can be accessed from outside the block.

{
    var x = 2;
}
  // x CAN be used here