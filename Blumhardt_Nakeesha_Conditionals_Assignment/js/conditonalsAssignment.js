
 /*
Nakeesha Blumhardt
SDI Section #2
Conditionals Assignment
6-25-15
 */

 //alert("Testing to see if connected.")

 //Greet user and ask for their name

 var famousGreetings = ["good morning","good afternoon","hello","hi","hey","guten tag","guten morgen","bonjour"];

 console.log(famousGreetings);
 console.log(famousGreetings[5]);
 if(famousGreetings[5]==="hey"){console.log("This is guten tag");
  famousGreetings2--;
 }else {
  console.log("This is not guten tag.");
 }

 console.log(famousGreetings);
 console.log(famousGreetings[7]);
 if(famousGreetings[7]===""){console.log("This is bonjour");
  famousGreetings2++;
 }else {
  console.log("This is bonjour.");
 }

 var name = prompt("Good Afternoon, may I ask your name? " + name);

 if(name === ""){
  name = prompt("Please type out your name and press okay");
 }
 //Alert user that you are going to play quiz game

 alert( name+  "  ,We are going to play a little quiz game.  Enter your answer after the questions.");
 console.log(name);

 var quiz1 = prompt("If two people in a room shakes hands with every " +
     "person once, how many total handshakes happen?");

 var quiz2 = prompt("How many states are in the United States?");

 var quiz3 = prompt("How many of the states names end with an A ?");

 var quiz4 = prompt("How many of the states names end with an O ?");

 var quiz5 = prompt("How many quarters make up a dollar?");

 var quiz6 = prompt("On my way to St. Ives I saw a man with 7 wives.Each wife had 7 sacks. " +
     "Each sack had 7 cats.Each cat had 7 kittens. Kitten, cats, sacks, wives. " +
     "How many were going to St. Ives?");
 if(quiz6 === ""){
  quiz6 = prompt("Please enter a numerical number");
 }
 var quiz7 =prompt("This famous show on TLC has how many kids and counting?");

 alert( name+  "  ,This is the end of the quiz now let's see how well you did?");

 // alert the user to add or multiply the answers to each quiz for the total answers

alert("Multiply quiz 4 answer by 2");
var breakdownAnswer1 =(+quiz4*2);
console.log(breakdownAnswer1);

 alert("The answer is " + breakdownAnswer1);

 alert(" Add your answers together for questions 1,6,and 7.");
 var breakdownAnswer2 = Number(quiz1)+ Number(quiz6) + Number(quiz7);

 alert("The answer is " +breakdownAnswer2);
 console.log(breakdownAnswer2);

 alert("Add the number from the previous screen to quiz number 3");
 var breakdownAnswer3 = Number(quiz1)+ Number(quiz6) + Number(quiz7)+ Number(quiz3);

 alert("The answer is " + breakdownAnswer3);

 console.log(breakdownAnswer3);

 alert("Now for the last one add all of your previous calculated answers to question 2 and see your total.");
 var breakdownAnswer4 = 100

 alert("Did you get "+ breakdownAnswer4+ "?  If so you are a winner!");

console.log(breakdownAnswer4);
