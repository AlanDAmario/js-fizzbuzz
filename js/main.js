'use strict';

//MOLTIPLICATORE DA 1 A 100 3=fizz 5=buzz//
const list = document.querySelector('.list')


for (let i = 1; i <= 100; ++i) {
    let x = i.toString();
    // creazione del tag li <li class="fizzbuzz">fizz</li>
    const li = document.createElement('li');

    if ((i % 3 === 0) && (i % 5 === 0)) {
        x = 'fizzbuzz';
        // classe colore fizzbuzz
    } else if (i % 3 === 0) {
        x = 'fizz';
    } else if (i % 5 === 0) {
        x = 'buzz';
    }
    li.append(x);
    console.log(x);
    list.append(li);
    // append di li in list
}
