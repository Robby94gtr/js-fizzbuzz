/* Ciao ragazzi, Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna: Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Numero push minimo: 4
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! */

// Creo for che stampi numeri da 1 a 100 

for (let i = 1; i <= 100; i++)

// Creo if per i multipli di 3 e di 5 "FizzBuzz"

if(i % 3 == 0 && i % 5 == 0){
    console.log(`FizzBuzz`);
}
    
// Creo else if per i multipli di 3 "Fizz"

else if(i % 3 == 0){
    console.log(`Fizz`);
} 

// Creo else if per i multipli di 5 "Buzz"

else if(i % 5 == 0){
    console.log(`Buzz`);
}



else {
    console.log(i)
}