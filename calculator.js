function ADD () {
	var num1 = parseInt(document.getElementById("number1").value);
	var num2 = parseInt(document.getElementById("number2").value);
	var res1 = num1 + num2;
	document.getElementById('result1').value= res1;
}
function SUB () {
	var num3 = parseInt(document.getElementById("number3").value);
	var num4 = parseInt(document.getElementById("number4").value);
	var res2 = num3 - num4;
	document.getElementById('result2').value= res2;
}
function MUL () {
	var num5 = parseInt(document.getElementById("number5").value);
	var num6 = parseInt(document.getElementById("number6").value);
	var res3= num5 * num6;
	document.getElementById('result3').value= res3;
}
function DIV () {
	var num7 = parseInt(document.getElementById("number7").value);
	var num8 = parseInt(document.getElementById("number8").value);
	var res4 = num7 / num8;
	document.getElementById('result4').value= res4;
}
