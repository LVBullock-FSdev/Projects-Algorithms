// // /*SETTING AND SWAPPING
// // Set myNumber to 42.  Set myName to your name.  Now swap myNumber into myName and vice versa*/
var myNumber = 42;  //set myNumber to 42
console.log("\nmyNumber is:  ", myNumber); //displays 42

var myName = "Laura"; //set myName to Laura
console.log("myName is:  ", myName); // displays myName

var tmp = myNumber; //set tmp to 42
console.log("tmp is:  ", tmp); //displays 42

myNumber = myName; //set myNumber to Laura
console.log("myNumber is now:  ", myNumber); // displays Laura

myName = tmp; //sets myName to 42
console.log("myName is now:  ", myName); //displays 42

console.log("\n")


// // /***************************************************** */
// // /*PRINT -52 to 1066
// // Print integers from -52 to 1066 using a FOR loop*/
for(var i = -52; i <= 1066; i++){
    // console.log(i);
    process.stdout.write(i + " ");  //do this if you want the numbers side by side rather than adding a new line at the end.
}
console.log("\n\n")



// // // /***************************************************** */

// // /*DON'T WORRY, BE HAPPY
// // Create beCheerful().  Within it, console.log string "good morning!" Call it 98 times.*/
function beCheerful() {
  for(var greet = 1; greet <= 98; greet++){
    // console.log("good morning!");
    process.stdout.write("good morning!" + " ");
  }
}

beCheerful();
console.log("\n\n")



// // // /***************************************************** */

// // // /*MULTIPLES OF THREE - BUT NOT ALL
// // // Using FOR, print multiples of 3 from -300 to 0.  Skip -3 and -6.*/
for(var i = -300; i <= 0; i = i + 3)
  {
    if (i == -6 || i == -3)
    {
      continue;
    }
    // console.log(i)
    process.stdout.write(i + " ");
  }
  console.log("\n\n")


// // // /*PRINTING INTEGERS WITH WHILE
// // // Print integers from 2000 to 5280, using a WHILE.*/
  var i = 1999;
  while(i < 5280)
  {
    i++;
    // console.log(i);
    process.stdout.write(i + " ");
  }
  console.log("\n");



// // // /*YOU SAY IT'S YOUR BIRTHDAY
// // // If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day....".*/
function myBirthday(number1, number2) {
  if(number1 == 10 && number2 == 23 || number1 == 23 && number2 == 10) { //if the value of number1 and number2 equals 10 & 23 or number1 and number2 equals 23 & 10 
    console.log("\n\nHow did you know?"); //<-- display this if the conditionals above are true
  }
  else {
    console.log("Just another day. . . .");  //<--display this, if the conditionals above are not true
  }  
}

myBirthday(10, 23);
myBirthday(11, 05);
console.log("\n");


// // // /*LEAP YEAR
// // // Write a function that determines whether a given year is a leap year.  If a year is divisible by four,
// // // it is a leap year, unless it is divisible by 100.  However, if it is divisible by 400, then it is.*/
// // // Resource:  https://www.calendar.best/leap-years.html
function leapYear(year) {
  if( year % 4 == 0 && year % 100 !== 0 || year % 400 == 0 ){
    console.log(year + " is a Leap Year");
  }
  else{
    console.log(year + " is not a Leap Year");
  }
}
leapYear(2982);
leapYear(2016);
leapYear(1900);
leapYear(2528);
console.log("\n");

//resource:  https://www.calendar.best/leap-years.html




// // // /*PRINT AND COUNT
// // // Print all integer multiples of 5, from 512 to 4096.  Afterward, also log how many there were.*/
function printAndCount(){
  var count = 0;
  for(var i = 512; i <= 4096; i = i + 1){
      if(i % 5 == 0){
          // console.log(i);
          process.stdout.write(i + " ");
          count = count + 1;
      }
  }
  console.log("\n\nTotal integers that are multiples of 5:", count + "\n\n");
}
printAndCount();
console.log("\n");


// // // /*MULTIPLES OF SIX
// // // Print multiples of 6 up to 60,000, using a WHILE.*/
var num = 0;

while(num < 60001) {
    num++;
    if(num % 6 == 0) {
        // console.log(num);
        process.stdout.write(num + " ");
    }
}
console.log("\n");



// /*COUNTING, THE DOJO WAY
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".*/
function dojoWayCount(){
  for(var x = 1; x <= 100; x++){
    if(x % 5 == 0){
      console.log("Coding")
      if(x % 10 == 0){
        console.log("Dojo")
      }
    } 
    else {
      console.log(x)
    }
  }
}
dojoWayCount();
console.log("\n");


// /*WHAT DO YOU KNOW?
// Your function will be given an input parameter incoming. Please console.log this value.*/
function incomingParameter(parameter){
  console.log(parameter)
}

incomingParameter("Oh, what a beautiful morning!");
console.log("\n");



/*WHOA, THAT SUCKER'S HUGE…
Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?*/
function suckersHuge(){
  var sum = 0;
  for(var x = -300000; x <= 300000; x++){
    if(x % 2 != 0){
      sum += x;
      // console.log(sum);
      // console.log(x);
      // process.stdout.write(x + " ");

    }
  }
  console.log(sum);
}

suckersHuge();  //This one is incorrect
console.log("\n");


// /*COUNTDOWN BY FOURS
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.*/
function countDownByFour(){
  var start = 2016
  while(start > 0){
    if(start % 2 === 0){
      // console.log(start)
      process.stdout.write(start + " ");

    }
    start -= 4
  }
}

countDownByFour();
console.log("\n");

// /*FLEXIBLE COUNTDOWN
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).*/
function flexibleCountdown(lowNum, highNum, mult){
  for(var x = highNum; x > lowNum; x -= mult){
    console.log(x)
  }
}
flexibleCountdown(2,9,3);
console.log("\n");



// /*THE FINAL COUNTDOWN
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).*/

function finalCountDown(param1, param2, param3, param4){
  while(param2 < param3){
    if(param2 % param4 != 0){
      if(param2 % param1 === 0){
        console.log(param2)
      }
    }
    param2++
  }
}
finalCountDown(3,5,17,9);