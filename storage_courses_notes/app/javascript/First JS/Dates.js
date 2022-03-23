"use strict";

var time = new Date(); 

console.log("Current time : \n", time);

time = new Date(2022, 3, 18, 15, 21, 43);
console.log("Year, Month, Day, hour, min, sec : \n", time);

time = new Date("March 18, 2022")
console.log("Initalized with a date string : \n", time);

time = new Date("2019-10-20");
console.log("Initalized with (yyyy-mm-dd: \n", time);

time = new Date();
console.log("Current time in my timezone: \n", time);

console.log("The UTC time is: ", time.toUTCString()); 

