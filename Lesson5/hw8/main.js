let list = ['Leanne Graham', 'Delphine', 'html', 'привіт', 'капучино', 15, 8, true];
let items = (list) => { document.write(`<ul>`)
    for (let listElement of list) {
        document.write(`<li>${listElement}</li>`)

    }
    document.write(`</ul>`);
};
items(list);
