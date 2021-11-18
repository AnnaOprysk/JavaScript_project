// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     let arrow = [];
//     for (let i = 1; i <=50; i++) {
//     if (i % 2 === 0) {
//         console.log(arrow[i]=i);
//     }
//     }



//     b. заповнити його 50 непарними числами за допомоги циклу.

//     let arrow = [];
// for (let i = 1; i <=50; i++) {
//     if (i % 2 !== 0) {
//         console.log(arrow[i]=i);
//     }
//     }



//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     let arrow = [];
//     for (let i = 1; i <=20; i++) {
//     arrow = [Math.random()*100];
//     console.log(arrow);
//     }


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//     let arrow = [];
//     for (let i = 1; i <=20; i++) {
//         arrow = Math.floor(Math.random() * (732-8)+8);
//             console.log(arrow);
// }


// 2. Вивести за допомогою console.log кожен третій елемент

//     let arrow = [100, 250, 50, 168, 120, 345, 188, 55, 78];
//     for (let i = 2; i < arrow.length; i+=3) {
//         console.log(arrow[i])
// }



// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

//     let arrow = [100, 250, 50, 168, 120, 345, 188, 55, 78];
//     for (let i = 2; i < arrow.length; i+=3) {
//         if (i % 2 === 0) {
//             console.log(arrow[i]);
//         }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

//     let arrow = [100, 250, 50, 168, 120, 345, 188, 55, 78];
//     let arrow2 = [];
//     for (let i = 2; i < arrow.length; i+=3) {
//         if (i % 2 === 0) {
//             arrow2 = arrow[i];
//             console.log(arrow2);
//         }
// }



// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arrow = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < 10; i++) {
//     if (arrow[i + 1] % 2 === 0) {
//         console.log(arrow[i])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arrow = [100, 250, 50, 168, 120, 345, 188];
// for (let i = 1; i <= 1; i++) {
//    arrow = (arrow[0]+arrow[1]+arrow[2]+arrow[3]+arrow[4]+arrow[5]+arrow[6])/7
//     console.log(Math.round(arrow));
// }


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//     let arrow = [];
//     let arrow2 = [];
//     for (let i = 0; i <=10; i++) {
//         arrow[i] = [Math.floor(Math.random() * 10)];
//         console.log(arrow[i]);
//         arrow2[i] = arrow[i]* 5;
//     }
//     console.log(arrow2);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

//     let arrow = [23, 1, 'red', true, 555, 'Lisa', 'round', 40, 'egg'];
//     let arrow2=[];
//     for (let arrowElement of arrow) {
//     if (typeof arrowElement==="number"){
//         arrow2=[arrowElement];
//         console.log(arrow2)
//     }
// }



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]



// let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     let user = usersWithId[i];
//     for (const address of citiesWithId) {
//         if (user.id === address.user_id){
//             user.address = address;
//         }
//     }console.log(user);
// }



//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

//     let arrow = [22, 34, 1, 31, 65, 2, 9, 244, 5, 15];
//     for (let i = 0; i < arrow.length; i++) {
//     if (arrow [i]% 2 === 0) {
//         console.log(arrow[i])
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//     let arrow = [22, 34, 1, 31, 65, 2, 9, 244, 5, 15];
//     let arrow2 = [];
//     for (let i = 0; i < arrow.length; i++) {
//     push.arrow[i] arrow2[i]
//         console.log(arrow2[i])
// }


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

//     let arrow = ['a', 'b', 'c'];
//     for (let i = 0; i < arrow.length; i++) {
//     arrow = arrow[0] +arrow[1] + arrow[2];
//     console.log(arrow)
// }


//  Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//     let arrow = ['a', 'b', 'c'];
//     let i = 0;
//     while (i < arrow.length) {
//         arrow = arrow[0] +arrow[1] + arrow[2];
//         console.log(arrow);
//         i++;
// }


//  Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arrow = ['a', 'b', 'c'];
//     for (let item of arrow) {
//         item = arrow[0] +arrow[1] + arrow[2]
//         console.log(item);
// }
