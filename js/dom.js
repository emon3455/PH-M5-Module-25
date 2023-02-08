console.log("hello from js file");

// get elements by tag name:
const liCombination = document.getElementsByTagName("li");
for (const li of liCombination) {
    console.log(li.innerHTML);
}


// get element by ID:
let header = document.getElementById("sec-header");
console.log(header);


// get elements by class:
const  allElements = document.getElementsByClassName("list-items");
console.log(allElements);
for (const element of allElements) {
    console.log(element);
}
// it return html collections


// get element by query selector:
let element  = document.querySelector("main ul li");
// it return only the first element
console.log(element);

// get element by query slector All:
let listItems = document.querySelectorAll(".list-items");
// it return nodeList
console.log(listItems);

