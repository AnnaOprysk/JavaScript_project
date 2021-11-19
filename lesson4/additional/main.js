
// 1. створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.

// function oneArr(arr1,arr2) {
//     let result;
//     if (arr2 === undefined) {
//         result = arr1;
//     } else {
//         result = arr1 + arr2;
//     }
//     return  result;
// }
//
// console.log(oneArr('Anna','Red'));




// 2. створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]



// function mixArray(array1,array2) {
//     let array3 = [];
//     for (let i = 0; i < array1.length; i++) {
//      array3[i]= array1[i]+array2[i]
//     }
//     return array3;
// }
//
// console.log(mixArray([11, 3, 22, 45, 64, 3, 10, 2],[2, 4, 12, 56, 8, 1, 89, 0]));



// 3. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]



// function arrayOfObjects(array2) {
//
//     for (let array2Element of array2) {
//         for (const array2ElementKey in array2Element) {
//             console.log(array2ElementKey);
//             document.write(array2ElementKey + ", ");
//         }
//     }
//     return array2;
// }
// arrayOfObjects([{name: 'Dima', age: 18}, {model: 'Camry'},{name: 'Egor', age: 32}, {model: 'Megan'},{name: 'Roma', age: 21}, {model: 'Volvo'}
// ]);





//     4. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]



function arrayDisc(array) {
    for (let arrayElement of array) {
        for (let arrayObjectsKey in arrayElement) {
            console.log(arrayElement[arrayObjectsKey]);
            document.write(arrayElement[arrayObjectsKey] + ", ");
        }
    }
    return array;
}

arrayDisc([{name: 'Dima', age: 18},{model: 'Camry'},
    {name: 'Egor', age: 32},{model: 'Skoda'},{name: 'Roma', age: 21},{model: 'Volvo'}]);