function bmi () {
var height = Number(document.getElementById("height").value);
var weight = Number(document.getElementById("weight").value);
var result = weight / (height * height);
document.getElementById("result").innerHTML = "Your BMI is : " + result;

window.location.reload;
}
function reset() {
	window.location.reload;
}