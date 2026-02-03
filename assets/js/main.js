/*
Scrivi un programma che stampi i numeri da 1 a 100,
- per i multipli di 3 stampi Fizz al posto del numero
- per i multipli di 5 stampi Buzz
- per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
*/

// Soluzione cambiando l'ordine delle condizioni

for ( let i = 1; i <= 100; i++ ) {

    // se l'indice è divisibile sia per 3 che per 5
    if (i % 3 == 0 && i % 5 == 0) {

        console.log('FizzBuzz')

    // altrimenti se è divisibile per 3
    } else if (i % 3 == 0) {

        console.log('Fizz')

    // altrimenti se è divisibile per 5
    } else if (i % 5 == 0) {

        console.log('Buzz');

    // altrimenti
    } else {

        console.log(i)

    }

}

// Soluzione con operatore relazionale di diversità, l'ordine delle condizioni non influisce sul risultato

for ( let i = 1; i <= 100; i++ ) {

    // se l'indice è divisibile per 3 e se l'indice non è divisibile per 5
    if (i % 3 == 0 && i % 5 != 0 ) {

        console.log('Fizz')

    // se l'indice è divisibile per 5 e se l'indice non è divisibile per 3
    } else if (i % 5 == 0 && i % 3 != 0) {

        console.log('Buzz')

    // se l'indice è divisibile sia per 3 che per 5
    } else if (i % 3 == 0 && i % 5 == 0) {

        console.log('FizzBuzz');

    } else {

        console.log(i)

    }

}