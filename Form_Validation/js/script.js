function Form(){
	var form =  document.createElement("form");
	form.id = "form";
	form.style.backgroundColor = "lavender";
	form.style.width = "300px";
	form.style.margin = "30px auto";
	form.style.padding = "20px 10px 30px 50px";
	form.style.boxShadow = "5px 5px 5px 5px grey";

	var title = document.createElement('h1');
	title.innerHTML = "Register With Us";
	form.appendChild(title);


	var lblname = document.createElement("label");
	lblname.innerHTML = "Username";
	form.appendChild(lblname);

	var break_line = document.createElement('br');
	form.appendChild(break_line);

	var name = document.createElement("input");
	name.id = "username";
	name.type = "text";
	//name.min = "3";
	//name.max = "10";
	//name.required;
	name.placeholder = "Enter Username";
	form.appendChild(name);

	var error = document.createElement('span');
	error.id = "user_error";
	error.innerHTML = "User name must be at least 3 characters.";
	error.style.display = "none";
	form.appendChild(error);

	var break_line = document.createElement('br');
	form.appendChild(break_line);
	var break_line = document.createElement('br');
	form.appendChild(break_line);

	var lblEmail = document.createElement("label");
	lblEmail.innerHTML = "Email";
	form.appendChild(lblEmail);

	var break_line = document.createElement('br');
	form.appendChild(break_line);

	var email = document.createElement("input");
	email.id = "email";
	email.type = "email";
	email.placeholder = "Enter Email";
	form.appendChild(email);

	var errorEmail = document.createElement('span');
	errorEmail.id = "email_error";
	errorEmail.style.display = "none"; 
	var msg = document.createTextNode("Invalid Email.");	
	errorEmail.appendChild(msg);
	form.appendChild(errorEmail);

	var break_line = document.createElement('br');
	form.appendChild(break_line);
	var break_line = document.createElement('br');
	form.appendChild(break_line);

	var lblPassword = document.createElement("label");
	lblPassword.innerHTML = "Password";
	form.appendChild(lblPassword);

	var break_line = document.createElement('br');
	form.appendChild(break_line);

	var password = document.createElement("input");
	password.id = "password";
	password.type = "password";
	password.placeholder = "Enter Password";
	form.appendChild(password);

	var passError = document.createElement('span');
	passError.id = "pass_error";
	passError.style.display = "none";
	var errSpan = document.createTextNode("Password must be atleast 6 characters");	
	passError.appendChild(errSpan);
	form.appendChild(passError);

	var break_line = document.createElement('br');
	form.appendChild(break_line);
	var break_line = document.createElement('br');
	form.appendChild(break_line);

	var lblconfirmPassword = document.createElement("label");
	lblconfirmPassword.innerHTML = "confirmPassword";
	form.appendChild(lblconfirmPassword);

	var break_line = document.createElement('br');
	form.appendChild(break_line);

	var confirmPassword = document.createElement("input");
	confirmPassword.id = "Password1";
	confirmPassword.type = "password";
	confirmPassword.placeholder = "Confirm Password";
	form.appendChild(confirmPassword);

	var errorPassword1 = document.createElement('span');
	errorPassword1.id = "password_error1";
	var msg1 = document.createTextNode("Password does not match.");
	errorPassword1.style.display = "none";
	errorPassword1.appendChild(msg1);
	form.appendChild(errorPassword1);

	var break_line = document.createElement('br');
	form.appendChild(break_line);
	var break_line = document.createElement('br');
	form.appendChild(break_line);

 	var btn = document.createElement("input");
	btn.id = "btn_submit";
	btn.type = "submit";
	btn.value = "Submit";
	btn.style.display = "block";
	form.appendChild(btn);



	/*btn.addEventListener("click", function (){
			if (that.validate_username) {
				that.validation() ; //deleting moving ball
			}
		});*/
	document.body.appendChild(form);

} 
Form();
