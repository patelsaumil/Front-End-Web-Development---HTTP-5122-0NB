//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var team_mem = ["megh","hetul","jasmin","pathik","sam"]
//OUTPUT TEAM ARRAY TO JS CONSOLE

console.log(team_mem);


//REMOVE LAST MEMBER
team_mem.pop();
console.log(team_mem);

//ADD SEAN TO FRONT OF ARRAY
team_mem.unshift("sean");

//REARRANGE THE ARRAY ALPHABETICALLY
team_mem.sort();
console.log(team_mem);


//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("we have " + " " + team_mem.length + " " + "persons in our group");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for (var i = 0; i < team_mem.length; i++) {
    console.log("#" +  + (i + 1) + " " + team_mem[i] )
}