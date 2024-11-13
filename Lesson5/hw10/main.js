let numbers = [2, 14, 258, 99, 0, -4, 34];
let minimalValue = (numbers) => {let min = numbers[0]
    {
        for (const number of numbers) {
            if (number < min) {
                min = number;
            }
        }
    }
    return min;
    }
console.log(minimalValue(numbers));