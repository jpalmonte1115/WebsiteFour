function ValidateLoginInfo(){
	var email = document.loginForm.email.value;
	var password = document.loginForm.password.value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(!(email.match(mailformat))){
		alert("Incorrect email address format");
		return false;
	} else if(password.length < 8){
		alert("Incorrect password!");
		return false;
	}
		
}
