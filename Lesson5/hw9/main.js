let users = [
    {id: 1, name: 'Olga', age: 25},
    {id: 2, name: 'Viktor', age: 32},
    {id: 4, name: 'Emilia', age: 41},
    {id: 5, name: 'Alisa', age: 22},
    {id: 6, name: 'Nazar', age: 37},
    {id: 7, name: 'Tetyana', age: 20}
];
let userList =(users) => {
    for (let user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
};
userList(users);