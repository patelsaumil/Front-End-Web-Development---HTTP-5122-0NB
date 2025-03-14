//alert("saumil");
//name difine for 7 movies as individual variables
var film_1 ="despicabale me";
var film_2 ="avengers";
var film_3 ="bruce almighty";
var film_4 ="bumbulbee";
var film_5 ="bad boys";
var film_6 ="jurassic park";
var film_7 ="inside out";
//creat array an array movie_list to store all the movies
var movie_list = [film_1, film_2,film_3,film_4,film_5,film_6,film_7];
//create prompt massage to user which movie theywould like to choose
var promptuser = alert("which top 7 movie do you like");
//prompt the user to input number from 1 to 7 for movie selection
var userselection = prompt("pick a number: 1 - 7");
//convert the input from user into integer
userselection = parseInt(userselection);
//check if user input is valid(from 1 to 7)
if(userselection >= 1 && userselection <=7){
//if valid than display a massage showing the movie selected by user 
    alert("Number" + userselection + " " + "on the list is" + " " + movie_list[userselection - 1]);

//loop through the movie_list array and log each movie on console
    for (var i = 0; i <movie_list.length; i++) {
    console.log("film" + ":" + "" + (i + 1) + "" + movie_list[i]);

    }

}else{
    //if input is not valid not between 1 to 7 show error massage
    alert("please enter number between 1 and 7!");
}

