//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var useremail = "me@example.com";
var useragree;
var username;



//==== LOGIC =============
var useragree = confirm("would you like to join for our newsletter");
console.log(useragree);

if(useragree === true){
    username = prompt ("enter your useremail" , "me@example.com");
                                if (username === "" || username === null || username === useremail){
                                    alert ("Thank you, but your email was not valid");
                                     
                                }
                                else{
                                    alert("Thank you, our next newsletter will be sent to your mail");
                                }
}else{
    alert("Thank you, we will not bother you again. ")
}

