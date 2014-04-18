/**
 * Movie Ticket Price Created by Phirom Yim on 4/17/14.
 *
 */
//Find out what two ticket prices a customer is paying for
//create a variable for ticket prices
var ticket = 12;//define ticket price
//create a variable for discounted ticket price
var discountTicket = 7;//define discount ticket
//create a prompt for user input of age
var age = Number (prompt ("Enter your age"));
//create a prompt for user input of movie time
var matinee = Number (prompt ("Enter the time of the movie"));
//if you are 55 or older and or 10 or younger print if true
if(age >= 55 || age <= 10){
    console.log("Your ticket price is" + " " + "$" + discountTicket);
    //code performed if true
}else{
    console.log("Your ticket price is" + " " + "$" + ticket);
    //code performed if false
//if you are under 55 and over 10 and go to the movies between 3 and 5 print to console
}if(matinee >= 3 || matinee <= 5){
    console.log("Your ticket price is" + " " + "$" + discountTicket);
    //code performed if true
}else{
    console.log("Your ticket price is" + " " + "$" + ticket);
    //code performed if false
}

