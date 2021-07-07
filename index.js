//console.log("Connected");

//DAY 1
/* alert ("Hello");

//strings   
 let string = "string";

let sentence = "Hello " + "Vicky"
console.log(sentence);
let sentence2 = " and also Angel";
const combine = sentence + sentence2;
console.log(combine);

let student1 = "Sandra";
let student2 = "Kelly";
let courseName = "AP CSP";
let teacherName = "Whalen";


let longSentence = `${student1} and ${student2} will 
be taking ${courseName} with ${teacherName} next year`; //template literal

console.log(longSentence);

////////////////////////////////////
//numbers integers
let year = 2020;
let nextYear =2020 + 1;
let past = year/ 2;
let lastYear = year - 1;
let farFuture = year * 100;

console.log(year, nextYear, past, lastYear, farFuture);


////////////////////////////////////
//booleans, null, undefined
let trueStatement = true;
let flaseStatement = false;

let undefinedVar;
console.log(undefinedVar); //console log variables
console.log(nonExistent); //null


if/ else if statements
let student1 = "Karen";
let age=17;
console.log(student === "Karen"); //true
console.log(student === "Karen"); //false
console.log(student == "karen"); //false
console.log(age === "17"); //false
console.log(age == "17"); //true

let school= "middle";
if (school == "elementary") {
    console.log("you are in elementary school");
} else if (school == "middle") {
    console.log("you are in middle school");
} else {
    console.log("you are in high school");
}

////////////////////////////////////

//stop light
let light= ``;
if (light === "green") {
    console.log("go");
} if (light === "yellow") {
    console.log("caution");
} else {
    console.log("stop")
}


//coffee
let kristyInt = false;
let baobaoInt = false;

if(kristyInt === true && baobaoInt == true) {
    console.log("They will get almond milk");
} else if (kristyInt === true || baobaoInt == true) {
    console.log("They will get milk and almond milk");
} else  {
    console.log("They will get milk");
}


//cupcake temp
let temp = 3465456;

if(temp < 68) {
    console.log ("too cold");
}
else if (temp >= 68 && temp <= 72) {
    console.log ("perfect")
}
else if (temp >= 73 && temp <= 76) {
    console.log ("warm");
}
else {
    console.log("too hot");
}
*/

////////////////////////////////////

//DAY TWO
//functions in JS
/* function test() {  //functions are input output machines
    console.log("I am a function");
}
test(); */
/* function argument(argument) { //input
    console.log(argument); //output
}
//argument("Edis");
function add(x, y) {
    return x + y;   //return ends function
}
//console.log(add(2, 7));
let z = function add(x, y) {
    return x + y;
};
z(1, 11);
console.log(z(1,11)); */

////////////////////////////////////

//Scoping
//let x = "x";   //can be redefined
//const z = "z"; //cannot redefine "const"
/* const hello = function() {
    alert("hello");
};
const bye = function() {
    alert("bye");
};

function beatles() {
    hello();
    bye();
}
beatles(); */

//global or window scope
/* function makeFunc() {
    //function scope
    const name = "Sun";
    console.log(name);
}
function hello() {
    const name = "Jaiyu";
    console.log(name);
}
hello();
makeFunc(); */

/* function makeFunc() {
    //function scope
    const name = "Sun";
    function displayName(name) {
        alert(name); //inner function still has access to outer variable name
    }
    return displayName;
} */

////////////////////////////////////

//Arrays (lists)
/* const names = ["Michelle", "Edis", "Richard", "Vincent", "Gisele"];
//names.push("Katrina"); 
const Gisele = names.slice(-1); */


////////////////////////////////////

//Arrow functions and methods
/* const names = ["Michelle", "Edis", "Richard", "Vincent", "Gisele"];

names.forEach(name => console.log(name));  */ //performs function in every element in array; name=element 
//arrow function 1)always returned     2)this is changed

////////////////////////////////////
//spread operator
/* const numbers = [1, 2, 3];
const add = function(x, y, z) {
    return x + y + z;
};
console.log(add(...numbers)); */
/* const numbers = [1, 50, 34, 75, 11];
const biggestNum = Math.max(...numbers);
console.log(biggestNum); */

////////////////////////////////////
//challenge 1
const students = [
    "Riya",
    "Omor", 
    "Alan", 
    "Jaiyu", 
    "Michael", 
    "Lisa",
    "Richard"
];

const filter = students.filter(student => student.length < 5);
console.log(filter);

//challenge 2

const students2 = [
    "Riya", 
    "Omor", 
    "Alan", 
    "Jaiyu", 
    "Michael", 
    "Lisa",
    "Richard"
];

//includes junshen? false
console.log(students2.includes("junshen"));

//includes alan or savva? true
console.log(students2.includes("Alan" || "Savva"));





