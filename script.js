function getFormvalue() {
    //Write your code here
	event.preventDefault();
	let first = document.getElementsByName("fname")[0].value;
	let last = document.getElementsByName("lname")[0].value;
	alert(first + " " + last);

}
const submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener("click", getFormvalue);

