// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступний вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let validName = str => str.replace("..", " ").replace("---", " ").replace("__", " ");

console.log(validName(n1));
console.log(validName(n2));
console.log(validName(n3));


//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


let random = (length, diapason) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random()* diapason));
    }
    return array;
};
let result = random(15, 100);
console.log(result);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

    result.sort((a, b) => b - a);
console.log(result);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа



let random2 = (length, diapason) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random()* diapason));
    }
    return array.filter(value => value % 2 === 0);
};

console.log(random2(15, 100));


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let random3=(length,num)=>{
    let array2 = [];
    for (let i = 0; i < length; i++) {
        array2.push(Math.round(Math.random() * num));
    }
    return array2.map(value => value.toString());
}
console.log(random3(10, 50));



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


let sortNums = (array4,direction) => {
    if (direction === 'ascending') {
        return array4.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return array4.sort((a, b) => b - a);
    }
};
console.log(sortNums([2, 5, 6, 32, 89, 0, 45, 33, 27, 76, 103], 'descending'));


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sortCourses = coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration;
});
console.log(sortCourses);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterCourses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filterCourses);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    const newArray = [];
        while (str.length) {
            newArray.push(str.substr(0, n))
            str = str.slice(n)
        }
    return newArray;
};

console.log(cutString('У скарбничці нашого народу вірші про українську мову посідають одне із найважливіших місць.', 2));