console.log("hello from dynamic.js");


// by using particular id we can give style the element whatever we want:
document.getElementById("header-info").style.backgroundColor="yellow";
document.getElementById("header-info").style.textAlign="center";


// get attribute:
let title  = document.getElementById("header-info");
console.log(title.getAttribute("class")); //it will retun all the class
// instead of class we can use any kind of attribute like id


