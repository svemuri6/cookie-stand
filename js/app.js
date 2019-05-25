
// var locations =  [ 
  
//   {name :'firstAndPike',
//   min : 23,
//   max : 65,
//   average : 6.3,
// },

//  {name :SeaTacAirport,
//   min : 3,
//   max : 24,
//   average : 1.2,
// },

//   {name : 'SeattleCenter',
//   min : 11,
//   max : 38,
//   average : 3.7,
// },

//   {name : 'CapitolHill',
//   min : 20,
//   max : 38,
//   average : 2.3,
// },

//   {name: 'Alki',
//    min : 2,
//    max : 16,
//    average : 4.6,
// }
// ],

// //Uses a method of that object to generate a random number of customers per hour.
// function RandomNumber(Integer) {
//   return Math.floor(Math.random() * Math.floor(Integer));
// }
// //Creating Average no of customers
// fuction averageCustomers(a, b) {
// var average = (a + b)/2; 
// console.log(average); 
// return average; 
// }

// function printList(inputParentEl, outputChildEl, inputTextContent) { // creates a child element and inputs text within the child element based on an element ID, tag name of child, and input text
//   var getParentEl = document.getElementById(inputParentEl); // gets parent element by ID
//   var newChildEl = document.createElement(outputChildEl); // creates child element
//   newChildEl.textContent = inputTextContent; // adds text to the child element
//   getParentEl.appendChild(newChildEl); // appends the child element to the parent
//  }

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var storeHours  = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function CookieStore( mincust, maxcust, avercust){
  this.minCustomersEachHour =  mincust;
  this.maxCustomersEachHour = maxcust;
  this.averageCookiesPerCustomer = avercust;

  this.customerEachHour = [];
  this.cookiesEachHour = [];

  this.totalCookiesForTheDay = 0;

  this.getRandomCustomerNumber = function(){
    for(var i = 0; i < storeHours.length; i++){
      this.customerEachHour.push(randomNumber(mincust, maxcust));
    }
  }
  
  this.getCookiesPerHour = function(){
    for(var i = 0; i < storeHours.length; i++){
 
      var cookies = this.customerEachHour[i] * avercust;

      cookies = Math.floor(cookies);
      
      this.cookiesEachHour.push(cookies);
    }
  }

  this.getCookiesPerDay = function(){
    for(var i = 0; i < this.cookiesEachHour.length; i++){

      this.totalCookiesForTheDay += this.cookiesEachHour[i];

      console.log('Total Cookie Sales:', this.totalCookiesForTheDay);
    }
  }


}

var pikePlace = new CookieStore(23, 65, 6.3);

pikePlace.getRandomCustomerNumber();
pikePlace.getCookiesPerHour();
pikePlace.getCookiesPerDay();

console.log('Pike Place:', pikePlace);


// var pikePlace = {
//   minCustomersEachHour =  23, 
//   maxCustomersEachHour : 65, 
//   averageCookiesPerCustomer : 6.3,
//   customerEachHour : [], 
//   cookiesEachHour : [],
//   totalCookiesForTheDay : 0,
//   render:function(){
//   }
// }




