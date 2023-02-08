console.log("hello from dynamic.js");


// by using particular id we can give style the element whatever we want:
document.getElementById("header-info").style.backgroundColor="yellow";
document.getElementById("header-info").style.textAlign="center";


// get attribute:
let title  = document.getElementById("header-info");
console.log(title.getAttribute("class")); //it will retun all the class
// instead of class we can use any kind of attribute like id

// set attribute:
title.setAttribute("title", "tooltip set from js");



// alternative way to get classes:(classList)
console.log(title.classList);

// if you want to add class:
title.classList.add("pb-5");
console.log(title.classList);

// if you want to remove a class:
title.classList.remove("mb-5")
console.log(title.classList);

// inner HTML:
document.getElementsByClassName("section-info")[0].innerHTML= "<h2> Hello !!!</h2>";

// inner Text:
document.getElementsByClassName("section-info")[1].innerText = "Dome change the inner text Wow Magic ...!!"


// process of adding a segment in html using js:

// step-1:(where To Add):
const mainContainer = document.getElementById("main");

// step-2:what to add:
const sectionContainer = document.createElement("section");

const headerContainer = document.createElement("h2");
headerContainer.innerText = "HTML - Hyper Text Merkup Language";
sectionContainer.appendChild(headerContainer);

const infoContainer = document.createElement("p");
infoContainer.innerText= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste officia fuga totam, distinctio sit, nobis eum maiores impedit quasi veniam ratione reiciendis. Minus perspiciatis libero labore suscipit quas iusto at magnam officiis. Deleniti harum cumque debitis ab nam laudantium praesentium, nostrum ipsa, quis aliquam repudiandae eligendi q";
sectionContainer.appendChild(infoContainer);

// step-3 add:
mainContainer.appendChild(sectionContainer);


// process-2 for adding a segment:

// step-1:(where to add)
const main = document.getElementById("main");

// step-2 what to add:
const section = document.createElement("section");

section.innerHTML= `

    <h2>
    CSS- Cascading Style Sheet
    </h2>
    <p>
    orem ipsum dolor sit amet consectetur adipisicing elit. Libero iste officia fuga totam, distinctio sit, nobis eum maiores impedit quasi veniam ratione reiciendis. Minus perspiciatis libero labore suscipit quas iusto at magnam officiis. Deleniti harum cumque debitis ab nam laudantium praesentium, nostrum ipsa, 
    </p>

 `

// step-3: add
main.appendChild(section);



