function addition(){
    var num1 = parseInt(prompt("enter any num1"));
    var num2 = parseInt(prompt("enter any number 2"));
    var sum = num1+num2;
    document.write(sum,"<br>");
}

function subtraction(){
    var numb1 = parseInt(prompt("enter any num1"));
    var numb2 = parseInt(prompt("enter any number 2"));
    var sub = numb1-numb2;
    document.write(sub,"<br>");
}
function multi(){
    var number1 = parseInt(prompt("enter any num1"));
    var number2 = parseInt(prompt("enter any number 2"));
    var mul = number1*number2;
    document.write(mul,"<br>");
}
function division(){
    var a = parseInt(prompt("enter any num1"));
    var b = parseInt(prompt("enter any number 2"));
    var divs = a/b;
    document.write(divs,"<br>");
}


addition();
subtraction();
multi();
division();