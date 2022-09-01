
const textQuote = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author_name");

quoteBtn.addEventListener('click',quotegenerate)

function quotegenerate() {
   // quoteBtn.classList.add("loading");

    //quoteBtn.innerText= "loading";
    //fetching data from API and parsing it into javascript
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        textQuote.innerText = data.content;
        authorName.innerText = data.author;
        quoteBtn.classList.remove("loading");
    });
}

function myFunction() {
 const element = document.body;
    element.classList.toggle("dark-mode");
}




























