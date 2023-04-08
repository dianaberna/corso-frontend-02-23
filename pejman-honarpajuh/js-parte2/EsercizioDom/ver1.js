console.log('versione function ------')
/*...........Function.........*/
 // listAttribute = ["id","class","href"]

function creaNodo(position, nameTag, text = "",listAttribute = []){
    let elemento = document.createElement(nameTag);
    if(listAttribute.length != 0){
        if(listAttribute[0]){
            elemento.setAttribute("id",listAttribute[0])
        }
        if(listAttribute[1]){
            elemento.setAttribute("class",listAttribute[1])
        }
        if(listAttribute[2]){
            elemento.setAttribute("href",listAttribute[2])
        }
    }
    position.appendChild(elemento);
    if(text.length != 0){
        let textelement = document.createTextNode(text);
        elemento.appendChild(textelement)
    }
    return elemento
}

let nav = creaNodo(document.body,"nav")
let mypage = creaNodo(nav,"a","My page ",["","","mypage.html"])
let divmenu = creaNodo(nav,"div"," ",["","menu"])
let div2nav = creaNodo(nav,"div")

 let array = [
 {titolo:'How', href:'how.html'},
 {titolo:'Why', href:'why.html'},
 {titolo:'Home', href:'home.html'}];
 for (let i=0 ; i<array.length ; i++){
 creaNodo(div2nav,"a",array[i].titolo,["","",array[i].href])
 }
 let header = creaNodo(document.body,"header")        //document.createElement("header");
 let divheader = creaNodo(header,"div"," ",["","header"])   //document.createElement("div"); 
 let titolo = creaNodo(divheader,"h1","Basic landing page for big dream")//document.createElement("h1");
 let paragrafo = creaNodo(divheader,"p","Minimal,responsive and accessibile") //document.createElement("p")
 let button = creaNodo(divheader,"button","Explore repo") //document.createElement("button")







