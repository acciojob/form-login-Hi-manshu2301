function getFormvalue() {
    //Write your code here
	let first = document.getElementById("fname").value;
	let last = document.getElementById("lname").value;
	alert(first+" "+last);

}
const submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener("click", getFormvalue);

