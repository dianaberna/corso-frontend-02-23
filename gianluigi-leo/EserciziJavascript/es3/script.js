window.addEventListener("load", function(){

    //createNode
    function createNode(dest_element, tag, type, text = "") {

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
        dest_element.appendChild(element);

        return element;
    }



    //Div (Input - Button)
    let elm_div = createNode(document.body, "div");
    //Input
    let elm_input = createNode(elm_div, "input", "text"); 
 
    //Button
    let elm_button = createNode(elm_div, "button", "button", "Aggiungi");

    //Variabile ul;
    let elm_ul = createNode(document.body, "ul");
    
    // Event Aggiungi
    elm_button.addEventListener("click", function(){
        let elm_li = createNode(elm_ul, "li", "", elm_input.value);
        let button_elimina = createNode(elm_li, "button", "button", "Elimina");
        button_elimina.style.margin = "0.3rem";

        //Event Delete
        button_elimina.addEventListener("click", function(){
            elm_li.remove();
        });

    });


})