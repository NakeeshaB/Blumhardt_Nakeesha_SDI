 /*
Nakeesha Blumhardt
SDI Section #2
GoToTrainingWeek 3
6-25-15
 */

 //alert("Testing to see if connected.");

 //Create an array of fruit names and then sort it

 //Array- variable that holds multiple variables

 //Index # of an array always starts with 0!

 var bowlOfFruit = ["apple","banana","pear","peach"];

 //console.log(bowlOfFruit);

 console.log(bowlOfFruit[2]);

 //How many iatems are in an array?

 //length property-access this by using dot syntax
 //fancy name for use a period
 console.log(bowlOfFruit.length);

 //Count the number of pears in our fruit bowl

 //Create a variable that will keep track of many pear there are.

 var totalNumPears = 0;

 //Test each item in the array and check if it is a pear

 // Basic structure of a conditonal
 // if(condition to test){cod that will run if true}If false the code will not run and will skip it
 //"7"== 7 - true
 //"7"=== 7 - false
 //prompts always return  text strings!!

 if(bowlOfFruit[0])=== "pear"){
   //This code will run if true
   // Add 1 to the total number of pears
   console.log("This item is a pear!");
     totalNumPears++;//totalNumPears =totalNumPears + 1;
 } else {
     console.log("This fruit is not a pear.");

 }



