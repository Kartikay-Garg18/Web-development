let a = 10;
let b = 20;
function sum(a,b){
    let c = 30;
    return a+b+c;
}
let result = sum(a,b);


// Execution Context
// 1. Global Execution Context (GEC)
// 2. Functional Execution Context (FEC)
// 3. Eval

//In support system : Call Stack, Browser Engine, Web API, Callback Queue, Event Loop


// GEC -> Creation Phase and Execution Phase
// Creation Phase:
// 1. Memory is allocated for variables and functions
// 2. Variables are assigned with undefined
// 3. Functions are assigned with function definition

// Execution Phase:
// 1. Variables are assigned with values
// 2. Functions are executed


// Creation Phase                           Execution Phase
// a -> undefined                            a -> 10
// b -> undefined                            b -> 20
// sum -> function definition                result -> 30
// result -> undefined

// sum(10,20)

//FEC -> Creation Phase and Execution Phase
// Creation Phase:
// 1. Memory is allocated for variables and functions
// 2. Variables are assigned with undefined
// 3. Functions are assigned with function definition
// 4. Arguments are assigned with values

//Execution Phase:
// 1. Variables are assigned with values
// 2. Functions are executed

//Creation Phase                           Execution Phase
// a -> 10                                  c -> 30
// b -> 20                                  return 60
// c -> undefined
// sum -> function definition

// Closure
// 1. A function defined inside another function has access to the outer function's variables
// 2. The inner function has access to the outer function's variables even after the outer function has returned

//Lexical Scope
// 1. JavaScript uses lexical scoping
// 2. Lexical scoping means that a variable defined outside a function can be accessible inside another function defined after the variable is declared

//Example
function outer(hi){
    let a = 10;
    function inner(bh){
        function innerInner(dwe){
            console.log(hi+" "+bh+dwe);
            return a;
        }
        return innerInner;
    }
    return inner;
}

// let innerFn = outer();
console.log(outer("hello")("bha")("dwe"))

//IIFE (Immediately Invoked Function Expression)
// 1. A function that is executed immediately after it is created
// 2. The function is executed only once
// 3. The function is executed in the same scope as it is created
// 4. The function does not pollute the global scope

//Example
(function(){
    console.log("Hello World");
})();
