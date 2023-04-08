console.log('provaok calcolatrice----------')


window.addEventListener("load", function () {

   


        
        // I numeri
        let button = document.getElementsByClassName("number");

        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener("click", function (e) {
               
                document.getElementById('display').value += (e.target.value);
                document.getElementById('span1').textContent = document.getElementById('display').value;
                console.log(document.getElementById('display').value)
            });
        }
       // Operatore uguale
        button16.addEventListener("click", function () {
            x = eval(document.getElementById("display").value);
            document.getElementById('display').value = x;
            document.getElementById('span2').textContent =  ' = ' + x
            console.log(x)
    
    
        });

        button1.addEventListener("click",function(){
            document.getElementById('display').value = ' ';
        })






})

