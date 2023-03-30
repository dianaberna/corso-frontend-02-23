

//Funzione 2
// esempioObject = [{
//     dest_position: destinazione_tag,
//     var_tag: variabile_dove_viene_contenuta_la_Tag
//     tag: "nome_tag",
//     text: "testo_elemento",
//     link: "linkelemento"
//     }
// ];

function createNode(elementObject = {}){
    let text_el;

    for(let i = 0; i < elementObject.length; i++){
        elementObject[i].var_tag = document.createElement(elementObject[i].tag);

        if(elementObject[i].text.length != 0){
            text_el = document.createTextNode(elementObject[i].text);
            elementObject[i].var_tag.appendChild(text_el);
         }

         
         if(elementObject[i].link.length != 0){
            if(elementObject[i].tag != "a"){
                let el_a = document.createElement("a")
                el_a.appendChild(text_el);
                el_a.setAttribute("href", elementObject[i].link);
                elementObject[i].var_tag.appendChild(el_a);

            }
            else {
                elementObject[i].var_tag.setAttribute("href", elementObject[i].link);  
            }
         }

         elementObject[i].dest_position.appendChild(elementObject[i].var_tag);
    }
    return elementObject[i].var_tag;
}


let el_nav;
let el_logo;
let el_ul;
let el_li;

esempioObject = [
    {dest_position: document.body, var_tag: el_nav, tag: "nav", text: "", link: "linkelemento"},
    {dest_position: el_nav, var_tag: el_logo, tag: "a", text: "MyPage", link: "index.html"},
    // {dest_position: document.body, var_tag: el_nav, tag: "nav", text: "testo_elemento", link: "linkelemento"},
    
];
createNode(esempioObject);