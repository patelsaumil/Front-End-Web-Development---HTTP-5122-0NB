// Create the object structure.
var Fooddish = {    
    Name: "Sandwich",
    Price: 6,
    Rating_star: 3.5,
    Flavour: "Spicy",

// Methods to update price and rating
    Updateprice: function(Updateamount) {
        this.Price += Updateamount;
        return this.Price;
    },

    Updaterating: function(UpdateRating) {
        this.Rating_star += UpdateRating;
        return this.Rating_star;
    },
}
//output initial object to console 
console.log(" Real Price: $ " + Fooddish.Price);

//popup for displaying the dish actual price 
alert(Fooddish.Name + " Actual price is $" + Fooddish.Price );

//update the price by $4 and display on the popup
alert(Fooddish.Name + " now costs $" + Fooddish.Updateprice(4));
console.log(" Updated Price: $ " + Fooddish.Price);


//first update prompt user for a new food item 
var updatefooditem = prompt("enter new food item" , Fooddish.Name);
Fooddish.Name = updatefooditem;

console.log("updated food item " + Fooddish.Name);


//second update prompt user for new flavour
var update_food_flavour = prompt("enter new food flavour" , Fooddish.Flavour);
Fooddish.Flavour = update_food_flavour;

console.log("updated food flavour " + update_food_flavour);

//third update rating with method and log it in console
console.log(Fooddish.Name + " has updated Rating which is now " +  Fooddish.Updaterating(0.5));

//final updated object output in console
console.log("Updated Food dish object ", Fooddish);