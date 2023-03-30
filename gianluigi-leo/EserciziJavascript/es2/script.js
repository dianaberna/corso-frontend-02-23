window.addEventListener("load", function(){

    //createNode
    function createNode(dest_element, tag, type, text = "", id) {

        let element = document.createElement(tag);

        if(type){
            element.setAttribute("type", type);
        }

        if(text){
            if(text.length != 0){
                let text_el = document.createTextNode(text);
                element.appendChild(text_el);
            }
        }

        if(id){
            element.setAttribute("id", id);
        }
        
        dest_element.appendChild(element);

        return element;
    }


    //Div container (Input -- button)
    let div_container = createNode(document.body, "div");
    div_container.style.display = "flex";
    div_container.style.gap = "1rem";

    //Input
    let elm_input = createNode(div_container, "input", "text");
    elm_input.value = "margin: 2rem; width: 400px; height: 400px; background-color: yellow;"    

    //Button
    let elm_button = createNode(div_container, "button", "button", "Aggiorna Stile");
    
    //DivColorato
    let elm_div = createNode(document.body, "div", "", "", "divColored");

    //Event Button
    elm_button.addEventListener("click", function(){
        
        elm_div.style = elm_input.value;

    });


})