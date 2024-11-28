// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

const cartsContainer = document.createElement('div');

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartsObj =>{
        const {carts} = cartsObj;
        console.log(carts);
            for (const cart of carts) {
                const cartBlock = document.createElement('div');
                cartBlock.classList.add('cart-block');
                const cartNumber = document.createElement('h3')
                const cartInfo = document.createElement('p');
                cartNumber.innerText = `cart №${cart.id}`
                cartInfo.innerText = `
                  total: ${cart.total}
                  discountedTotal: ${cart.discountedTotal}
                  userId: ${cart.userId}
                  totalProducts: ${cart.totalProducts}
                  totalQuantity: ${cart.totalQuantity}`;
                const list = document.createElement('ul');
                for (const product of cart.products) {
                    const productType = document.createElement('li');
                    const productInfo = document.createElement('p');
                    const productImg = document.createElement('img');
                    productImg.src = product.thumbnail;
                    productInfo.innerText = `
                      id: ${product.id}
                      title: ${product.title}
                      price: ${product.id}
                      quantity: ${product.price}
                      total: ${product.total}
                      discountPercentage: ${product.discountPercentage}
                      discountedTotal: ${product.discountedTotal}`;
                    // const productContainer = document.createElement('div');

                    productType.append(productImg,productInfo);
                    list.appendChild(productType);
                }
                cartBlock.append(cartNumber,cartInfo,list);
                cartsContainer.appendChild(cartBlock);
            }
        document.body.appendChild(cartsContainer);
});