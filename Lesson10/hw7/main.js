// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

let sessionsList = JSON.parse(localStorage.getItem('sessionList')) || [];
sessionsList.push(Date());
localStorage.setItem('sessionList', JSON.stringify(sessionsList));

function addToLocalStorage(arrayName,objToAdd) {
    let element = localStorage.getItem(arrayName);
    if (!element){
        console.log(false);
    }
    let arr = JSON.parse(element);
    if (typeof objToAdd === 'object'){
        arr.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(arr))
}
addToLocalStorage('sessionList', {})