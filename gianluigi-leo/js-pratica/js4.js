


// funzione1
function createNode(dest_position, tag, text = "", link = "") {
    let element = document.createElement(tag);
    if(text.length != 0){
       let text_el = document.createTextNode(text);
       element.appendChild(text_el);
    }
    if(link.length != 0){
        element.setAttribute("href", link);  
    }
    dest_position.appendChild(element);

    return element;
}



//Nav
let el_nav = createNode(document.body, "nav");

//Logo
createNode(el_nav, "a", "MyPage", "index.html");

//Menu
let el_ul = createNode(el_nav, "ul");
let content_menu = [
    {text: "Home", link: "index.html"},
    {text: "Why", link: "why.html"},
    {text: "How", link: "how.html"},
    ];

for(let i = 0; i < content_menu.length; i++){
    createNode(
        el_ul,
        "li",
        content_menu[i].text,
        content_menu[i].link)
}