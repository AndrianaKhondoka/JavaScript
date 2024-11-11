const list = ['Leanne Graham', 'Delphine', 'html', 'привіт', 'капучино', 15, 8, true];
function items (list) {
    document.write(`<ul>`)
    for (const listElement of list) {
        document.write(`<li>${listElement}</li>`)

    }
    document.write(`</ul>`);
};
items(list);
