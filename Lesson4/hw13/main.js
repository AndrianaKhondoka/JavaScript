function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let exchangeRate;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            exchangeRate = item;
        }
    }
    let result = sumUAH/exchangeRate.value
    return result;
};
console.log(exchange(12000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45}], 'EUR'));
console.log(exchange(12000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45}], 'USD'));