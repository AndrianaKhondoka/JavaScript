// Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function (callback){
    let arr = this;
    for (const item of arr) {
        callback (item);
    }
};
arr =[58, 22, 25, 135, 266, 88, 31, 75];
arr.myForEach((value) => console.log(`${value} - кількість відвідувачів`));

Array.prototype.myFilter = function (callback){
    let updateUsers = [];
    for (const user of this) {
        if (callback(user)) {
            updateUsers.push(user);
        }
    }
    return updateUsers;
};
let users = [
    {id: 1, name: 'Olga', age: 25},
    {id: 2, name: 'Viktor', age: 32},
    {id: 4, name: 'Emilia', age: 41},
    {id: 5, name: 'Alisa', age: 22},
    {id: 6, name: 'Nazar', age: 37},
    {id: 7, name: 'Tetyana', age: 20}
];
console.log(users.myFilter((user) => user.age > 30));

