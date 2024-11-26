// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let table = document.getElementById('table');

let chart = document.forms['chart'];
console.log(chart);


chart.onsubmit = function (ev) {
    ev.preventDefault();
    let rowNum = +chart.row.value;
    let cellNum = +chart.cell.value;
    let content = chart.content.value;

    for (let a=0; a < rowNum; a++){
         const tr = document.createElement('tr');
    for (let b=0; b < cellNum; b++){
        const td = document.createElement('td');
        td.innerText = content;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    }
};
