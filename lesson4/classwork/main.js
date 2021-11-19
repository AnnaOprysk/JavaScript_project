// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumber(number1, number2, number3) {
//     if (number1 < number2 && number1 < number3) {
//         console.log(number1);
//     } else if (number2 < number3 && number2 < number1) {
//         console.log(number2);
//     } else {
//         console.log(number3);
//     }
// };
// minNumber(12, 34, 7);



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber(number1, number2, number3) {
//     if (number1 > number2 && number1 > number3) {
//         console.log(number1);
//     } else if (number2 > number3 && number2 > number1) {
//         console.log(number2);
//     } else {
//         console.log(number3);
//     }
// };
// maxNumber(66, 78, 23);



// - створити функцію яка повертає найбільше число з масиву


// function maxNumber(array) {
//     let max = array[0];
//     for (const number of array) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     return max;
// }
//
// console.log(maxNumber([23, 45, 6, 77, 90, 234, 12, 1, 9, 50, 22, 5, 678]));



// - створити функцію яка повертає найменьше число з масиву


// function minNumber(array ) {
//     let min = array[0];
//     for (const number of array) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }
//
// console.log(minNumber([23, 45, 6, 77, 90, 234, 12, 1, 9, 50, 22, 5, 678]));




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13


// function sumArray(array) {
//     let result =0;
//     for (let i = 0; i < array.length; i++) {
//         result+= array[i];
//     }
//     return result;
// }
// console.log(sumArray([23, 45, 6, 77, 90, 234, 12, 1, 9, 50, 22, 5, 678]));



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// function middleOfArray(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         result+= array[i]/array.length;
//     }
//     return Math.round(result);
// }
//
// console.log(middleOfArray([23, 45, 6, 77, 90, 234, 12, 1, 9, 50, 22, 5, 678]));



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function minMaxFunction(array) {
//     let min = array[0];
//     let max = array[0];
//     for (const arrayElement of array) {
//          if (arrayElement > max){
//              max = arrayElement;
//          }
//          if (arrayElement < min){
//             min = arrayElement;
//          }
//     }
//     console.log(max);
//     return min;
// }
//
// minMaxFunction([23, 45, 6, 77, 90, 234, 12, 1, 9, 50, 22, 5, 678]);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

//
// function createArray(length) {
//     let array = [];
//     for (let i = 0; i <length; i++) {
//    array.push (Math.round(Math.random () * 100));
//     }
//     return array;
// }
//
// console.log(createArray(12))



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function createArray(limit) {
//     let array = [];
//     for (let i = 0; i <10; i++) {
//    array.push (Math.round(Math.random () * limit));
//     }
//     return array;
// }
//
// console.log(createArray(30))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// function reverseArray(array) {
//     let array2 = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         array2.push (array[i]);
//     }
//     return array2;
// }
//
// console.log(reverseArray([23, 45, 6, 77, 90, 234, 12, 1, 9, 50, 22, 5, 678]));