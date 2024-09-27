function controllo(stringa) {


    let caratteriSpeciali = "!?*#"

    let trovato = false;

    for (let i = 0; i < stringa.length; i++) {
        console.log(stringa[i])
        for (let j = 0; j < caratteriSpeciali.length; j++) {
            // console.log(caratteriSpeciali[j])
            if (stringa[i] == caratteriSpeciali[j]) {
                trovato = true;
            }
        }
        for (let numero = 0; numero < 10; numero++) {
            if (stringa[i] === String(numero)) {
                trovato = true
            }
        }


    }
    return trovato
}
console.log(controllo("ciao?"))


function controlloPsw(stringa) {


    let caratteriSpeciali = "!?*#"

    let trovatoNum = false;
    let trovatoChar = false

    if (stringa.length >= 10 && stringa.length <= 30) {

        for (let i = 0; i < stringa.length; i++) {
            console.log(stringa[i])
            for (let j = 0; j < caratteriSpeciali.length; j++) {
                // console.log(caratteriSpeciali[j])
                if (stringa[i] == caratteriSpeciali[j]) {

                    trovatoChar = true;
                }
            }
            for (let numero = 0; numero < 10; numero++) {
                if (stringa[i] === String(numero)) {

                    trovatoNum = true
                }
            }


        }
        if (trovatoChar == true && trovatoNum == true) {

            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
console.log(controlloPsw("!alvesalvino20ciao"))

