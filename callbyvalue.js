
//Calling function and passing static values
// function addition(num1,num2){
//     var sum = num1+num2;
//     document.write(sum);
// }
// addition(4,7);

//Calling function and passing dynamic values inserted by user at runtime

function addition(num1,num2){
    var sum = num1+num2;
    document.write(sum);
}
var a = parseInt(prompt("enter number 1"));
var b = parseInt(prompt("enter number 2"));

addition(a,b);