console.log('Esercizio 5 parte4----------');

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

    inputname = document.createElement('input');
    inputname.setAttribute('type', 'text');
    inputname.setAttribute('id', 'nomeInput');
    inputname.setAttribute('class', 'myinput')
    inputname.setAttribute('value', '');
    inputname.setAttribute('placeholder', 'Nome')
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
    inputcognome.setAttribute('class', 'myinput')
    inputcognome.setAttribute('value', '');
    inputcognome.setAttribute('placeholder', 'Cognome');
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
    inputemail.setAttribute('class', 'myinput')
    inputemail.setAttribute('value', '');
    inputemail.setAttribute('placeholder', 'Email');
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
    inputpassw.setAttribute('class', 'myinput')
    inputpassw.setAttribute('value', '');
    inputpassw.setAttribute('placeholder', 'Password');
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
    inputconfermapassw.setAttribute('type', 'password');
    inputconfermapassw.setAttribute('id', 'confpasswInput');
    inputconfermapassw.setAttribute('class', 'myinput')
    inputconfermapassw.setAttribute('value', '');
    inputconfermapassw.setAttribute('placeholder', 'Conferma password');
    //inputconfermapassw.setAttribute('disabled','disabled')
    form.appendChild(inputconfermapassw);
    // Creare Label per errori del input password
    let lebalErrore = document.createElement('label');
    lebalErrore.setAttribute('for', 'input');
    lebalErrore.textContent = 'Password deve contenre:'

    let brlebalErrore = document.createElement('br');
    lebalErrore.appendChild(brlebalErrore);
    form.appendChild(lebalErrore);
    //Creare div sotto lebalErrore per 
    let div1 = document.createElement('div');
    div1.setAttribute('id', 'div1');
    div1.setAttribute('class', 'red')
    div1.textContent = 'Password deve contenere almeno un carattere speciale'
    form.appendChild(div1);

    let div2 = document.createElement('div');
    div2.setAttribute('id', 'div2');
    div2.setAttribute('class', 'red')
    div2.textContent = 'Password deve contenere almeno un numero'
    form.appendChild(div2);

    let div3 = document.createElement('div');
    div3.setAttribute('id', 'div3');
    div3.setAttribute('class', 'red')
    div3.textContent = 'Password deve avere Min 10 e Max 30 caratteri'
    form.appendChild(div3);

    // Creare Input Button di submit e collegare a Form
    let inputButton = document.createElement('input');
    inputButton.setAttribute('type', 'button');
    inputButton.setAttribute('id', 'btn');
    inputButton.setAttribute('value', 'Submit form');
    form.appendChild(inputButton);


    // I condizione per Input di Nome e Cognome
    let valorenome = document.getElementById('nomeInput');
    let valorecognome = document.getElementById('cognomeInput');
    let Arraycartte = ["!", "*", "?", "#"]
    let ArreyNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    inputname.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            flag = true;
            for (let i = 0; i < valorenome.value.length; i++) {
                if (Arraycartte.includes(valorenome.value[i]) || ArreyNumber.includes(valorenome.value[i])) {
                    flag = false;
                    // break;
                }
            } if (flag) {
                valorenome.style = 'outline-color: green;background-color: #e1ffec;'
            } else {
                valorenome.value = 'errore';
                valorenome.style = 'outline-color: red;background-color: rgb(255, 211, 211);'
            }
        }


    })
    inputcognome.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            flag = true;
            for (let i = 0; i < valorecognome.value.length; i++) {
                if (Arraycartte.includes(valorecognome.value[i]) || ArreyNumber.includes(valorecognome.value[i])) {
                    flag = false;
                }
            } if (flag) {
                valorecognome.style = 'outline-color: green;background-color: #e1ffec;'
            } else {
                valorecognome.value = 'errore';
                valorecognome.style = 'outline-color: red;background-color: rgb(255, 211, 211);'
            }
        }

    })

    //I condizioni per Input di email
    let valoreEmail = document.getElementById('emailInput');
    inputemail.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            flag = true;
            for (let i = 0; i < valoreEmail.value.length; i++) {
                if (
                    valoreEmail.value.indexOf("@") < 1 ||
                    valoreEmail.value.indexOf(".") < 0 ||
                    valoreEmail.value.indexOf("@") > valoreEmail.value.lastIndexOf(".")
                ) {
                    flag = false;

                }
            } if (flag) {
                valoreEmail.style = 'outline-color: green;background-color: #e1ffec;'
            } else {
                valoreEmail.value = 'errore';
                valoreEmail.style = 'outline-color: red;background-color: rgb(255, 211, 211);'
            }
        }

    })

    //I condizioni per Input di Password
    let valorepassword = document.getElementById('passwInput')
    let valorediv1 = document.getElementById('div1')
    let valorediv2 = document.getElementById('div2')
    let valorediv3 = document.getElementById('div3')
    inputpassw.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            flagC = true; flagN = true; flagLu = true;
            for (let i = 0; i < valorepassword.value.length; i++) {
                valorepassword.style = 'outline-color: red;border-color: red;'
                if (valorepassword.value.includes(Arraycartte[i])) {
                    valorediv1.textContent = 'Password contiene carattere speciale';
                    valorepassword.style = 'outline-color: red;background-color: rgb(255, 211, 211);'
                    valorediv1.style = 'color: green'
                    flagC = true;
                    console.log(valorepassword.value)
                }
                if (valorepassword.value.includes(ArreyNumber[i])) {
                    valorediv2.textContent = 'Password contiene i numeri';
                    valorepassword.style = 'outline-color: red;background-color: rgb(255, 211, 211);'
                    valorediv2.style = 'color: green'
                    flagN = true;
                }
                if ((valorepassword.value.length >= 10 && valorepassword.value.length <= 30)) {
                    valorediv3.textContent = 'Password ha caratteri richiesti';
                    valorepassword.style = 'outline-color: red;background-color: rgb(255, 211, 211);'
                    valorediv3.style = 'color: green'
                    flagLu = true;
                } else {
                    flagC = false; flagN = false; flagLu = false;
                }


            } if (flagC && flagN && flagLu) {
                valorepassword = document.getElementById('passwInput')
                valorepassword.style = 'outline-color: green;background-color: #e1ffec;'
            } else {
                //alert('valore inserito inavlido')
                valorepassword.style = 'outline-color: red;background-color: rgb(255, 211, 211);'
            }

        }


    })

    // I condizioni per confrema password
    let valoreconfPass = document.getElementById('confpasswInput')
    inputconfermapassw.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            if (valorepassword.value === valoreconfPass.value) {
                valoreconfPass.style = 'outline-color: green;background-color: #e1ffec;'
            } else {
                alert('valore inserito inavlido')
                valoreconfPass.value = '';
                valoreconfPass.style = 'outline-color: red;background-color: rgb(255, 211, 211);'
            }
        }

    })

    // Condizioni per Form e button di submit 
    let valoreForm = document.getElementById('form')
    valoreForm.addEventListener('submit', function (e) {
        e.preventDefault()
    })








});


