console.log('versione function versione completo oggetti  -----')
/*...........Function.........*/
 // listAttribute = ["id","class","href"]

function creaNodo({ position, nameTag, text = "",listAttribute = {} }){
    let elemento = document.createElement(nameTag);
    if(listAttribute.length != 0){
        if(listAttribute.id){
            elemento.setAttribute("id",listAttribute.id);
        }
        if(listAttribute.class){
            elemento.setAttribute("class",listAttribute.class);
        }
        if(listAttribute.href){
            elemento.setAttribute("href",listAttribute.href);
        }
    }
    position.appendChild(elemento);
    if(text.length != 0){
        let textelement = document.createTextNode(text);
        elemento.appendChild(textelement)
    }
    return elemento
}

let nav = creaNodo({
    position:document.body,
    nameTag:"nav"});
let mypage = creaNodo({
    position:nav,nameTag:"a",
    text:"My page ",
    listAttribute:{href:"mypage.html"}});
let divmenu = creaNodo({
    position:nav,nameTag:"div",
    listAttribute:{class:"menu"}});
let div2nav = creaNodo({
    position:nav,
    nameTag:"div"});

 let array = [
 {titolo:'How', href:'how.html'},
 {titolo:'Why', href:'why.html'},
 {titolo:'Home', href:'home.html'}];
 for (let i=0 ; i<array.length ; i++){
 creaNodo({
    position:div2nav,nameTag:"a",
    text:array[i].titolo,
    listAttribute:{htef:array[i].href}});
 }
 let header = creaNodo({
    position:document.body,
    nameTag:"header"});        //document.createElement("header");
 let divheader = creaNodo({
    position:header,
    nameTag:"div",
    listAttribute:{class:"header"}});   //document.createElement("div"); 
 let titolo = creaNodo({
    position:divheader,
    nameTag:"h1",
    text:"Basic landing page for big dream"});//document.createElement("h1");
 let paragrafo = creaNodo({
    position:divheader,
    nameTag:"p",
    text:"Minimal,responsive and accessibile"}); //document.createElement("p")
 let button = creaNodo({
    position:divheader,
    nameTag:"button",
    text:"Explore repo"}); //document.createElement("button")







