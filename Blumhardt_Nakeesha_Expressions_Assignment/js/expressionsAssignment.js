/*
Nakeesha Blumhardt
SDI Section #2
Expressions Assignment
6-25-15
 */
//alert("Test to see if connected.");

//Create a childcare calculator

//Ask the user if they want to calculate the price of childcare and their name
var name=prompt("Do you know how much you spend on childcare?   " + "Let me help you figure it out. " +
    " \nPlease type in your name.");

// Use the variable and say hello
alert("Hi "+name+  ", Let's get started");

//console.log user name
console.log(name)

//Ask the user to select the number of children they have or expected to have in childcare
var kids = prompt(name+ " ,how many children do you expect to have in childcare?");


//Arrays
var numberofChildren = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(numberofChildren[2]);

//figure out weekly cost for each child
var costperweek = prompt ("What is the estimated cost per week per child?");

//Calculate the price per week times number of children selected for user.

var weeklyTotal = Number(kids)* Number(costperweek);

//alert the user of weekly childcare cost
alert(name + " ,you pay an estimated amount of $"+Number(weeklyTotal)+ " for weekly childcare.");

// Calculate monthly cost of child car

var monthlycost = Number(kids)* Number(costperweek)*4;
//alert the user of monthly cost
alert(name+", you pay an estimated amount of $ "+Number(monthlycost)+" per month for childcare.");

console.log(monthlycost);