let str = "Hello";

str.test = 5; // (*)

alert(str.test);
// it won't work
// This example clearly shows that primitives are not objects.
// They can’t store additional data.