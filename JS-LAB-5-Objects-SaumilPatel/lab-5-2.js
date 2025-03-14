//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.
var bank_Customer = {    
    lastName: "Patel",
    branchNumber: 1234,
    accountBalance: 500.25,
    interestRate: 1.03,

//2. Add the required properties to your object.
    makeDeposit: function(addition) {
        bank_Customer.accountBalance = bank_Customer.accountBalance + addition;
        return "thank you your current balance is now $ " + this.accountBalance;
    },
    makewithdrawal : function(subtraction){
        bank_Customer.accountBalance = bank_Customer.accountBalance - subtraction;
        return "thank you your current balance is now $ " + this.accountBalance;
    },
}
console.log(bank_Customer.accountBalance);
console.log(bank_Customer.makeDeposit(200));
console.log(bank_Customer.makewithdrawal(75));
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!


