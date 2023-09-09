// With let, redeclaring a variable in the same block is NOT allowed:

// var x = 2;   // Allowed
// let x = 3;   // Not allowed

// {
// let x = 2;   // Allowed
// let x = 3;   // Not allowed
// }

// {
// let x = 2;   // Allowed
// var x = 3;   // Not allowed
// }