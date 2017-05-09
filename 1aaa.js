function add(x, y){
	document.write(+x + +y);
}
function sub(x, y){
	document.write(x - y);
}
function mul(x, y){
	document.write(x * y);
}
function div(x, y){
	document.write(x / y);
}
var num1 = prompt("Enter 1st Number");
var num2 = prompt("Enter 2nd Number");
var oper = prompt("Enter Operation");
if (oper == "Addition"){
	add(num1, num2);
}
