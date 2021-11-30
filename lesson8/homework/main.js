// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//  - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"

let pText = document.getElementById("content");
console.log(pText);

// -- отримує текст з блоку з id "rules"
let divText = document.getElementById("rules");
console.log(divText);

// -- замініть текст параграфа з id 'content' на будь-який інший

pText.innerText = "АТРИБУТ (від латин. attributum — додане) — невід'ємна, необхідна для забезпечення цілісності об'єкта, суб'єкта (предмета) властивість, його частина, додаток. Атрибути - це поля даних, які відносяться до файлу, але не є його частиною.";

console.log(pText);

// -- замініть текст параграфа з id 'rules' на будь-який інший

divText.innerText = "Тег, теги, іноді теґ (англ. tag  — «іменована позначка, ярлик», читається /tæg/; більш правильна назва — дескриптор) в SGML (HTML, WML, AmigaGuide, мовах сімейства XML) — елемент мови розмітки гіпертексту. Текст, який міститься між початковим і кінцевим тегом, відтворюється і розміщується відповідно до властивостей, вказаних у початковому тезі.";

console.log(divText);

// -- змініть кожному елементу колір фону на червоний

pText.style.backgroundColor = "red";
divText.style.backgroundColor = "red";


// -- змініть кожному елементу колір тексту на синій

pText.style.color = "blue";
divText.style.color = "blue";

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// let list = document.getElementById("rules");
// console.log(list);

let getElementByIdRules = document.getElementById("rules");

console.log(getElementByIdRules.classList)


// -- поміняти колір тексту у всіх елементів fc_rules на червоний


let tagUl = document.getElementsByTagName("ul");
for (const element of tagUl) {
    element.style.color = "darkred";
    console.log(element);
}
