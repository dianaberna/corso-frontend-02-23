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

// let gruppoLiNav = document.createElement("li");

//2 gruppoLiNav.append(linkHome, linkWhy, linkHow);

//3 Array: let gruppoLiNav = document.getElementsByTagName("li")[0];

// ul.appendChild(gruppoLiNav);

// let testoHome = document.createTextNode("Home");
// let testoWhy = document.createTextNode("Why");
// let testoHow = document.createTextNode("How");

// let linkHome = document.createElement("a");
// let linkWhy = document.createElement("a");
// let linkHow = document.createElement("a");

// linkHome.appendChild(testoHome);
// linkWhy.appendChild(testoWhy);
// linkHow.appendChild(testoHow);

// gruppoLiNav.appendChild(linkHome);
// gruppoLiNav.appendChild(linkWhy);
// gruppoLiNav.appendChild(linkHow);

// RIPROVO

let gruppoLiNav1 = document.createElement("li");
let gruppoLiNav2 = document.createElement("li");
let gruppoLiNav3 = document.createElement("li");

ul.appendChild(gruppoLiNav1);
ul.appendChild(gruppoLiNav2);
ul.appendChild(gruppoLiNav3);

let testoHome = document.createTextNode("Home");
let testoWhy = document.createTextNode("Why");
let testoHow = document.createTextNode("How");

let linkHome = document.createElement("a");
let linkWhy = document.createElement("a");
let linkHow = document.createElement("a");

linkHome.appendChild(testoHome);
linkWhy.appendChild(testoWhy);
linkHow.appendChild(testoHow);

gruppoLiNav1.appendChild(linkHome);
gruppoLiNav2.appendChild(linkWhy);
gruppoLiNav3.appendChild(linkHow);
