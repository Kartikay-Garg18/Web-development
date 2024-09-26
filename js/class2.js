// var example
function varExample() {
    var x = 1;
    if (true) {
        var x = 2; // same variable
        console.log(x); // 2
    }
    console.log(x); // 2
}
varExample();

// let example
function letExample() {
    let y = 1;
    if (true) {
        let y = 2; // different variable
        console.log(y); // 2
    }
    console.log(y); // 1
}
letExample();

// const example
function constExample() {
    const z = 1;
    // z = 2; // TypeError: Assignment to constant variable.
    console.log(z); // 1
}
constExample();