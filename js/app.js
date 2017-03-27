/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

document.getElementById("rating1").innerHTML = "Rating: 5 Stars"

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

var price2 = document.getElementById("price2");
price2.innerHTML = "Price: $$$";
document.getElementById("addy2").innerHTML = "Address: 525 Kapahulu Ave., Honolulu, HI 96815";

var pic = document.createElement("img");
pic.src = "http://www.simplyrecipes.com/photos/hawaiian-oxtail-soup-c.jpg";

pic1.appendChild(pic);


//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var ramenHours = document.createElement("div");
ramenHours.id = "hours3";
ramenHours.innerHTML = "Hours: 6pm - 12am Sun - Sat";
text3.appendChild(ramenHours);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

function appendToText4(type,id,inside) {
  var newThing = document.createElement("div");
  newThing.id = id;
  newThing.innerHTML = inside;
  text4.appendChild(newThing);
}
appendToText4("div","price4","Price: $$$");


/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

appendToText4("div","addy4", "Address: 1620 N. School St, Honolulu, HI 96817");


/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/
appendToText4("div","hours4","Hours: 9am - 10pm Sun - Sat");

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var kamReview = document.createElement("p");
kamReview.id = "update4";
kamReview.innerHTML = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(kamReview);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var idArray = ["name5","rating5","price5","addy5","hours5"];
var pArray = ["5. The Death Star Cafe","Rating: 2 Stars","Price: $$", "Address: A galaxy far, far away.", "Hours: We never close."];
console.log(idArray,pArray);

function appendDiv(id,string) {
  var newElement = document.createElement("div");
  newElement.id = id;
  newElement.innerHTML = string;
  text5.appendChild(newElement);
  console.log(newElement);
}


function arrayProcess(ids,strings) {
  if(ids.length === strings.length) {
    for(var i = 0;i<ids.length;i++) {
      appendDiv(ids[i],strings[i]);
    } 
  }
}

arrayProcess(idArray,pArray);

