//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
//alert(saumil);
var saumil = {
    name: "Saumil",
    age: 26,
    profession: "Web developer",
    hobby: "Cooking",

    introduce: function() {
        alert("My name is " + this.name + " and I am a " + this.profession + ".");
    }
};

console.log(saumil.age);
saumil.introduce();




