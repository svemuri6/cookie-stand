
var locations =  [ 
  
  {name :'firstAndPike',
  min : 23,
  max : 65,
  average : 6.3,
},

 {name :SeaTacAirport,
  min : 3,
  max : 24,
  average : 1.2,
},

  {name : 'SeattleCenter',
  min : 11,
  max : 38,
  average : 3.7,
},

  {name : 'CapitolHill',
  min : 20,
  max : 38,
  average : 2.3,
},

  {name: 'Alki',
   min : 2,
   max : 16,
   average : 4.6,
}
],

//Uses a method of that object to generate a random number of customers per hour.
function RandomNumber(Integer) {
  return Math.floor(Math.random() * Math.floor(Integer));
}
//Creating Average no of customers
fuction averageCustomers(a, b) {
var average = (a + b)/2; 
console.log(average); 
return average; 
}

function printList(inputParentEl, outputChildEl, inputTextContent) { // creates a child element and inputs text within the child element based on an element ID, tag name of child, and input text
  var getParentEl = document.getElementById(inputParentEl); // gets parent element by ID
  var newChildEl = document.createElement(outputChildEl); // creates child element
  newChildEl.textContent = inputTextContent; // adds text to the child element
  getParentEl.appendChild(newChildEl); // appends the child element to the parent
 }