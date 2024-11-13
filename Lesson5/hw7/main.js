let list = (number, text) => { document.write(`<ul>`)
    for (i = 0; i < number; i++){
        document.write(`<li>${text}</li>`);
}
    document.write(`</ul>`)
};
list(3, 'Hello!')