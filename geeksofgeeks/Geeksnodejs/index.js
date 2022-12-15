// Introduction --------------------------------------> 1
/* var http = require('http');

// Create a server object:
http.createServer(function (req, res) {

	// Write a response to the client
	res.write('GeeksForGeeks');

	// End the response
	res.end();

// The server object listens on port 8080
}).listen(8080);
 */

//Events ------------------------------------------------->2
/* var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function () {

	console.log('Welcome to GeeksforGeeks');
}

// Assign the event handler to an event:
eventEmitter.on('geeks', myEventHandler);

// Fire the 'geeks' event:
eventEmitter.emit('geeks'); */


// Variable store number data type------------------------------>3
/* var a = 35;
console.log(typeof a);

// Variable store string data type
a = "GeeksforGeeks";
console.log(typeof a);

// Variable store Boolean data type
a = true;
console.log(typeof a);

// Variable store undefined (no value) data type
a = undefined;
console.log(typeof a); */

// Objects ------------------------------------------>4
/* var company = {
	Name: "GeeksforGeeks",
	Address: "Noida",
	Contact: "+919876543210",
	Email: "abc@geeksforgeeks.org"
};

// Display the object information
console.log("Information of variable company:", company);
	
// Display the type of variable
console.log("Type of variable company:", typeof company); */

//Functions -------------------------------------------------------->5

/* function multiply(num1, num2) {

	// It returns the multiplication
	// of num1 and num2
	return num1 * num2;
}
	
// Declare variable
var x = 2;
var y = 3;

// Display the answer returned by
// multiply function
console.log("Multiplication of", x,"and", y, "is", multiply(x, y)); */

var x = "Welcome to GeeksforGeeks ";

var y = 'Node.js Tutorials';

var z = ['Geeks', 'for', 'Geeks'];

console.log(x);

console.log(y);

console.log("Concat Using (+) :", (x + y));

console.log("Concat Using Function :", (x.concat(y)));

console.log("Split string: ", x.split(' '));

console.log("Join string: ", z.join(', '));

console.log("Char At Index 5: ", x.charAt(5) );








































