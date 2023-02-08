let sections = document.querySelectorAll("section");
// stylign bunch of elment
for (const section of sections) {
    section.style.border = "2px solid red";
    section.style.backgroundColor = "lightblue";
    section.style.margin = "1rem";
    section.style.color = "black";
    section.style.padding = "1rem";
}


// styling particular element:
let container = document.getElementById("footer-container");
container.style.backgroundColor="black";
container.style.color="white";
container.style.textAlign="center";
container.style.fontSize="2rem";


let articleHeader= document.getElementById("article-header");
articleHeader.classList.add("bg-yellow"); // it will add bg-yellow class
articleHeader.classList.remove("text-center"); // it will remove text-center class


