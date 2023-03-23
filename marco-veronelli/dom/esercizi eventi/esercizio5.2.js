window.addEventListener("load", function () {
  let body = document.getElementsByTagName("body")[0];
  let form = document.createElement("div");
  form.setAttribute("id", "contenitore");
  body.appendChild(form);

  ////////----CREO l'INPUT NOME-------//////////
  let inome = document.createElement("input");
  form.appendChild(inome);
  inome.setAttribute("class", "text");
  inome.setAttribute("id", "nome");
  inome.setAttribute("placeholder", "Nome");

  ////////---CREO L'INPUT COGNOME-------/////////////
  let icognome = document.createElement("input");
  form.appendChild(icognome);
  icognome.setAttribute("class", "text");
  icognome.setAttribute("id", "");
  icognome.setAttribute("placeholder", "Cognome");

  ////////////------CREO L'INPUT EMAIL-----///////////
  let iemail = document.createElement("input");
  form.appendChild(iemail);
  iemail.setAttribute("class", "text");
  iemail.setAttribute("id", "");
  iemail.setAttribute("placeholder", "Email");

  /////////-------CREO l'INPUT PASSWORD-----//////////////////
  let ipassword = document.createElement("input");
  form.appendChild(ipassword);
  ipassword.setAttribute("class", "text");
  ipassword.setAttribute("id", "");
  ipassword.setAttribute("placeholder", "Password");

  /////////-------CREO l'INPUT CONTROLLO PASSWORD-----//////////////////
  let icpassword = document.createElement("input");
  form.appendChild(icpassword);
  icpassword.setAttribute("class", "text");
  icpassword.setAttribute("id", "");
  icpassword.setAttribute("placeholder", "Ripeti la password");

  //////////-----CREO IL SUBMIT-----////////////
  let tasto = document.createElement("input");
  form.appendChild(tasto);
  let st = document.createTextNode("Submit");
  tasto.appendChild(st);
  tasto.setAttribute("id", "tasto");
  tasto.setAttribute("type", "submit");
 

  //////////-----EVENT LISTENER------/////////////////

  tasto.addEventListener("keydown", function (e) {
    console.log(e)
   if (e.key== 'Enter') { alert("enter pressed")
        
      /////-----CONTROLLO il NOME-----////////
      if (validatenome(inome.value) == true) {
        inome.classList.add("iconfirmed2");
      } else {
        inome.classList.add("ierror2");
      }

      ///////---CONTROLLO IL COGNOME-----////////

      if (validatenome(icognome.value) == true) {
        icognome.classList.add("iconfirmed2");
      } else {
        icognome.classList.add("ierror2");
      }

      //////-------VALIDO L'EMAIL-------/////////

      if (validateEmail(iemail.value) == true) {
        iemail.classList.add("iconfirmed2");
      } else iemail.classList.add("ierror2");

      ///////----VALIDO AL PASSWORD----////////

      if (validatePassword(ipassword.value) == true) {
        ipassword.classList.add("iconfirmed2");
      }
      ipassword.classList.add("ierror2");

      /////////------CONTROLLO LE PASSWORD-----////////

      if (
        validatePassword(ipassword.value) == true &&
        ipassword.value == icpassword.value
      ) {
        icpassword.classList.add("iconfirmed2");
      } else {
        icpassword.classList.add("ierror2");
      }
    }
  });
});


  ///////////////////////--------FUNZIONI--------------/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////----VALIDAZIONE NOME E COGNOME---//////////////////////////////
function validatenome(nome) {
  let lettere = ["q","w","e","r","t","y","u","i","o","p","l","k","j","h","g","f","d","s","a","z","x","c","v","b","n","m",
  "Q","W","E","R","T","Y","U","I","O","P","L","K","J","H","G","F","D","S","A","Z","X","C","V","B","N","M"
];
  let ok = false;
  for (let i = 0; i < nome.length; i++) {
    if (lettere.includes(nome[i])) {
      ok = true;
    } else {
      ok = false;
      break;
    }
  }
  if (ok == true) {
    return true;
  } else {
    return false;
  }
}
//////////////////-----VALIDAZIONE EMAIL----/////////////
function validateEmail(mail) {
  let v = false;
  let c = false;
  let sn = 0;
  let sn2 = "";

  for (let i = 0; i < mail.length; i++) {
    if (mail[i] == "@") {
      sn++;
      if (sn > 1 || sn < 1) {
        v = false;
      } else if (mail[i] == "@" && i > 0) v = true;
    }
  }
  c = true;
  for (let j = 0; j < mail.length; j++) {
    if (mail[j] == "." && j == mail.length - 1) {
      c = false;
    }
  }
  for (let p = 0; p < mail.length; p++) {
    if (mail[p] === "@" || mail[p] === ".") {
      sn2 += mail[p];
    }
  }
  if (sn2 === ".@" || sn2 === "@") {
    c = false;
  }
  if (sn2 == ".@.") {
    c = true;
  }
  if (v && c == true) {
    return true;
  } else {
    return false;
  }
}

////////////////////-----VALIDAZIONE PASSWORD----//////////////////
function validatePassword(password) {
  let caratteriObbligatori = ["!", "*", "?", "#"];
  let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i < password.length; i++) {
    if (password.length > 9) {
      if (password.length <= 30) {
        if (password.includes(numeri[i])) {
          if (password.includes(caratteriObbligatori[i])) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }
}
