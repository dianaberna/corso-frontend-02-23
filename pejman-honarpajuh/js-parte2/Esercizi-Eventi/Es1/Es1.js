console.log("Es1")


window.addEventListener("load", function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${[...getRandomnumber([0, 0, 0])].toString()})`;

    function getRandomnumber() {
        let a = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
            a[i] = Math.floor(Math.random() * 255);
        }
        return a
    }
    console.log(getRandomnumber([0, 0, 0]));
    console.log([...getRandomnumber([0, 0, 0])].toString())
    let div = document.createElement("div")
    div.setAttribute('id','number')
    document.body.appendChild(div)
    let textnumeri = document.createTextNode(`${[...getRandomnumber([0, 0, 0])].toString()}`)
    div.appendChild(textnumeri)
    document.getElementById("number").style.background = 'white';
    document.getElementById("number").style.width = '6rem';
    document.getElementById("number").style.height = '1rem';
    document.getElementById("number").style.margin = ' 25% auto';
    document.getElementById("number").style.textAlign = ' center';
   

})

