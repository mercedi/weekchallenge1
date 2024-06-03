/* Square this number */


/* Preview this page on the browser and test the first calculation */

/* Now it's your turn to do the rest as seen on the preview */

/* Half this number */
function halfNumber(num) {

    //num parameter determines what user will input
    let halfsies = num / 2; //halfsies is the calculation user input divided by 2
    
    //Displays on frontend the result
    document.getElementById("solution").innerHTML = `Half of ${num} is ${halfsies}`;
}

//call the button's id and location in the DOM
let halfButton = document.getElementById("half-button");

//Creates interaction of button when user clicks button
halfButton.addEventListener("click", function() {
    let num = document.getElementById("half-input").value; //Retrieves current value from input field of the form, basically what user enters in field
    halfNumber(num); //halfNumber contains calculation of halfsies and num(aka what user inputs)
});


/* Fraction and Whole Number */
 function fwNumber(num1, num2) {
    let percentage = (num1 / num2) * 100;
    document.getElementById("solution").innerHTML = `${num1} is ${percentage}% of ${num2}`;
 }
let percentButton = document.getElementById("percent-button");
percentButton.addEventListener("click", function() {
    let num1 = document.getElementById("percent1-input").value;
    let num2 = document.getElementById("percent2-input").value;
    fwNumber(num1, num2);
});


/* Integer */
function intNumber(num) {
    //num parameter determines what user will input
    let integer = Math.round(num); //Rounds number to the nearest whole number
    //Displays on frontend the result
    document.getElementById("solution").innerHTML = `The result of integer ${num} is ${integer}`;
}

//Calls the button id and location in the DOM
let intButton = document.getElementById("int-button");

//Creates interaction of button when user clicks button
intButton.addEventListener("click", function() {
    let num = document.getElementById("int-input").value;
    intNumber(num);
});

/* Calculate area of circle with radius */
function areaCircle(num) {
    let area = (num * num * Math.PI); //area of circle calculation
    //Message for frontend
    document.getElementById("solution").innerHTML = `The area of circle with radius ${num} is ${area}`;
}
    //call location of button
    let areaButton = document.getElementById("area-button");
    //add interaction for user when they click calculate button
    areaButton.addEventListener("click", function() {
        let num = document.getElementById("area-input").value; //takes user's input from field
        areaCircle(num); //calculates area of circle with user input
    });