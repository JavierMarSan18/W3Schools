// Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

// Example
// var x = 2;     // Allowed
// const x = 2;   // Not allowed

// {
// let x = 2;     // Allowed
// const x = 2;   // Not allowed
// }

// {
// const x = 2;   // Allowed
// const x = 2;   // Not allowed
// }