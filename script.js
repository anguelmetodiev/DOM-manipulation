let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

/*  Part 1
DOM's personal website title is a bit wordy.
Write a JavaScript statement that selects the #main-title ID element. 
Remember there are a couple of ways to query id. Change the text of the title to something shorter.
*/

const maintitle = document.querySelector("#main-title")
maintitle.textContent = "Dom's Club"

/*  Part 2
Select the body and change the background-color to a new color of your choice.
*/

const body = document.querySelector("body")
body.style.backgroundColor = "#40E0D0"

/*  Part 3
Select DOM's Favorite Things list and remove the last list items.
*/
const favThings = document.querySelector("#favorite-things")
favThings.removeChild(favThings.lastElementChild)
//Staring people down gets removed
console.log(favThings)

/*  Part 4
Select all .special-title class elements and change their font-size to 2rem. 
Remember you might have to iterate through the list of elements.
*/

const specialtitle = document.querySelectorAll(".special-title")
console.log(specialtitle)

for (i=0; i<specialtitle.length; i++){
  specialtitle[i].style.fontSize = "2rem"
}

/*  Part 5
Turns out DOM never raced in Chicago. 
Access the Past Races list and remove Chicago.
*/

const pastRaces = document.querySelectorAll("#past-races li")
pastRaces[3].remove()



/*  Part 6
Let's add to DOM's Past Races list. 
Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
*/

const pastracesList = document.querySelector("#past-races")
let city = document.createElement("li")
city.textContent = "Barcelona"
pastracesList.append(city)


/*  Part 7
Create a new .blog-post corresponding to the new city added in Part 6. 
You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. 
Think about what order you want to create the elements, and what order you want to append them in.
 */

function blogPost(city, text){
  let newDiv = document.createElement("div")
  let newH2 = document.createElement("h2")
  let newP = document.createElement("p")
  newDiv.classList.add("blog-post", "purple")
  newH2.textContent = city
  newP.textContent = text
  newH2.style.color = '#E42217'
  newP.style.color = 'gold'
  newDiv.append(newH2, newP)
  document.querySelector(".main").appendChild(newDiv)
  }

  blogPost('Valencia', "I raced through SPAIN!")

/*  Part 8
When you reload the page, the script.js file loads a random DOM quote. Let's play with the included function:


  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };

Query select the #quote-title ID element and add a click event handler. 
That event handler should use the function randomQuote whenever #quote-title is clicked.
*/

  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  function nextQuote(evt){
  const myQuote = document.querySelector(evt);
  myQuote.addEventListener("click", function () {
    randomQuote()
  },
    randomQuote())
  }
    nextQuote("#quote-title")

/*  Part 9
Select all .blog-post class elements. 
Iterate through the list of .blog-post class elements and apply two event handlers to each node. 
The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.
The mouseouthandler should toggle the class .purple
The mouseenterhandler should toggle the class .red

Hint:
Remember the document node property .classListand the document node method .toggle().
*/

function mouseOver(evt, color){
  let blogPost = document.querySelectorAll(evt);
  blogPost.forEach(function (post) {
    post.addEventListener("mouseout", function () {
      post.classList.toggle(color)
    })
    post.addEventListener("mouseenter", function() {
      post.classList.toggle(color)
    })
  })
}
  
mouseOver(".blog-post", "red")

