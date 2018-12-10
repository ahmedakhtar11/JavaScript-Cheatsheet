
	   				//JavaScript Cheatsheet
	   
//JavaScript Hello World
console.log("Hello World");
document.write("Hello World");
document.write("<br>");
	
//String Data Types
var name = "ahmed"
document.write(name);
document.write("<br>");
	  
// Integer Data Types
var age = 28
document.write(age);
document.write("<br>");

// Boolean Data Types
var smart = true
document.write(smart);
document.write("<br>");

// Double Data Types
var price = 9.99
document.write(price);
document.write("<br>");

//If Else Statements
const nerdy = true

if (nerdy == true) {
		document.write("You may Enter")
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


					//Advanced JavaScript

//JS Constructors
function Animal(raining, talk) {
  this.raining = raining;
  this.talk = talk;
  this.startTalking = function() {
    if (this.raining === true) {
      document.write(this.talk);
    }
  };
}


var dog = {
    raining: true,
    talk: "Woof!",

    startTalking: function () {
        if (this.raining === true) {
            document.write(this.talk);
            document.write("<br>");
        }
    }
};

var cat = {
    raining: "true",
    talk: "Meow!",

    startTalking: function () {
        if (this.raining === true) {
            document.write(this.talk);
            document.write("<br>");
        }
    }
};

dog.startTalking();


// Constructor used to create new objects with properties
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

// Changing an object's property after creation
cats.raining = true;

var storm = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    document.write("Raining Cats and Dogs!");
  }
};

storm(dogs, cats);

// Center Test
document.write("<center>Center<center>");