let exchange = (sumUAH,currencyValues,exchangeCurrency) => {let exchangeRate;
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency){
            exchangeRate = item;
        }
    }
    return sumUAH/exchangeRate.value;
};
console.log(exchange(12000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45}], 'EUR'));
console.log(exchange(12000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45}], 'USD'));