// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let list = document.createElement('ul');
let array =  ['Main','Products','About us','Contacts'];
for (const item of array) {
    let li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
}
console.log(list);
