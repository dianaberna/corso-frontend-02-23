console.log('versione function versione  oggetti  -----')
/*...........Function.........*/
 // listAttribute = ["id","class","href"]

function creaNodo(position, nameTag, text = "",listAttribute = {}){
    let elemento = document.createElement(nameTag);
    if(listAttribute.length != 0){
        if(listAttribute.id){
            elemento.setAttribute("id",listAttribute.id)
        }
        if(listAttribute.class){
            elemento.setAttribute("class",listAttribute.class)
        }
        if(listAttribute.href){
            elemento.setAttribute("href",listAttribute.href)
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
let mypage = creaNodo(nav,"a","My page ",{href:"mypage.html"})
let divmenu = creaNodo(nav,"div"," ",{class:"menu"})
let div2nav = creaNodo(nav,"div")

 let array = [
 {titolo:'How', href:'how.html'},
 {titolo:'Why', href:'why.html'},
 {titolo:'Home', href:'home.html'}];
 for (let i=0 ; i<array.length ; i++){
 creaNodo(div2nav,"a",array[i].titolo,{htef:array[i].href})
 }
 let header = creaNodo(document.body,"header")        //document.createElement("header");
 let divheader = creaNodo(header,"div"," ",{class:"header"})   //document.createElement("div"); 
 let titolo = creaNodo(divheader,"h1","Basic landing page for big dream")//document.createElement("h1");
 let paragrafo = creaNodo(divheader,"p","Minimal,responsive and accessibile") //document.createElement("p")
 let button = creaNodo(divheader,"button","Explore repo") //document.createElement("button")







