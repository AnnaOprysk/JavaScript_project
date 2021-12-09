// 1.створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


let form = document.forms.formNew;
form.onsubmit=function (e) {
    e.preventDefault();
    let name = form.name.value;
    let age = form.age.value;
    localStorage.setItem('item', JSON.stringify({name, age}));
}


// 2.створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let autoForm = document.forms.autoForm;
autoForm.onsubmit = function (e) {
    e.preventDefault()
    let car = {model: this.model.value, type: this.type.value, volume: this.volume.value};
    let cars = JSON.parse(localStorage.getItem('cars'));
    if (!cars) {
        cars = [];
        cars.push(car);
        localStorage.setItem('cars', JSON.stringify(cars));
    } else {
        cars.push(car);
        localStorage.setItem('cars', JSON.stringify(cars));
    }
}