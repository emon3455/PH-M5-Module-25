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


