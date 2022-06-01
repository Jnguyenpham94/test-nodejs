
// comments work with double forward slashes!!
// run on live server for testing purposes and connect with html front-end
console.log("Hello World");
let interestRate = 0.3;
let bob = {
    name : "Bob",
    age : 25
};
console.log(bob);

function colorPrint(colors) {
    let words = colors;
    colors.forEach(element => {
        words += element + " ";
    });
    console.log(words);
}

let colors = ['red', 'green', 'blue'];
let colors2 = [1,2,3,4,5];

colorPrint(colors);