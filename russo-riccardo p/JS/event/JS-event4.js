window.addEventListener("load", function () {

    let input = document.createElement("input")
    input.setAttribute("type", "text");
    document.body.appendChild(input);

    let arrayTasti = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"]
    let stringa = ""

    for (let i = 0; i <= arrayTasti.length; i++) {
        let bottone = document.createElement("button")
        document.body.appendChild(bottone)
        bottone.textContent = arrayTasti[i];


        bottone.addEventListener("click", function () {
            if (arrayTasti[i] != "=") {
                stringa = stringa + arrayTasti[i];
                input.value = stringa;
            } else {
                // console.log(stringa)
                input.value = eval(stringa)
            }

        })

    }
    let clean = document.createElement("button")
    document.body.appendChild(clean)
    clean.textContent = "pulisci"

    clean.addEventListener("click", function () {
        input.value = ""
        stringa = ""
    })



})