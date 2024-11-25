// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form = document.forms.form1;

let data = document.createElement('div');
document.body.appendChild(data);
form.onsubmit = function (ev) {
    ev.preventDefault();
    let userName = form.name.value;
    let userSurname = form.surname.value;
    let userAge = form.age.value;
    let userData = {userName, userSurname, userAge};
    console.log(userData);
    data.innerText = `${userData.userName}  ${userData.userSurname}  ${userData.userAge}`
}

