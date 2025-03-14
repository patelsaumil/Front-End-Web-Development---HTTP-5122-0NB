//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK 


//================== CREATE YOUR checkTemp FUNCTION
//This function checks if the temperature is safe for walking the dog.
//It expects a number parameter currentTemp representing the current temperature.
//It returns true if the temperature is between -10 and 30 , and false if its outside that range.
function checkTemprature(currentTemp) {
    return currentTemp <= 30 && currentTemp >= -10;
}


//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var userInputTemp = parseInt(prompt("Enter the current temperature")); 


if (checkTemprature(userInputTemp) === true) {
    alert("You're good, have a nice walk!"); 
} else {
    alert("Yikes! This is no weather for dog walking!"); 
}