console.log('Esercizio 5 parte2----------');

window.addEventListener("load", function () {
    // Div contenitore collegato a Body
    let divcontenitore = document.createElement('div');
    divcontenitore.setAttribute('id', 'conteiner');
    //divcontenitore.style = ' width: 600px; height: 26rem; margin: 0 auto; border: 1px solid rgba(100, 92, 92,0.5) ';
    document.body.appendChild(divcontenitore);

    // Creare Form 
    let form = document.createElement('form');
    form.setAttribute('id', 'form');
    divcontenitore.appendChild(form);
    // Creare Input e lebal per nome nel form
    let lebalname = document.createElement('label');
    lebalname.setAttribute('for', 'input');
    lebalname.textContent = 'Nome';

    let brname = document.createElement('br');
    lebalname.appendChild(brname);
    form.appendChild(lebalname);

    let inputname = document.createElement('input');
    inputname.setAttribute('type', 'text');
    inputname.setAttribute('id', 'nomeInput');
    inputname.setAttribute('class', 'myinput error conferm')
    inputname.setAttribute('value', '');
    inputname.setAttribute('placeholder','Nome')
    form.appendChild(inputname);
    // Creare Input e lebal per Cognome nel form
    let lebalcognome = document.createElement('label');
    lebalcognome.setAttribute('for', 'input');
    lebalcognome.textContent = 'Cognome';

    let brcognome = document.createElement('br');
    lebalcognome.appendChild(brcognome);
    form.appendChild(lebalcognome);

    let inputcognome = document.createElement('input');
    inputcognome.setAttribute('type', 'text');
    inputcognome.setAttribute('id', 'cognomeInput');
    inputcognome.setAttribute('class', 'myinput error conferm')
    inputcognome.setAttribute('value', '');
    inputcognome.setAttribute('placeholder','Cognome');
    form.appendChild(inputcognome);
    // Creare Input e lebal del  Email nel Form
    let lebal = document.createElement('label');
    lebal.setAttribute('for', 'input');
    lebal.textContent = 'Email';

    let bremail = document.createElement('br');
    lebal.appendChild(bremail);
    form.appendChild(lebal);

    let inputemail = document.createElement('input');
    inputemail.setAttribute('type', 'text');
    inputemail.setAttribute('id', 'emailInput');
    inputemail.setAttribute('class', 'myinput error conferm')
    inputemail.setAttribute('value', '');
    inputemail.setAttribute('placeholder','Email');
    //inputemail.setAttribute('disabled','disabled')
    form.appendChild(inputemail);

    // Creare Input e lebal del  Password nel Form
    let lebalpassw = document.createElement('label');
    lebalpassw.setAttribute('for', 'input');
    lebalpassw.textContent = 'Password';

    let brpassw = document.createElement('br');
    lebalpassw.appendChild(brpassw);
    form.appendChild(lebalpassw);

    let inputpassw = document.createElement('input');
    inputpassw.setAttribute('type', 'text');
    inputpassw.setAttribute('id', 'passwInput');
    inputpassw.setAttribute('class', 'myinput error conferm')
    inputpassw.setAttribute('value', '');
    inputpassw.setAttribute('placeholder','Password');
    //inputpassw.setAttribute('disabled','disabled')
    form.appendChild(inputpassw);

    // Creare Input e lebal del conferma Password nel Form
    let lebalconfermapassw = document.createElement('label');
    lebalconfermapassw.setAttribute('for', 'input');
    lebalconfermapassw.textContent = 'Conferma Password';

    let brconfermapassw = document.createElement('br');
    lebalconfermapassw.appendChild(brconfermapassw);
    form.appendChild(lebalconfermapassw);

    let inputconfermapassw = document.createElement('input');
    inputconfermapassw.setAttribute('type', 'text');
    inputconfermapassw.setAttribute('id', 'confpasswInput');
    inputconfermapassw.setAttribute('class', 'myinput error conferm')
    inputconfermapassw.setAttribute('value', '');
    inputconfermapassw.setAttribute('placeholder','Conferma password');
    //inputconfermapassw.setAttribute('disabled','disabled')
    form.appendChild(inputconfermapassw);

    // I condizione per Input di Nome e Cognome
    let valorenome = document.getElementById('nomeInput');
    let valorecognome = document.getElementById('cognomeInput');
    let Arraycartte =["!","*","?","#"]
    inputname.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            for (let i = 0; i < valorenome.value.length; i++) {
              if(Arraycartte.includes(valorenome.value[i])){
                console.log('errore')
                valorenome.value = 'errore';
                valorenome.style = 'outline-color: red;border-color: red;'
              }
            }
        }

    })
    inputcognome.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            for (let i = 0; i < valorecognome.value.length; i++) {
              if(Arraycartte.includes(valorecognome.value[i])){
                console.log('errore')
                valorecognome.value = 'errore';
                valorecognome.style = 'outline-color: red;border-color: red;'
              }
            }
        }

    })
     // I condizione per Input di Email





     
/*      function validareEmail(email) {
        if (
            email.indexOf("@") < 1 ||
            email.indexOf(".") < 0 ||
            email.indexOf("@") > email.lastIndexOf(".")
        )
            return false;
        return true;
    }
 */


 

});
