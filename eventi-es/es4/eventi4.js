// selezioniamo gli elementi della pagina
const input = document.getElementById('barra');
const numeri = document.querySelectorAll('.numero');
const operatori = document.querySelectorAll('.operatore');
const uguale = document.getElementById('uguale');

// funzione per aggiungere testo all'input
function aggiungiTesto(testo) {
  input.value += testo;
}

// funzione per calcolare il risultato dell'input
function calcolaRisultato() {
  try {
    const risultato = eval(input.value);
    input.value = risultato;
    aggiungiOperazione(input.value);
  } catch (error) {
    input.value = 'Errore';
  }
}

// funzione per aggiungere un'operazione allo scontrino
function aggiungiOperazione(testo) {
  const scontrino = document.getElementById('scontrino');
  const operazione = document.createElement('div');
  operazione.textContent = testo;
  scontrino.appendChild(operazione);
}

// aggiungiamo event listener ai pulsanti numeri e operatori
numeri.forEach(numero => {
  numero.addEventListener('click', () => {
    aggiungiTesto(numero.textContent);
  });
});

operatori.forEach(operatore => {
  operatore.addEventListener('click', () => {
    aggiungiTesto(operatore.textContent);
  });
});

// aggiungiamo event listener al pulsante uguale
uguale.addEventListener('click', calcolaRisultato);

// aggiungiamo un event listener all'input testuale
input.addEventListener('change', () => {
    aggiungiOperazione(input.value);
  });
  
  // aggiorniamo l'input e lo scontrino ogni volta che viene inserito del testo
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9+\-*/.]/g, '');
    const ultimoCarattere = input.value.slice(-1);
    if (ultimoCarattere === '+' || ultimoCarattere === '-' || ultimoCarattere === '*' || ultimoCarattere === '/') {
      input.value = input.value.slice(0, -1);
    }
    aggiungiOperazione(input.value);
  });