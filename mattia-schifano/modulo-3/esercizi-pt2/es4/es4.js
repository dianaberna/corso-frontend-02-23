window.addEventListener("load", function() {
    const input = document.getElementById("output");
    const buttons = document.querySelectorAll("#container button");
    const scontrino = document.getElementById("scontrino");
    let operazioni = "";
  
    // pulsante per cancellare la formula
    const cancella = document.createElement("button");
    cancella.textContent = "c";
    cancella.addEventListener("click", function() {
      input.value = "";
    });
    document.getElementById("container").appendChild(cancella);
  
    // click
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        const key = button.textContent;
        if (key === "=") {
          const risultato = eval(input.value);
          operazioni += `${input.value} = ${risultato}<br>`;
          input.value = risultato;
        } else {
          input.value += key;
        }
      });
    });
  
    // evento change
    input.addEventListener("change", function() {
      const risultato = eval(input.value);
      operazioni += `${input.value} = ${risultato}<br>`;
      input.value = risultato;
    });
  
    // scontrino
    setInterval(function() {
      scontrino.innerHTML = operazioni;
    }, 100);
  });
  