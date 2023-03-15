console.log("sono nel file js dom");

//creo il nav
let nav = document.createElement("nav");

//appendo il nav al body
document.body.appendChild(nav);

// creo lo span mypage
let span = document.createElement("span")

//creo il testo mypage in span
let spanText = document.createTextNode("MyPage");

//appendo il testo span allo span
span.appendChild(spanText);

// appendo il link alla nav
nav.appendChild(span);

//creo il contenitore dell'elenco
let ul = document.createElement("ul");

//appendo l'ul al nav
nav.appendChild(ul);

//creo l'elenco a mano
/*let li = document.createElement("li");
let li1 = document.createElement("li");
let li2 = document.createElement("li");

//appendo i li all' ul
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
*/


//creo l'elenco con il con for
let arrayLi = ["Home", "Why", "Partner", "How"];
let li = "";
for (let i = 0; i < arrayLi.length; i++){
        li = document.createElement("li")
}
console.log(li)

//appendo i li all' ul
/ul.appendChild(li);

//creo i singoli link all'interno dell'elenco
/*let a = document.createElement("a");

//appendo l' a agli il
li.appendChild(a);

//creo i testi dell'elenco
let aText = document.createTextNode("Home", "Why", "Partner", "How");

a.appendChild(aText);*/


