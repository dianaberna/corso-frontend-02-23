

//Funzione 2
// esempioObject = [{
//     dest_position: "destinazione_tag",
//     tag: "nome_tag",
//     text: "testo_elemento",
//     link: "linkelemento"
//     }
// ];

function createNode(elementObject = {}){
    let element;
    let text_el;
    
    for(let i = 0; i < elementObject.length; i++){
        element = document.createElement(elementObject[i].tag);

        if(elementObject[i].text.length != 0){
            text_el = document.createTextNode(elementObject[i].text);
            element.appendChild(text_el);
         }


         if(elementObject[i].link.length != 0){
            if(elementObject[i].tag != "a"){
                let el_a = document.createElement("a")
                el_a.appendChild(text_el);
                el_a.setAttribute("href", elementObject[i].link);
                element.appendChild(el_a);

            }
            else {
                element.setAttribute("href", elementObject[i].link);  
            }
         }

         elementObject[i].dest_position.appendChild(element);
    }
    return element;
}



//nav
object_nav= [{
    dest_position: document.body,
    tag: "nav",
    text: "",
    link: ""
}];
let el_nav = createNode(object_nav);


//Logo
object_logo= [{
    dest_position: el_nav,
    tag: "a",
    text: "MyPage",
    link: "index.html"
}];
createNode(object_logo);


//Menu

//ul
object_ul= [{
    dest_position: el_nav,
    tag: "ul",
    text: "",
    link: ""
}];
let el_ul = createNode(object_ul);

object_li = [
    {dest_position: el_ul, tag: "li", text: "Home", link: "index.html"},
    {dest_position: el_ul, tag: "li", text: "Why", link: "why.html"},
    {dest_position: el_ul, tag: "li", text: "How", link: "how.html"},
];
createNode(object_li)