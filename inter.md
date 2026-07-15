1.Given an array of 10 numbers, get the array of missing numbers between smallest and the largest numbers.

  Example:

  Input: [5,3,8,10,14,5,7,15,17,12]
  Output: [4,6,9,11,13,16]



2. Just like any Javascript IDE, which checks for all brackets are balanced or not.
  Similarly write a function that will check if the given string is having all the brackets are closed.
  Example:
  a.
  Input: "function sample (args) { const arr=[]; return arr; }"
  Output: TRUE
  b.
  Input: "function sample(args)) { const arr=[]; return arr; }"
  Output: FALSE
  c.
  Input: "function sample(args) { const arr=[]; return arr;"
  Output: FALSE
  d.
  Input: "function sample(args) { const arr=[[[]; return arr; }"
  Output: FALSE

3. var foo;
 function foo(){ 
    console.log("foo 1 function");
} 
foo = function(){ console.log("foo 2 fn"); 
}
function foo(){
    console.log("foo3 funciton")
    } 
foo();