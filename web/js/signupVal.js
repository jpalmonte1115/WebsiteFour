function ValidateSignupInfo(){
	var email = document.signupForm.email.value;
	var passwordOne = document.signupForm.password1.value;
	var passwordTwo = document.signupForm.password2.value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(!(email.match(mailformat))){
		alert("Incorrect email address format!");
		return false;
	} else if(passwordOne.length < 8){
		alert("Password should have more than 7 characters!");
		return false;
	} else if(passwordOne != passwordTwo){
		alert("Passwords does not match!");
		return false;
	}
}
