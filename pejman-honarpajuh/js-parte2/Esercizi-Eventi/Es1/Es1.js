console.log("Es1")


window.addEventListener("load", function () {
    
    function getRandomnumber() {
        let a = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
            a[i] = Math.floor(Math.random() * 255);
        }
        return a
    }
    document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${[...getRandomnumber([0, 0, 0])].toString()})`;
    console.log(getRandomnumber([0, 0, 0]));
    console.log([...getRandomnumber([0, 0, 0])].toString())
    let div = document.createElement("div")
    div.setAttribute('id','number')
    document.body.appendChild(div)
    let textnumeri = document.createTextNode(`rgb(${[...getRandomnumber([0, 0, 0])].toString()})`)
    div.appendChild(textnumeri)
    stylediv().background = 'white';
    stylediv().width = '7rem';
    stylediv().height = '1.2rem';
    stylediv().margin = ' 25% auto';
    stylediv().textAlign = ' center';
   
    function stylediv(){
         divstyle = document.getElementById("number").style  
         return divstyle
    } 
       
    
})

/* function stylediv(){
    let divstyle = ["width","height","margin","textAlign"];
    for(let i=0 ; i<divstyle.length ; i++){
     let x = document.getElementById("number").style.
     x =  x.push(divstyle[i])
}
    return x
}console.log(stylediv()) */