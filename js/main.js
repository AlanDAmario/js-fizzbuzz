'use strict';

//MOLTIPLICATORE DA 1 A 100 3=fizz 5=buzz//
for (let i = 1; i <= 100; ++i) {
    let x = i.toString();
    if (i % 3 === 0) {
        x = 'fizz';
    } else if (i % 5 === 0) {
        x = 'buzz';
    }
    console.log(x);
}