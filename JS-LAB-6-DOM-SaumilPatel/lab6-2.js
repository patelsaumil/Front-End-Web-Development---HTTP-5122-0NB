//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageWrapper;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageWrapper(){

	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");


	mysteryBox.onmouseover = mystery_message; 
	buttonBox.onclick = box_switch;

	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function mystery_message(){
	

		var userresponse = confirm('Do you want to see something?');
    
		if (userresponse === true) {
			mysteryBox.style.display = 'none';
			
			buttonBox.style.display = 'block';
		}
	}


	//FUNCTION TO CHANGE buttonBox

// When the Button Box is clicked

function box_switch(){
	buttonBox.style.width = '600px';
	buttonBox.style.backgroundColor = 'orange';
	buttonBox.innerHTML = ' <h2> SURPRISE!!</h2>';
}


}
