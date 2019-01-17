
	   //JavaScript Cheatsheet
document.write("<br>");

// Boolean Data Types
var smart = true
document.write(smart);
document.write("<br>");

// Double Data Types
ote("You may Enter")
		document.write("<br>");
	}
		else if (nerdy == false) {
		document.write("Access Denied");
		document.write("<br>");
	}
	
		else {
	   document.write("Nevermind!");
		document.write("<br>");
		}

	
// JavaScript Functions
		function firstfunction() {
		document.write("My First Function!")
	   document.write("<br>");
		};
		
// Calling Function
		firstfunction();

// Function Return
// Using the Return statement to return a value
function multiply(a, b) {
	return a * b;
}

var x = multiply(3, 2); 
document.write(x);
document.write("<br>");
		
//Variable JSON - JS Object Notation
		var donor1 = {
			"name": "Ahmed",
			"age": 27,
			"aliases": [
			"Tom Cruise",
			"Denzel",
			"Keano Reeves"]
		}

// Accessing variables JSON
		document.write(donor1.name
			+ "<br>" + donor1.aliases[2] + "<br>");

//JS Alerts (Click Okay)
		alert("Example of Alert");

//JS Confirm - (Click OK or Cancel)
		var smart = confirm("Are you smart?");
		document.write("Are you smart?: " + smart);
	   document.write("<br>");

//JS Prompt - (Input Data)
		var favoritemovie = prompt("What is your favorite Movie?");
		document.write("Favorite Movie: " + favoritemovie);
		document.write("<br>");


//.Length Method
		var donor2 = {
			"name": "John",
			"age": 27,
			"hobbies": [
			"fishing",
			"painting",
			"coding"]
		}
		document.write("# of Hobbies: " + donor2.hobbies.length);
		document.write("<br>");

// JS Arrays
		var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
		document.write("Favorite Vegetable: " + vegetables[3] + "<br>");
		
// For Loop
		for (var i = 0; i < vegetables.length; i++) {
		document.write("I love " + vegetables[i] + ", " + "<br>");
		}
		document.write("For Loop Ended");

//Function with a For Loop
		function logarray(list) {
			for (var j = 0; j < vegetables.length; j++) {
		document.write(vegetables[j] + ", " + "<br>");
			}
		}
		logarray(vegetables);

//Hard Loop
		for (var i = 0; i < 5; i++) {
		document.write("I am " + i + "<br>");
		}

// Center Test
document.write("<center>Center<center>");

	   
	   // Advanced JavaScript
	   
// Constructors
// Constructors can be used to create objects with properties such as .noise and .raining below:
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
//Methods are functions that are stored as object properties. 
  this.makeNoise = function() {
	if (this.raining === true) {
	  document.write(this.noise);
	}
  };
}

// Settings the variables "dogs" and "cats" to be animal objects and initializing them with the properties of .raining and .noise
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");


// Calling the object's method: makeNoise 
dogs.makeNoise();
cats.makeNoise();
document.write("<br>");

// Changing an objects property
cats.raining = true;
cats.makeNoise();
document.write("<br>");

var storm = function (dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
	document.write("It's Raining Cats and Dogs!");
  }
   document.write("<br>");
};

storm(dogs, cats);

// The Same fuction declaration above can be performed using the arrow function in ES6 syntax instead
// Remove "Function" Keyword and add an => after calling the function ()
var storm = (dogs, cats) => {
  if (dogs.raining === true && cats.raining === true) {
	document.write("Arrow Function: It's Raining Cats and Dogs!");
  }
   document.write("<br>");
};

storm(dogs, cats);


//ES6 Syntax also allows for Template literals, which are a way to output variables in the string, which is pooular in other languages such as Ruby
var name = 'Ahmed';
var message = `Welcome ${name}!`;
document.write(message);
