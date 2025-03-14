//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var shopcart = [];
var totalcartprice = 0;
var shippingtreshold = 35;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while(totalcartprice <= shippingtreshold){
//GET ITEM COST FROM USER
var userprice = prompt("enter item amount")
	
//CONVERT USER INPUT TO A NUMBER
var price = parseInt(userprice)

//ADD ITEM COST TO RUNNING TOTAL VARIABLE
var totalcartprice = totalcartprice + price;

//PUSH ITEM COST TO CART ARRAY
shopcart.push(price);


}
	
	


//SEND POPUP MESSAGE TO USER
alert("your total shippping for this order will be free" + "$" + totalcartprice);

//SEND OUTPUT TO CONSOLE
console.log("price of items" + shopcart.join("|"));
