// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору
//  characters довжиною length.span >

//     Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function random(long, arr) {
    let numbers = [];
    for (let i = 0; i < long; i++) {
        numbers.push(arr[Math.round(Math.random() * (arr.length - 0) + 0)]);
    }
    return(numbers.join(""));
}

const key = random(13, characters);
console.log(key);