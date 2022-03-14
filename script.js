//? Change Elements
// 1. Using JavaScript, select the h1 element inside the "hero-image" class
// 2. Change the text to say "My Hero" instead
document.querySelector(".hero-image h1").innerHTML = "My Hero";

//? Change Classes
// 3. Add the class "hero-alt" to the h1 element inside the "hero-image" class
document.querySelector(".hero-image h1").classList.add("hero-alt");

// 4. Select the element containing the id "hero"
// 5. Remove the class "fallback" on that element in step 4
document.querySelector("#hero").classList.remove("fallback");

//? Change Attributes
// 6. Add the title attribute to the element containing the id "hero" with the value of "My brave hero"
document.querySelector("#hero").setAttribute("title","My brave hero");

//? Add DOM Elements
// 7. Create an anchor element
var element = document.createElement("a");

// 8. Set the link text to "Learn More"
var link = document.createTextNode("Learn More");
element.appendChild(link);

// 9. Add the href attribute with a value of "https://www.google.com/search?q=hero"
element.href = "https://www.google.com/search?q=hero"

// 10. Add the class "link" to the anchor element
element.classList.add("link");

// 11. Add the anchor element to the DOM inside the element containing the class "hero-image"
document.querySelector(".hero-image").appendChild(element);

//? Apply inline style to an element
// 12. Using inline styling, modify the color of the anchor element to be "#d92b4b"
element.style.color = "#d92b4b";