//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION



//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function average_num (num1,num2,num3,num4,num5){
var average_num = (num1 + num2 + num3 + num4 + num5) / 5;
return average_num.toFixed(1);
}
average_num();

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
console.log("the average nuber is:" + " " + average_num (5, 10, 15, 20, 25));

var subject1 = 85;
var subject2 = 95;
var subject3 = 70;
var subject4 = 80;
var subject5 = 75;


var semesterAverage = average_num(subject1,subject2,subject3,subject4,subject5);


if(semesterAverage <=70){
    alert("success");
}else{
    alert("review required");
}