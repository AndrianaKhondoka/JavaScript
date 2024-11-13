let sum = (arr) => {let amount = 0;
    for (let arrElement of arr) {
        amount = amount + arrElement;
    }
    return amount;
};
console.log (sum([18, 10, 4, 74, 8, 33]));