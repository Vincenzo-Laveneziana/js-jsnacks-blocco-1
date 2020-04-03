/**
 * L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga.
 * Utilizza una funzione per determinare e ritornare la parola più lunga.
*/

/* inzio commento

var parola1 = prompt("Inserisci la prima parola").trim();
var parola2 = prompt("Inserisci la seconda parola").trim();

lunghezzaParola(parola1 , parola2);


function lunghezzaParola (word1, word2){

  if( word1.length > word2.length){

    console.log("La prima parola " + word1 + " è la piu lunga della seconda parola " + word2 );

  }else if(word1.length < word2.length ){

    console.log("La seconda parola " + word2 + " è la piu lunga della prima parola " + word1 );

  }else{
    console.log("Le parole sono uguali");
  } 
}

fine commento
*/ 

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
*/


/* inzio commento

var num = parseInt(prompt("Inserisci un numero"));

while ( (num < 1) || (isNaN(num))){

  num = parseInt(prompt("Inserimento errato. Reinserisci un numero"));

}

if( (num % 2) == 0){
  console.log("Il numero inserito " + num + " è pari");
} else {
  ++num;
  console.log("Il numero inserito è un numero dispari, il num successivo è " + num);
}

fine commento
*/ 



/**
 * Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) 
 * e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’),
 * Gatsby vuole generare una falsa lista di 5 invitati.
*/

/**
 * Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) 
 * e fai la somma di tutti gli elementi che sono in posizione dispari. 
 * Prova prima senza funzione e poi con funzione.
*/