
console.log('prova------')
/*...........Nav.........*/
// creo il contenuto
let testoMypage = document.createTextNode('My page');
// let testoHow = document.createTextNode('How');
// let testoWhy = document.createTextNode('Why');
// let testoHome = document.createTextNode('Home');

// creo il tag
let mypage = document.createElement("a");
mypage.setAttribute('href','mypage.html');
let divmenu = document.createElement("div");
divmenu.setAttribute("class","menu");
let nav = document.createElement('nav')
// appendo il contenuto al tag
mypage.appendChild(testoMypage);

// tag div con lista a
let div2nav = document.createElement("div")
let array = [
{titolo:'How', link:'how.html'},
{titolo:'Why', link:'why.html'},
{titolo:'Home', link:'home.html'}];
for (let i=0 ; i<array.length ; i++){
let listA = document.createElement('a');
listA.setAttribute("href",array[i].link);
let testlistA = document.createTextNode(array[i].titolo);
listA.appendChild(testlistA);
div2nav.appendChild(listA);

}
document.body.appendChild(div2nav)

// appendo il contenuto al tag
nav.appendChild(mypage);
nav.appendChild(divmenu);
nav.appendChild(div2nav);






/*...........Header.........*/
// creo il contenuto
let testoParagrafo = document.createTextNode("Minimal,responsive and accessibile");
let testoh1 = document.createTextNode("Basic landing page for big dream");
let testobtn = document.createTextNode("Explore repo");
// creo il tag
let paragrafo = document.createElement("p");
let titolo = document.createElement("h1");
let button = document.createElement("button");
let div = document.createElement("div");
div.setAttribute("class","header");
let header = document.createElement("header");
// appendo il contenuto al tag
paragrafo.appendChild(testoParagrafo);
titolo.appendChild(testoh1);
button.appendChild(testobtn);
// appendo al div il tag h1,p,button
div.appendChild(paragrafo);
div.appendChild(titolo);
div.appendChild(button);
// appendo al header il tag div
header.appendChild(div);
// appendo al body il tag header
document.body.appendChild(nav);
document.body.appendChild(header);















