// Chiedi all’utente il suo nome,

let nomeUtente = prompt('Qual è il tuo nome?');
nome.innerHTML = nomeUtente
// console.log('Ti chiami ' + nomeUtente );
// console.dir(nomeUtente);
// const nome = document.getElementById('nome');




// poi chiedi il suo cognome,

let cognomeUtente = prompt('Qual è il tuo cognome?');
// const cognome = 

// poi chiedi il suo colore preferito

let colorePreferito = prompt('Qual è il tuo colore preferito?')

// Infine scrivi sulla pagina nomecognomecolorepreferitoNumeroRandom

let psw = nomeUtente + cognomeUtente + colorePreferito + (Math.floor(Math.random() * 100) + 1);
console.log(psw)
console.dir(password)
password.innerHTML = psw
