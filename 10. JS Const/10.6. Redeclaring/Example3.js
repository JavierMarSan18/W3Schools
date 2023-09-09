// Reassigning an existing const variable, in the same scope, is not allowed:

// Example
// const x = 2;     // Allowed
// x = 2;           // Not allowed
// var x = 2;       // Not allowed
// let x = 2;       // Not allowed
// const x = 2;     // Not allowed

// {
//   const x = 2;   // Allowed
//   x = 2;         // Not allowed
//   var x = 2;     // Not allowed
//   let x = 2;     // Not allowed
//   const x = 2;   // Not allowed
// }

