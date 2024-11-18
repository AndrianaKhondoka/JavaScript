// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
};
let users = [
        new User(1, 'viktor', 'myhajlov', 'vmyhajlov72@gmail.com', '+380502157499' ),
        new User(2, 'oleg', 'baloh', 'superOhhh@gmail.com', '+380931013522' ),
        new User(3, 'tetiana', 'leus', 'tatiLEus32@gmail.com', '+380673108741' ),
        new User(4, 'olga', 'kopach', 'olya1206@ukr.net', '+380931203042' ),
        new User(5, 'lubov', 'kalynych', 'lubakalynych1111@gmail.com', '+380503815296' ),
        new User(6, 'petro', 'moroz', 'mor125288p@ukr.net', '+380662148763' ),
        new User(7, 'oleksandr', 'toroni', 'toroniALEx@gmail.com', '+380678593361' ),
        new User(8, 'mark', 'toba', 'maRk777@gmail.com', '+380507152678' ),
        new User(9, 'denis', 'bazjo', 'bazzzzjo14@ukr.net', '+380959257165' ),
        new User(10, 'serhij', 'rjabikov', 'serrjab55@gmail.com', '+380935248893' ),
];
console.log(users);


