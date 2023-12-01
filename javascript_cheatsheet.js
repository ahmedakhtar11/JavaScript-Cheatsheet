// JavaScript Guide and CheatSheet - Ultimate Reference
// By Ahmed Akhtar - Chicago - @Copyright 2023

// From Basic JavaScript to Advanced to Coding Problems!
// Almost Every JavaScript concept is demonstrated below.

// Run this entire code in any JavaScript Compiler to see eveyrthing in action!
// Support and thumbs up this repository!

//Variables in JS
    // Global Scope = Yes
    // Function Scope = Yes
    // Block Scope = No
	var variable_js = "variable"

	//Let in JS
		// Global Scope = No
		// Function Scope = Yes
		// Block Scope = Yes
	let let_js = "let"
	
	//Constants in JS
		// Global Scope = No
		// Function Scope = Yes
		// Block Scope = Yes
	const constant_js = "constant"
	
	// (Note var has No Block Scope so var can leak out of blocks,
	//  such as for loops and if-then statements or {}.
	{
	var variable_js_test = "variable"
	let let_js_test = "let"
	const constant_js_test = "constant"
	}
	
	// This will run - because var
	document.write(variable_js_test + "<br>")
	
	// This won't run - let
	// document.write(let_js_test + "<br>")
	
	// This won't run - const
	// document.write(constant_js_test + "<br>")
	
	//Strings in JS
	var dash = '-'
	document.write("Strings in JS:");
	document.write("<br>" + dash.repeat(20) + "<br>");
	
	// Logs in Console: "Hello World"
	console.log("Hello World");
	
	// Prints "Hello World"
	document.write("Hello World");
	document.write("<br>");
	
	// JavaScript has 8 Datatypes
	// 1. String
	// 2. Number
	// 3. Bigint
	// 4. Boolean
	// 5. Undefined
	// 6. Null
	// 7. Symbol
	// 8. Object
	
	//Note:
	// Undefined means the variable has been 
	// declared, but its value has not been assigned.
	// Null means an empty value or a blank value.
		
	//String Data Types
	
	var individualName = "ahmed"
	document.write(individualName);
	// Prints "ahmed"
	
	document.write("<br>");
		  
	// Integer Data Types
	var age = 28
	// Prints "28"
	document.write(age);
	document.write("<br>");
	
	// Boolean Data Types
	var smart = true
	// Prints true
	document.write(smart);
	document.write("<br>");
	
	// Double Data Types
	var price = 9.99
	// Prints 9.99
	document.write(price);
	
	document.write("<br>" + "<br>");
	document.write("Data Types in JavaScript:")
	document.write("<br>" + dash.repeat(20) + "<br>");
	
	// Converting Numbers to Strings
	var message = 55
	document.write(message.toString())
	// Returns '55'
	
	document.write("<br>");
	
	// Converting Strings to Numbers
	var message = '50'
	document.write(Number(message));
	// Returns 50
	
	document.write("<br>");
	
	// Converting Strings to Integers
	// Note* Also removes any additional text
	var size = '20px'
	document.write(parseInt(size));
	// Returns 20
	
	document.write("<br>");
	
	// Converting Strings to Floats
	// Note* Also removes any additional text
	var pi = '3.14pie'
	document.write(parseFloat(pi));
	// Returns 3.14
	document.write("<br>");
	
	//Checking Data Types
	data = 5
	document.write(typeof(data))
	// Returns Number
	document.write("<br>");
	
	// Left characters of a String
	document.write("Left 5 characters")
	document.write("<br>");
	var leftstring = "Hello world";
	var res = leftstring.substring(0, 5);
	document.write(res)
	
	document.write("<br>" + "<br>");
	
	document.write("Incrementing in JS")
	document.write("<br>" + dash.repeat(20) + "<br>");
	//Incrementing in JS
	let theCount = 2
	
	// Increments next time - Prints 2
	document.write(theCount++)
	document.write("<br>");
	// Incremented next time - Prints 3
	document.write(theCount)
	document.write("<br>");
	
	// Decrements next time - Prints 3
	document.write(theCount--)
	document.write("<br>");
	// Decremented next time - Prints 2
	document.write(theCount)
	document.write("<br>");
	
	// Decrements this time - Prints 1
	document.write(--theCount)
	document.write("<br>");
	
	// Increments this time - Prints 2
	document.write(++theCount)
	document.write("<br>" + "<br>");
	
	// Storing Data
	document.write("Arrays, JSON, Sets, Maps:")
	document.write("<br>" + dash.repeat(20) + "<br>");
	
	// JS Arrays
	//Prints Fourth Item in an Array (vegetables[3]) First is 0 in JS
	let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
	document.write("Favorite Vegetable: " + vegetables[3] + "<br>");
	//Returns Favorite Vegetable: Tomatoes
	
	
	// Add to the front of an Array
	vegetables.unshift("Cabbage")
	document.write(vegetables[0])
	//Returns Cabbage (As first item in an Array)
	
	document.write("<br>");
	
	// Add to the end of an Array
	vegetables.push("Potato")
	document.write(vegetables[5])
	//Returns Potato (As first item in an Array)
	
	document.write("<br>");
	
	// Combine Arrays
	let arrayNumbers1 = [1, 2, 3]
	let arrayNumbers2 = [4, 5, 6]
	let combined = arrayNumbers1.concat(...arrayNumbers2)
	document.write("Combined: Array: " + combined);
	//Returns Combined: Array: 1,2,3,4,5,6
	
	//Splice Array 
	//Splice affeAlterscts original Array
	let splicingArray=[1,2,3,4,5];
	splicingArray.splice(2);
	document.write("<br>");
	document.write(splicingArray);
	// Returns 1,2
	
	document.write("<br>");
	
	//slice
	//slice doesn't affect original Array
	let slicingArray=[1,2,3,4,5]
	slicingArray.slice(2);
	document.write(slicingArray);
	// Returns 1,2
	
	document.write("<br>");
	
	//Add to specific Index in an Array.
	numbersArray = [1, 2, 3, 4]
	numbersArray.splice(2, 0, 99)
	// Add at index of 2, remove 0 items, and add 99.
	document.write(numbersArray)
	document.write("<br>");
	// Returns [1, 2, 99, 3, 4]
	
	//Delete from an Index in an Array.
	numbersArray2 = [1, 2, 3, 4]
	numbersArray2.splice(2, 1)
	// Add at index of 2, remove 0 items
	document.write(numbersArray2)
	document.write("<br>");
	// Returns [1, 2, 99, 3, 4]
	
	//Turning and Array into a String
	let dog =  ['t', 'e', 's']
			
	let text = dog.join();
	text=text.replace(/\,/g,'');
	
	
	// Prints "28"
	document.write(text);
	document.write("<br>");
	
	// JSON - JS Object Notation
			
			var donor2 = {
				"name": "John",
				"age": 27,
				"hobbies": [
				"fishing",
				"painting",
				"coding"]
			}
	
	// Accessing variables JSON
	//Prints "John likes coding"
	document.write(donor2.name
		+ " likes " + donor2.hobbies[2] + "<br>");
	// Prints John likes coding
	
	// Alternatively Accessing variables JSON
	// Prints "27"
	document.write(donor2["age"]);
	document.write("<br>");
	
	// Updating Object Values
	// Prints "31"
	donor2["age"] = 31
	document.write(donor2["age"]);
	document.write("<br>");
	
	// Adding Object Values ("Non existing field/key..")
	// Prints "31"
	donor2["man"] = "ahmed"
	document.write(donor2["man"]);
	document.write("<br>");
	
	// Priting Object Values
	// Must parse with JSON.stringify or else will get [Object, Object]
	document.write(JSON.stringify(donor2));
	document.write("<br>");
			
	//.Length JavaScript Method
	// Prints "# of Hobbies: 3"
	document.write("# of Hobbies: " + donor2.hobbies.length);
	document.write("<br>");
	
	//.Length Method Text
	// Prints 10
	const tenletters = "Tenletters"
	document.write(tenletters.length)
	
	document.write("<br>")
	
	//.Length Method Array
	// Prints 4
	const countarray = [1, 2, 3, 4]
	document.write(countarray.length)
	
	document.write("<br>")
	
	//.Size Method
	// Prints 3
	const letters = new Set(["a","b","c"]);
	document.write(letters.size)
	
	document.write("<br>")
	
	// Sets
	const set1 = new Set([1, 2, 3, 4, 5]);
	document.write(set1.has(2));
	//Returns true
	document.write("<br>");
	
	//Adding to a Set
	set1.add(6)
	document.write(...new Set(set1));
	document.write("<br>");
	// Returns 123456
	
	//Deleting from a Set
	set1.delete(4)
	document.write(...new Set(set1));
	document.write("<br>");
	//Returns 12356
	
	// Sets Also remove duplicates
	const array100 = [1, 2, 2, 3];
	var set2 = [...new Set(array100)]
	document.write(set2);
	//Returns 1,2,3
	
	//Destructuring
	document.write("<br>");
	
	const myString = 'xyz'
	const [a,b,c] = myString
	document.write(b);
	// Returns Y
	
	document.write("<br>");
	
	// Destructuring Objects
	// const cat = {
	//   name: 'Fluffball',
	//   breed: 'Calico',
	//   owner: 'Bob'
	// }
	// const {name, breed, owner} = cat;
	// console.log(owner)
	
	
	// Destructuring Arrays
	const names = ['Jim', 'Joe']
	const [name1, name2] = names
	document.write(name1)
	//Returns Jim
	
	// Temperal Literals
	document.write("<br>");
	document.write(`Ahoy there ${name1}!`);
	
	
	
	document.write("<br>" + "<br>");
	document.write("If Else Statements:")
	document.write("<br>" + dash.repeat(20) + "<br>");
	
	
	//If Else Statements
	const brave = true
	
	// Returns "You may Enter"
	if (brave == true) {
			document.write("You may Enter")
	
		}
			else if (brave == false) {
			document.write("Access Denied");
		}
		
			else {
		   document.write("Nevermind!");
			}
	
			document.write("<br>");
	
	// Pro If Else Statements - "Guard Clauses"
	// Cleaner way to write code
	// Returns "You may Enter"
	function pro_if_else(condition) {
	if (condition == null) return
	if (condition == true) return `You may Enter`
	if (condition == false) return `Access Denied`
	return `Nevermind!`
	}
	document.write(pro_if_else(brave))
	
	document.write("<br>");
	
	//JavaScript Switch Statements
	var strong = true;
	
	// Returns "You'll be Strong"
	switch(strong) {
	  case true:
		document.write("You are Strong");
		break;
	  case false:
		document.write("You are not Strong");
		break;
	  default:
		document.write("Not Sure right now");
	}
	
	document.write("<br>" + "<br>");
	
	//JavaScript Date and Time
	document.write("Date and Time:")
	document.write("<br>" + dash.repeat(20) + "<br>");
	
	var day
	switch (new Date().getDay()) {
	  case 0:
		day = "Sunday";
		break;
	  case 1:
		day = "Monday";
		break;
	  case 2:
		 day = "Tuesday";
		break;
	  case 3:
		day = "Wednesday";
		break;
	  case 4:
		day = "Thursday";
		break;
	  case 5:
		day = "Friday";
		break;
	  case 6:
		day = "Saturday";
	}
	
	document.write(day); // Returns Current Day
	document.write("<br>" + "<br>");
		
		
	document.write("Function/Methods:")
	document.write("<br>" + dash.repeat(20) + "<br>");
		
	// JavaScript Functions
	function firstfunction() {
		document.write("My First Function!")
		document.write("<br>");
			};
			
	// Calling Function
	// Returns "My First Function!"
		firstfunction();
	
	// JavaScript Arrow Functions
	var add = (num1, num2) => num1 + num2
	 // Returns 5
	document.write(add(2, 3));
	document.write("<br>");
	
	
	// Function Return
	// Using the Return statement to return a value
	function multiply(a, b) {
		return a * b;
	}
	var x = multiply(3, 2);
	// Returns 6
	document.write(x);
	document.write("<br>");
	
	
	// JavaScript Arrow Functions - Return
	var subtract = (num1, num2) => { return num1 - num2 }
	document.write(subtract(10, 3));
	// Returns 7
	document.write("<br>");
	
	
	//JS Alerts (Click Okay)
	//alert("Example of 'Alert' Dialog - (Okay)");
	
	//JS Confirm - (Click OK or Cancel)
	//var confirm = confirm("Example of 'Confirm' Dialog (Yes or No)");
	//document.write("Can you Confirm?: " + confirm);
	//document.write("<br>");
	
	//JS Prompt - (Input Data)
	//var prompt = prompt("Example of Prompt Dialog - (Input)");
	//document.write("Favorite Movie: " + prompt);
	//document.write("<br>");
	
	document.write("<br>");
	document.write("For Loops:")
	document.write("<br>" + dash.repeat(20) + "<br>");
	
	// For Loops
	for (var i = 0; i < vegetables.length; i++) {
	document.write("I love " + vegetables[i] + ", " + "<br>");
	}
			
	// Returns I love Carrots, 
	// Returns I love Peas, 
	// Returns I love Lettuce, 
	// Returns I love Tomatoes, 
	document.write("For Loop Ended");
	// Returns For Loop Ended
	document.write("<br>");
			
			
	// For Loop (Summing an Array)
	var numbers = [20, 40, 30, 10] 
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
	  sum += numbers[i] //Returns 100
	}
	
	// Returns 100
	document.write(sum);
	document.write("<br>");
	
	
	//Function with a For Loop
	function logarray(list) {
		for (var j = 0; j < vegetables.length; j++) {
			document.write(vegetables[j] + ", " + "<br>");
		}
	}
		
	logarray(vegetables);
			
	// Returns Carrots, 
	// Returns Peas, 
	// Returns Lettuce, 
	// Returns Tomatoes, 
	
	//Hard Loop
	for (var i = 0; i < 5; i++) {
	document.write("I am " + i + " ");
	}
			
	// Returns I am 0
	// Returns I am 1
	// Returns I am 2
	// Returns I am 3
	// Returns I am 4
	
	document.write("<br>" + "<br>");
	document.write("JavaScript Constructors:")
	document.write("<br>" + dash.repeat(20) + "<br>");
	
	
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
	// Returns Woof!
	dogs.makeNoise();
	// Returns Meow!
	cats.makeNoise();
	document.write("<br>");
	
	// Changing an objects property
	cats.raining = true;
	cats.makeNoise();
	document.write("<br>");
	
	// Returns It's Raining Cats and Dogs!
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
	
	// Returns Arrow Function: It's Raining Cats and Dogs!
	storm(dogs, cats);
	
	
	//ES6 Syntax also allows for Template literals, which are a way to output variables in the string, which is popular in other languages such as Ruby
	var messageName = 'Ahmed';
	var message = `Welcome ${messageName}!`;
	// Returns Welcome Ahmed!
	document.write(message);
	
	// Using Html Tags with JavaScript
	document.write("<center>Center</center>");
	
	document.write("<br>");
	document.write("Filtering Objects in JavaScript:" + "<br>-----------------<br>")
	
	
	// Filtering Objects in JavaScript
	var users = {
	'friends': [{
		'id': 1,
		'name': 'George',
		'level': 10
	  }, {
		'id': 2,
		'name': 'Stacy',
		'level': 8
	  }, {
		'id': 3,
		'name': 'Fred',
		'level': 10
	  }, {
		'id': 4,
		'name': 'Amy',
		'level': 7
	  }, {
		'id': 5,
		'name': 'Bob',
		'level': 10
	  }]
	};
	var wantedData = users.friends.filter(function(i) {
	  return i.level === 8;
	});
	document.write("Filtered Object Data: " + wantedData[0].name);
	
	
	let array67 = users.friends.map(arr => " " + arr.name)
	let result62 = [...new Set(array67)]
	document.write(result62);
	
	
	document.write("<br>");
	
	const stores = [
		{"name":"store1", "turnover": 10000, "location":"WA"},
		{"name": "store2", "turnover": 1000, "location":"CA"},
		{"name": "store2", "turnover": 1000, "location":"WA"}
	]
	
	// Calling Object Field Values:
	document.write("Store: " + stores[1].name)
	document.write("<br>");
	document.write("Turnover: " + stores[1].turnover)
	document.write("<br>");
	document.write("Location: " + stores[1].location)
	document.write("<br>");
	
	// Filtering Objects
	// Storing For Loop Values into an Array!
	const uniquestates = () => { 
	let x = 1;
	let y = new Array();
	let array = stores.map(arr => " " + arr.location)
	for (var i = 0; i < array.length; i++) {
	  y[i]=x;
		x++;
	var result = [...new Set(array)]
	}
	document.write(result)
	}
	uniquestates();
	
	document.write("<br>");
	
	// Mapping Values into an Array
	const pullstates = () => {		   
	let array = stores.map(arr => " " + arr.location)
	let result = [...new Set(array)]
	document.write(result);
	}
	
	pullstates();
	
	document.write("<br>");
	
	
	// Adding Object Value Totals
	const totalturnover = () => {		   
	let arrayah = stores.map(arr => arr.turnover)
	const add = (total, num) => {
	  return total + num;
	}
	const resultah = arrayah.reduce(add);
	document.write(resultah);
	}
	
	totalturnover();
	//Returns 12,000
	
	
	document.write("<br>");
	
	// Adding Object Value Totals V2
	const totalturnover2 = () => {		   
	let arrayah = stores.map(arr => arr.turnover)
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const resultah = arrayah.reduce(reducer);
	document.write(resultah);
	}
	
	totalturnover2();
	//Returns 12,000
	
	document.write("<br>");
	
	// Adding Filtered Object Value Totals V2
	const filteredSum = () => {
	var newArray = stores.filter(function (el) {
		return el.location == "WA"
	  });
	  let arrayah = newArray.map(arr => arr.turnover)
	  const add = (x, y) => x + y;
	  let resultah = arrayah.reduce(add);
	  document.write(resultah);
	}
	filteredSum()
	document.write("<br>" + "<br>");
	//Returns 11,000
	
	// let sum = 0; 
	// stores.forEach(obj => {
	//	 for (let property in obj) {
	//		 if(property == "turnover")
	//		 sum += obj[property];
	//	 }
	// })
	// document.write(sum)
	document.write("JavaScript Coding Problems" + "<br>");
	document.write("-----------------------------");
	document.write("<br>");
	
	// JavaScript Coding Problem
	//Find Username before @ symbol?
	let email = "johnny@yahoo.com"
	let usernamecount = email.indexOf("@")
	let username = email.substring(0, usernamecount)
	document.write(username)
	document.write("<br>");
	
	
	// JavaScript Coding Problem
	//Find Vowels using Regex
	//Note for mig, M= Multi line, i = case sensitive, g = global search (required)
	const findVowels = (str) => {
	  document.write(str.match(/[aeiou]/mig));
	}
	findVowels('ahmed'); // 'ae'
	
	
	document.write("<br>");
	
	
	// JavaScript Coding Problem
	// Find Count of Vowels
	const findVowelsCount = (str) => {
	  document.write(str.match(/[aeiou]/mig).length);
	}
	
	findVowelsCount('ahmed'); // 'ae'
	
	
	document.write("<br>");
	
	
	// // JavaScript Coding Problem - Return Duplicates
	const yourArray = [1, 1, 2, 3, 4, 5, 5]
	
	const yourArrayWithoutDuplicates = [...new Set(yourArray)]
	
	let duplicates = [...yourArray]
	yourArrayWithoutDuplicates.forEach((item) => {
	  const i = duplicates.indexOf(item)
	  duplicates = duplicates
		.slice(0, i)
		.concat(duplicates.slice(i + 1, duplicates.length))
	})
	
	document.write(duplicates) //[ 1, 5 ]
	
	document.write("<br>");
	
	
	// JavaScript Coding Problem - Return Duplicates 2
	let duplicatearray = [1, 9, 2, 5, 5, 3, 3, 8, 4]
	let number = 0
	var idealduplicates = []
	
	for(var i = 0; i < duplicatearray.length; i++){
		for(var j = i + 1; j < duplicatearray.length; j++){
		if(duplicatearray[i] == duplicatearray[j]){
			idealduplicates.push(duplicatearray[i])
		}
	  }
	}
	document.write(idealduplicates)
	
	document.write("<br>");
	
	//  JavaScript Coding Problem - Return a Number greater than X
	const arr = [56, 34, 2, 7, 76, 4, 45, 3, 3, 34, 23, 2, 56, 5];
	const threshold = 40;
	const findGreater = (arr, num) => {
	   const res = [];
	   for(let i = 0; i < arr.length; i++){
		  if(arr[i] < num){
			 continue;
		  };
		  res.push(arr[i]);
	   };
	   return res;
	};
	document.write(findGreater(arr, threshold));
	
	document.write("<br>");
	
	// JavaScript Coding Problem
	// TwoSum!!! 2 Numbers that add up to a target
	const twoSum = (arr, target) => {
		var result = [];
	
		for (var i = 0; i < arr.length; i++) {
			for (var j = i + 1; j < arr.length; j++) {
				if (arr[i] + arr[j] === target) {
					result.push(i);
					result.push(j);
				}
			}
		}
		return result;
	}
	
	// // JavaScript Coding Problem - Ideal TwoSum
	var twoSum2 = function(nums, target) {
	var results = []
	
	for(var i = 0; i < nums.length; i++){
		if(nums[i] + nums[i+1] == target){
			results.push(i)
			 results.push(i + 1)
		}
	  }
	  return results
	}
	
	document.write(twoSum([2, 7, 11, 15], 9));
	// => Output [ 0, 1 ]
	
	
	document.write("<br>");
	
	
	// JavaScript Coding Problem - TwoSum third way:
	var twoSum3 = function(nums, target) {
	  let hash = {};
	
	  for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
		  return [hash[target - n], i];
		}
		hash[n] = i;
	  }
	  return [];
	}
	
	document.write("<br>");
	
	// JavaScript Coding Problem - TwoSum fourth way:
	const twoSum_On_Better = (arr, target) => {
		let numObject = {};
		for (let i = 0; i < arr.length; i++) {
			let thisNum = arr[i];
			numObject[thisNum] = i;
		}
		for (var i = 0; i < arr.length; i++) {
			let diff = target - arr[i];
			if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
				return [i, numObject[diff]];
			}
		}
	}
	document.write(twoSum_On_Better([2, 7, 11, 15, 12, 17], 9));
	// Output [ 0, 1 ]
	
	document.write("<br>");
	
	
	// JavaScript Coding Problem - Reverse Array
	function temporarySwapHalf(array)
	{
		var left = null;
		var right = null;
		var length = array.length;
		for (left = 0; left < length / 2; left += 1)
		{
			right = length - 1 - left;
			var temporary = array[left];
			array[left] = array[right];
			array[right] = temporary;
		}
		return array;
	}
	
	document.write(temporarySwapHalf([1,2,3,4]))
	
	
	document.write("<br>");
	
	
	// JavaScript Coding Problem - Return Number Factorial
	function factorial(n) {
		if(n>=1 && n <=10){
			return n * factorial(n-1);
		}
		return 1
	}
	document.write(factorial(4))
	// Returns 4 * 3 * 2 * 1 = 24
	
	
	document.write("<br>");
	
	
	// HackerRank Climb Stairs. Number of steps - total scenarios to climbing stairs if you can take either 1 or 2 steps.
	const climbStairs = (n) => {
	  //base case
	  if (n <= 1) return 1;
	
	  //otherwise this is basically fib sequence f(n) = f(n-1) + f(n-2)
	  return climbStairs(n - 1) + climbStairs(n - 2);
	};
	
	document.write(climbStairs(4))
	
	
	document.write("<br>");
	
	//// JavaScript Coding Problem - Recursion: Fibonacci Numbers
	function fibonacci(n) {
	  let previous = 0;
	  let current = 1;
	  if (n < 0 || n === undefined) return null;
	  if (n < 2) return n;
	  for (let i = 1; i < n; i++) {
		let temp = current;
		current = current + previous;
		previous = temp;
	  }
	  return current;
	}
	
	document.write("<br>");
	
	// JavaScript Coding Problem - Max Difference in an Array
	function max_difference(arr) {
		var max = -1;
		var temp;
		for (var i = 0; i < arr.length - 1; i++)
		  {
			temp = Math.abs(arr[i] - arr[i + 1]);
			max = Math.max(max, temp);
		  }
		return max;
	}
	
	document.write(max_difference([1, 2, 3, 8, 11]))
	
	document.write("<br>");
	
	// const array2 = [1,2,3,4]
	// const reversed = array1.reverse();
	// document.write(reversed)
	
	//Maximum Depth Binary Tree
	const maxDepth = (root) => {
		let maxDepth = 0;
		let BFS = (node, level) => {
			if(node === null) return
			if(level > maxDepth) maxDepth = level
			BFS(node.left, level +1)
			BFS(node.right, level +1)
		}
		BFS(root, 1)
		return maxDepth
	};
	
	//Same Tree Leetcode
	//Given the roots of two binary trees p and q, write a function to check if they are the same or not.
	const isSameTree = function (p, q) {
	  if (p === null || q === null) return (p === q);
	  return ((p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
	};
	
	
	//Symmetric Tree LeetCode
	// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
	
	var isSymmetric = function(root) {
	  if (!root) return true;
	  return helper(root.left, root.right);
	};
	
	var helper = function (p, q) {
	  if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
	  if (p && q) return helper(p.left, q.right) && helper(p.right, q.left);
	  return true;
	};
	
	// Hacker Rank Left Rotation Problem
	function rotLeft(a, d) {
	
	while (d) {
		a.push(a.shift());
		d--;
	}
	
	return a;
	
	}
	
	// JavaScript Coding Problem - Distinct Pairs
	let diffarray = [1, 5, 3, 4, 2, 11, 14, 18, 21, 35, 38, 40, 43]
	
	function distinctPairs(A,k) {  
	  const uniqueValues = new Set(A);  
	  const results = [];  
	  for (num of uniqueValues) {	
		if (uniqueValues.has(k - num)) {	  
		  results.push([num, k - num]);
		}  
	  }  
	  return results.length / 2;
	}
	
	document.write(distinctPairs(diffarray, 3))
	
	document.write("<br>");
	// JavaScript Coding Problem - Count all pairs
	let countAllPairs =[1,2,3,4]
	
	function pairs(arr) {
		var res = [],
			l = arr.length;
		for(var i=0; i<l; i++)
			for(var j=i+1; j<l; j++)
				res.push([arr[i], arr[j]]);
		return res;
	}
	pairs(countAllPairs).forEach(function(pair){
		document.write(pair+ " ");
	});
	
	pairs(countAllPairs)
	
	
	
	document.write("<br>" + "TWOSUM with Multiple answers.");
	
	
	// JavaScript Coding Problem - Distinct Solution:
	var artisty =[1, 5, 3, 4, 2]
	
	function distinctPairs(A,k) {  
	  const uniqueValues = new Set(A);  
	  const results = [];  
	  for (num of uniqueValues) {	
		if (uniqueValues.has(k - num)) {	  
		  results.push([num, k - num]);
		}  
	  }  
	  return results.length / 2;
	}
	
	document.write(distinctPairs(artisty, 3))
	
	
	document.write("<br>");
	
	
	// JavaScript Coding Problem - Largest Double Digit:
	function largestdoubledigitarray(nums) {
	let results = []
	let largest = 0
	let secondLargest = 0
	
	for (i = 0; i < nums.length; i++) {
	if (nums[i] > largest) {
	secondLargest = largest;
	largest = nums[i];
	continue;
	  } // End If Statement
	} // End for loop
	
	results.push(largest)
	results.push(secondLargest)
	return results
	
	} // End Function
	
	document.write(largestdoubledigitarray([1, 2, 3, 4]))
	// Returns 4, 3 (Largest Possible Number out of String 1234)
	
	document.write("<br>");
	
	
	// Find the largest double digit number
	// possible from a large number.
	function largestdoubledigit(nums) {
	let resultsarray = []
	let largest = 0
	let secondLargest = 0
	let str = nums.toString()
	
	for (i = 0; i < str.length; i++) {
	if (str[i] > largest) {
	secondLargest = largest;
	largest = str[i];
	continue;
	  } // End If Statement
	} // End for loop
	
	resultsarray.push(largest)
	resultsarray.push(secondLargest)
	
	// Turn array into a string and Take out the commas 
	answer = resultsarray.toString().replace(/[, ]+/g, "").trim();
	
	return answer
	} // End Function
	document.write(largestdoubledigit([1234]))
	// Returns 43 (Largest Possible Number out of String 1234)
	
	
	// Returns 4 (Largest Possible Number)
	document.write("<br>" + "Largest Number: ");
	
	function largest(nums) {
	
	let results =[]
	let largest = 0
	
	for(i=0; i < nums.length; i++) {
		if(nums[i] > largest) {
			largest = nums[i]
			continue;
		}
	}
		
		return largest
	}
	document.write(largest([1,2,3,4]))
	document.write("<br>");
	
	//  JavaScript Coding Problem Pairs
	function pairs2(arr) {
		let res = []
		for(var i=0; i<arr.length; i++) {
			for(var j=i+1; j<arr.length; j++) {
				res.push([arr[i], arr[j]]);
			}}
		return res
	}
	
	document.write(pairs2([1,2,3,4]))
	
	