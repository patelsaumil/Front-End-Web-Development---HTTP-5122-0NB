//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		var username = "dart";// Correct user name
		var password = "vader";// Correct password
		var user_input;// user name input
		var pass_input;// password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
user_input = prompt ("enter your username");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(user_input);
//5. CREATE POPUP BOX FOR PASSWORD
pass_input = prompt ("enter your password");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(pass_input);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (username === user_input && password === pass_input){
alert("welcomeback dart");
console.log("Login successful");
}
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
else{
	alert("Invalid");
	console.log("Login Fail");

}


//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE