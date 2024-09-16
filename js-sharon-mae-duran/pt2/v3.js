let nav = document.createElement("nav");
document.body.appendChild(nav);

let testoSpan = document.createTextNode("-");
let span = document.createElement("span");
span.appendChild(testoSpan);
nav.appendChild(span);

let ul = document.createElement("ul");
nav.appendChild(ul);

let arrayLink = [
    {titolo: "Home", href: "index.html"},
    {titolo: "Why", href: "why.html"},
    {titolo: "How", href: "how.html"},
];

for (let i = 0; i < arrayLink.length; i++) {
    let li = document.createElement("li");
    let testoLink = document.createTextNode(arrayLink[i].titolo);
    let link = document.createElement("a");
    link.setAttribute("href", arrayLink[i].href);
    link.appendChild(testoLink);
    li.appendChild(link);
    ul.appendChild(li);
}

let header = document.createElement("header");
document.body.appendChild(header);
