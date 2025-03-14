//alert("saumil");
//The team number in which user is part of
var user_team_num = 6;

//names of team members
var team_mem1 = "Megh Patel";
var team_mem2 = "Jay Patel";
var team_mem3 = "Hetul Suthar";
var team_mem4 = "Rutvi patel";
var team_mem5 = "Pathik Patel";
var team_mem6 = "Jubin Patel";

//pop up to ask the user which team they belong to 
var team_mem_num = prompt("Enter the number which team do you belong to?");

//check the team number is correct or not entered by user

if(team_mem_num == user_team_num){
    //if team num is correct its the pop up for their first name
    var first_name = prompt("what is your first name");

    //switch case to check the first name and display the welcome msg
    switch(first_name){
        case "Megh": alert("Welcome to team" + team_mem1);
        break;
        case "Jay": alert("welcome to team" + team_mem2);
        break;
        case "Hetul": alert("Welcome to team" + team_mem3);
        break;
        case "Rutvi": alert("Welcome to team" + team_mem4);
        break;
        case "Pathik": alert("welcome to team" + team_mem5);
        break;
        case "Jubin": alert("Welcome to team" + team_mem6);
        break;
        default:
            alert("Access denied!");
            break;
    }
}
else{
    //if user entered the wrong team number it will deny the access
    alert("your access denied");
}