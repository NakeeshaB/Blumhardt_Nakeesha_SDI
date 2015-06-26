
 /*
Nakeesha Blumhardt
SDI Section #2
Conditionals Assignment
6-25-15
 */

 //alert("Testing to see if connected.")

 //Greet user and ask for their name

 var name = prompt("Good After noon, may I ask your name? " + name);

 //Alert user that you are going to play quiz game

 alert( name+  "  ,We are going to play a little quiz game.  Enter your answer after the questions.");

 var quiz1 = prompt("If two people in a room shakes hands with every " +
     "person once, how many total handshakes happen?");

 var quiz2 = prompt("How many states are in the United States?");

 var quiz3 = prompt("How many of the states names end with an A ?");

 var quiz4 = prompt("How many of the states names end with an O ?");

 var quiz5 = prompt("How many quarters make up a dollar?");

 var quiz6 = prompt("On my way to St. Ives I saw a man with 7 wives.Each wife had 7 sacks. " +
     "Each sack had 7 cats.Each cat had 7 kittens. Kitten, cats, sacks, wives. " +
     "How many were going to St. Ives?");
 var quiz7 =prompt("This famous show on TLC has how many kids and counting?");

 alert( name+  "  ,This is the end of the quiz now let's see how well you did?");

 // alert the user to add or multiply the answers to each quiz for the total answers

alert("Multiply quiz 4 answer by 2");
var breakdownAnswer1 =(+quiz4*2);

 alert("The answer is " + breakdownAnswer1);

 alert(" Add your answers together for questions 1,6,and 7.");
 var breakdownAnswer2 = Number(quiz1)+ Number(quiz6) + Number(quiz7);

 alert("The answer is " +breakdownAnswer2);




