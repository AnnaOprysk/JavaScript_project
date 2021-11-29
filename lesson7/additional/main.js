// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class Object {

    constructor(name, username, email, address, street, suite, city, zipcode, geo, lat, lng, phone, website, company, catchPhrase, bs) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode
        };
        this.geo = {
            lat: lat,
            lng: lng
        };
        this.phone = phone;
        this.website = website;
        this.company = company;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

let first = new Object('Leanne Graham','Bret','Sincere@april.biz','address:','Kulas Light','Apt. 556','Gwenborough','92998-3874','geo:','-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org','Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
console.log(first);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//      {/*...*/},
// ]
// }


class Tag {
    constructor(titleOfTag, action, attrs,titleOfAttr,actionOfAttr,titleOfAttr1,actionOfAttr1) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [{
            titleOfAttr: titleOfAttr,
            actionOfAttr: actionOfAttr
        },
            { titleOfAttr: titleOfAttr1,
              actionOfAttr: actionOfAttr1}
        ]
    }
}

let tagA = new Tag('a','предназначен для создания ссылок','attrs:','accesskey','Активация ссылки с помощью комбинации клавиш.','href','Задает адрес документа, на который следует перейти.');
console.log(tagA);

let tagDiv = new Tag('div','предназначен для выделения фрагмента документа с целью изменения вида содержимого','attrs:','align','Задает выравнивание содержимого тега div','title','Добавляет всплывающую подсказку к содержимому.');
console.log(tagDiv);

let tagH1 = new Tag('h1','представляет собой наиболее важный заголовок первого уровня','attrs:','align','Определяет выравнивание заголовка.','class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(tagH1);

let tagSpan = new Tag('span','предназначен для определения строчных элементов документа','attrs:','hidden','Скрывает содержимое элемента от просмотра','lang','Браузер использует значение параметра для правильного отображения некоторых национальных символов.');
console.log(tagSpan);

let tagInput = new Tag('input','предназначен для создания текстовых полей, различных кнопок, переключателей и флажков','attrs:','accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.','align','Определяет выравнивание изображения.');
console.log(tagInput);

let tagForm = new Tag('form','Устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.','attrs:','action','Адрес программы или документа, который обрабатывает данные формы.','name','Имя формы.');
console.log(tagForm);

let tagOption = new Tag('option','определяет отдельные пункты списка, создаваемого с помощью контейнера select.','attrs:','label','Указание метки пункта списка.','selected','Заранее устанавливает определенный пункт списка выделенным.');
console.log(tagOption);

let tagSelect = new Tag('select',' позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором','attrs:','size','Количество отображаемых строк списка.','required','Список обязателен для выбора перед отправкой формы.');
console.log(tagSelect);