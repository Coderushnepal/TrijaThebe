var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password1 = document.getElementById("Password1");
var submit_btn = document.getElementById("btn_submit");

var error = document.getElementById("user_error");
var errorEmail = document.getElementById("email_error");
var errorPass = document.getElementById("pass_error");
var errorPass2 = document.getElementById("password_error1");

function isEmail(email) 
		{
			return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
		}

submit_btn.addEventListener('click', function(e) {	

	e.preventDefault();
	const user_value = username.value.trim();
	const email_value = email.value.trim();
	const pass_value = password.value.trim();
	const confirm_value = Password1.value.trim();

    
		if(user_value.length < 3) 
		{				  	
			username.style.border = "1px solid #e74c3c";
			error.style.display = "block";
			error.style.color = "#e74c3c";				
		} 
		else 
		{
			username.style.border = "1px solid #2ecc71";
			error.style.display = "none";								
			error.style.color = "#2ecc71";			
		}


		if(!isEmail(email_value)) 
		{
			email.style.border = "1px solid #e74c3c";				  	
			errorEmail.style.color = "#e74c3c";	
			errorEmail.style.display = "block";
		} 
		else 
		{
			email.style.border = "1px solid #2ecc71";	
			errorEmail.style.display = "none";							
			errorEmail.style.color = "#2ecc71";	
		}

		



		if(pass_value.length < 6) 
		{
			password.style.border = "1px solid #e74c3c";				  
			errorPass.style.display = "block";	
			errorPass.style.color = "#e74c3c";	
		} 
		else 
		{
			password.style.border = "1px solid #2ecc71";				  
			errorPass.style.color = "#2ecc71";
			errorPass.style.display = "none";	
		}
			


		if(confirm_value.length < 6) 
		{
			Password1.style.border = "1px solid #e74c3c";				  
			errorPass2.style.display = "block";	
			errorPass2.style.color = "#e74c3c";
		} 
		else if(confirm_value !== confirm_value) 
		{
			Password1.style.border = "1px solid #e74c3c";				  
			errorPass2.style.display = "block";	
			errorPass2.style.color = "#e74c3c";
		} 
		else {
			Password1.style.border = "1px solid #2ecc71";				  
			errorPass2.style.display = "none";	
			errorPass2.style.color = "#2ecc71";
		}
			
	
});
