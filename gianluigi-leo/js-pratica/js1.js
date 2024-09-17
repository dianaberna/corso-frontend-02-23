let el_body = document.body;

//Nav
let el_nav = document.createElement("nav");
el_body.appendChild(el_nav);

//Logo
let text_Logo = document.createTextNode("MyPage");
let el_Logo = document.createElement("a");
el_Logo.appendChild(text_Logo);
el_nav.appendChild(el_Logo);



//Menu
let el_ul = document.createElement("ul");

//Home
let li_1 = document.createElement("li");
let a_1 = document.createElement("a");
a_1.setAttribute("href", "index.html");
let text_home = document.createTextNode("Home");
a_1.appendChild(text_home);
li_1.appendChild(a_1);
el_ul.appendChild(li_1);

//Why
let li_2 = document.createElement("li");
let a_2 = document.createElement("a");
a_2.setAttribute("href", "index.html");
let text_why = document.createTextNode("Why");
a_2.appendChild(text_why);
li_2.appendChild(a_2);
el_ul.appendChild(li_2);

//How
let li_3 = document.createElement("li");
let a_3 = document.createElement("a");
a_3.setAttribute("href", "index.html");
let text_how = document.createTextNode("How");
a_3.appendChild(text_how);
li_3.appendChild(a_3);
el_ul.appendChild(li_3);

//AppendUl
el_nav.appendChild(el_ul);
