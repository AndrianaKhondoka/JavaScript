// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};
let users = [
    new User(25, 'viktor', 'myhajlov', 'vmyhajlov72@gmail.com', '+380502157499' ),
    new User(132, 'oleg', 'baloh', 'superOhhh@gmail.com', '+380931013522' ),
    new User(8, 'tetiana', 'leus', 'tatiLEus32@gmail.com', '+380673108741' ),
    new User(94, 'olga', 'kopach', 'olya1206@ukr.net', '+380931203042' ),
    new User(55, 'lubov', 'kalynych', 'lubakalynych1111@gmail.com', '+380503815296' ),
    new User(95, 'petro', 'moroz', 'mor125288p@ukr.net', '+380662148763' ),
    new User(26, 'oleksandr', 'toroni', 'toroniALEx@gmail.com', '+380678593361' ),
    new User(7, 'mark', 'toba', 'maRk777@gmail.com', '+380507152678' ),
    new User(108, 'denis', 'bazjo', 'bazzzzjo14@ukr.net', '+380959257165' ),
    new User(1, 'serhij', 'rjabikov', 'serrjab55@gmail.com', '+380935248893' ),
];
console.log(users);
let usersSort = users.sort((user1, user2) => user1.id -user2.id);
console.log(usersSort);