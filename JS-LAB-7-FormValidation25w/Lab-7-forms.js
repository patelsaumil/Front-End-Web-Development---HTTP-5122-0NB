/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
//var shipInfo = {
//	client: "",
//	post: "",
//	speed: "",
//	cost: 0
//};
/* LAB 7 - SHIPPING FORM */

window.onload = function() {
    var handleForm = document.forms.form_ship;
    handleForm.onsubmit = processForm;

function processForm() {
	
    
	
	var nameField = handleForm.f_Name; 
    var postalField = handleForm.f_pc; 

    

    if (nameField.value === "") {
        
		nameField.style.background="red";
        nameField.focus();
        return false;
    }

    if (postalField.value === "") {
        
		nameField.style.background="red";
        postalField.focus();
        return false;
    }

	document.getElementById("shippingForm").style.display = "none";
    document.getElementById("thanks_msg").style.display = "block";
	
	document.getElementById("thanksCustomer").innerHTML = nameField.value;
	document.getElementById("thanksPC").innerHTML = postalField.value;
    return false;
};


}; 

  





//==== PLAN YOUR CODE WITH COMMENTS FIRST

//LISTEN FOR WINDOW.ONLOAD EVENT


