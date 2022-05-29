console.log("-----------------");
console.log("HELLO WORLD");
console.log("-----------------");

var x = true;
console.log(x);

if (x) {
    truthy();
} else {
    falsy()
}

function truthy() {
    console.log("It is TRUE");
}

function falsy() {
    console.log("It is False");
}