const users = [
    {name: "Leanne Graham", username: "Bret", password: "Lea1999T"},
    {name: "Ervin Howell", username: "Antonette", password: "1212rS"},
    {name: "Clementine Bauch", username: "Samantha", password: "SAm0001988"},
    {name: "Patricia Lebsack", username: "Karianne", password: "Viktory123"},
    {name: "Chelsey Dietrich", username: "Kamren", password: "KDietrich0000"},
    {name: "Dennis Schulist", username: "Leopoldo_Corkery", password: "cook75"},
    {name: "Kurtis Weissnat", username: "Elwyn.Skiles", password: "Sk1488882"},
    {name: "Nicholas Runolfsdottir", username: "Maxime_Nienow", password: "max771155"},
    {name: "Glenna Reichert", username: "Delphine", password: "54428330glenna"},
    {name: "Clementina DuBuque", username: "Moriah.Stanton", password: "27121980"},
];
const usersFilter = (users) => {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
};
usersFilter(users);
