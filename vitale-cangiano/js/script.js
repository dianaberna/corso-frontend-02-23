let array = [1, 2, 3, -4, -5, 6, 7, 8, 9];
console.log(array);
for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
}
let arrayNegativo = [];
let cont = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        arrayNegativo[cont] = array[i];
        cont++;

    }
}
console.log(arrayNegativo);

let buttone = document.querySelector('button');
let title = document.querySelector('h1');
let numero = document.querySelector('input');
/*function saluta(number){
    let res = Number(number) + Number(number);
    console.log(res);
    return res;
    title.innerHTML='ciao vito';
}*/
buttone.addEventListener('click', () => {

    title.innerHTML = 'controllo mail = ' + validEmail(numero.value);
})

// es 102 zampe animali


function contaZampe(polli, mucche, maiali) {
    return (polli * 2) + (maiali * 4) + (mucche * 4);
}
console.log("le zampe sono: " + contaZampe(3, 2, 2));

// es 111 validitare una email
function validEmail(email) {
    if (!email.includes("@")) {

        return "none una email valida";
    }
    console.log("posizione @ = " + email.indexOf("@"));
    console.log("posizione @ = " + email.length);
    if (email.indexOf("@") == 0) {
        return "none una email valida nn ce niente prima della chiocciola";
    }
    if (!email.includes(".")) {
        return "none una email valida amnca il .";
    }
    console.log("posizione . = " + email.indexOf("."));
    if (email.indexOf(".") <= (email.indexOf("@") + 1)) {
        return "none una email valida @ e . sbagliati";
    }
    if (email.indexOf(".") == (email.length - 1)) {
        return "non e una email valida deve starci qualcosa dopo il .";
    }
    return "email Valida";



}
console.log(validEmail(numero.value));
