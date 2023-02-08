console.log("hello from js file");

const liCombination = document.getElementsByTagName("li");

for (const li of liCombination) {
    console.log(li.innerHTML);
}

