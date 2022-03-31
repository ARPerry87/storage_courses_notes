function validateForm() {

	var uname = document.forms["myForm"]["uname"].value;

	var age = document.forms["myForm"]["age"].value;

	var residentStatus = document.forms["myForm"]["residentStatus"].value;

	var accountType = document.querySelectorAll('input[name=acctype]:checked');

	var nationality = document.forms["myForm"]["nationality"].value;

	if (uname.length < 6) {
		alert("The username needs to be at least 6 characters long");
		return false;
	} else {

		var selectedAccounts = [];

		for (let i=0; i < accountType.length; i++) {

			selectedAccounts.push(accountType[i].value);
		}

		var alerMsg = "The details supplied: " + 
					  "\nUser Name: " + uname +
					  "\nnAge: " + age +
					  "\nREsident status: " + residentStatus + 
					  "\nAccounts selected: " + selectedAccounts + 
					  "\nNationality index: " + nationality;
		alert(alerMsg);

		return true;

	}

}