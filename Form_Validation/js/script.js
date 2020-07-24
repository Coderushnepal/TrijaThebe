function Form(){
	var form =  document.createElement("form");
	form.id = "form";

	var title = document.createElement('h1');
	title.innerHTML = "Register With Us";


	var lblname = document.createElement("label");
	lblname.innerHTML = "Username";
	form.appendChild(lblname);

	var break_line = document.createElement('br');
	form.appendChild(break_line);

	var name = document.createElement("input");
	name.id = "username";
	name.type = "text";
	name.placeholder = "Enter Username";
	form.appendChild(name);

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

	var break_line = document.createElement('br');
	form.appendChild(break_line);
	var break_line = document.createElement('br');
	form.appendChild(break_line);

 	var btn = document.createElement("input");
	btn.id = "btn-submit";
	btn.type = "button";
	btn.value = "Submit";
	form.appendChild(btn);

	/*btn.addEventListener("click", function (){
			if (that.validate_username) {
				that.validation() ; //deleting moving ball
			}
		});*/
	document.body.appendChild(form);

} 
Form();