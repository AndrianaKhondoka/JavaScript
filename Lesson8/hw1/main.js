// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
let user = {
    id: 15,
    name: 'Andriana',
    surname: 'Khondoka',
    age: 30,
    studentNumber() {
        console.log(`Student number:${user.id}`);
    },
    studentData() {
        console.log(`Student name: ${user.name} 
Student surname: ${user.surname}
Age: ${user.age}`);
    }
}
console.log(user);
user.studentNumber();
user.studentData();

function deepCopy(object) {
    if (object) {
        let functions = [];
        for (const key in object) {
            if (object[key] === undefined || object[key] === null || Number.isNaN(object[key])) {
              return false;
            }
            else if (typeof object[key] === 'function') {
                    const functionCopy = object[key].bind({});
                    functions.push({functionCopy,key});
            }
        }
        const clone = JSON.parse(JSON.stringify(object));
        for (const f of functions) {
            clone[f.key] = f.functionCopy;
        }
        console.log(clone);
        return clone;
        }
    return false;
        }
const newUser = deepCopy(user);
newUser.studentData();
newUser.studentNumber();