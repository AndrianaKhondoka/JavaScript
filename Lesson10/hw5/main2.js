let sessionList = JSON.parse(localStorage.getItem('sessionList'));

for (const element of sessionList) {
    let list = document.createElement('div');
    list.innerText = element.toString();
    document.body.appendChild(list);
}