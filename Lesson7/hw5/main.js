// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [
    new Client(25, 'viktor', 'myhajlov', 'vmyhajlov72@gmail.com', '+380502157499', ['chair', 'bed', 'table', 'wardrobe'] ),
    new Client(132, 'oleg', 'baloh', 'superOhhh@gmail.com', '+380931013522', ['table', 'wardrobe'] ),
    new Client(8, 'tetiana', 'leus', 'tatiLEus32@gmail.com', '+380673108741', ['chair', 'bed', 'mirror'] ),
    new Client(94, 'olga', 'kopach', 'olya1206@ukr.net', '+380931203042', ['table', 'sofa', 'mirror']),
    new Client(55, 'lubov', 'kalynych', 'lubakalynych1111@gmail.com', '+380503815296', ['wardrobe', 'chair', 'bed', 'sofa'] ),
    new Client(95, 'petro', 'moroz', 'mor125288p@ukr.net', '+380662148763', ['sofa', 'mirror', 'chair'] ),
    new Client(26, 'oleksandr', 'toroni', 'toroniALEx@gmail.com', '+380678593361', ['sideboard', 'chair', 'bed'] ),
    new Client(7, 'mark', 'toba', 'maRk777@gmail.com', '+380507152678', ['bed', 'wardrobe'] ),
    new Client(108, 'denis', 'bazjo', 'bazzzzjo14@ukr.net', '+380959257165', ['chair', 'bed', 'table', 'wardrobe', 'mirror'] ),
    new Client(1, 'serhij', 'rjabikov', 'serrjab55@gmail.com', '+380935248893', ['sofa', 'table', 'chair', 'bed'] ),
];
console.log(clients);
let clientsSort = clients.sort((cl1, cl2) => cl1.order.length -cl2.order.length);
console.log(clientsSort);