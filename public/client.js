//  Food Central General Search
const url_fd = "https://api.nal.usda.gov/fdc/v1/search?api_key=4WdIvUD0RkjuanyS2VKjuIIqGOR6RkIPS4GuhyeF";
let fetchData = { 
    method: 'POST', 
    body: '{"generalSearchInput":"raw +broccoli"}', 
    headers: {
      'Content-Type': 'application/json'
    }
}
fetch(url_fd, fetchData)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>FoodData Central General Search</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Food Central API: " + error;
  });  

//  Food Central Specific Item
const url_fd2 = "https://api.nal.usda.gov/fdc/v1/321900?api_key=4WdIvUD0RkjuanyS2VKjuIIqGOR6RkIPS4GuhyeF";
fetch(url_fd2)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>FoodData Central Specific Item</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Food Central API: " + error;
  }); 

// fun translations morse code example
const BASE_URL = "https://api.funtranslations.com/translate/morse.json"; 
const url_ft = BASE_URL + "?text=Morse%20code%20is%20a%20dit%20and%20dah";

//const url = "https://randomuser.me/api/?results=10";

// fetch 
// more info here: https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
 fetch(url_ft)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>Fun Translations Morse Code</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Fun Translations API";
  });   

// fun translations yoda example
const BASE_URL2 = "https://api.funtranslations.com/translate/yoda.json";
const url_ft2 = BASE_URL2 + "?text=Scout%20is%20not%20feeling%20well";



fetch(url_ft2)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>Fun Translations Yoda Example</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Fun Translations: " + error;
  });  