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
let text_Menu = ["Home", "Why", "How"];
let link_Menu = ["index.html", "#", "#"];

for(let i = 0; i < text_Menu.length; i++){
    let li_1 = document.createElement("li");
    let a_1 = document.createElement("a");
    a_1.setAttribute("href", link_Menu[i]);
    let text_el = document.createTextNode(text_Menu[i]);
    a_1.appendChild(text_el);
    li_1.appendChild(a_1);
    el_ul.appendChild(li_1);
}


//AppendUl
el_nav.appendChild(el_ul);