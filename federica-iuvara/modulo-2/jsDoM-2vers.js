let nav = document.createElement("nav");

document.body.appendChild(nav);

let testoLink = document.createTextNode("MyPage");

let linkMyPage = document.createElement("a");

linkMyPage.appendChild(testoLink);

nav.appendChild(linkMyPage);

let ul = document.createElement("ul");

let svgBurgerMenu = document.createElement("svg");

ul.appendChild(svgBurgerMenu);

nav.appendChild(ul);

// INIZIO 
// ARRAY PER LE RIPETIZIONI

let testiNav = ["Home", "Why", "How"];
let linkNav = ["linkHome", "linkWhy", "linkHow"];

for (let i = 0; i < testiNav.length; i++) {
  let li = document.createElement("li");
  let contenutoTestiNav = document.createTextNode(testiNav[i]);
  let a = document.createElement("a");
  a.appendChild(contenutoTestiNav);
  li.appendChild(a);
  ul.appendChild(li);
}
