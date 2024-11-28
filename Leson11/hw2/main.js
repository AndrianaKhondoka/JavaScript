// взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

const collection = document.createElement('div');
collection.classList.add('recipes-collection');

fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then(recipesObj => {
        const {recipes} = recipesObj;
        for (const recipe of recipes) {
            console.log(recipe);
            const recipeDescription = document.createElement('div');
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])){
                    const listName = document.createElement('h5');
                    listName.innerText = `${recipeKey} :`;
                    const list = document.createElement('ul');
                    const arr = recipe[recipeKey];
                    for (const element of arr) {
                        const elementList = document.createElement('li');
                        elementList.innerText = element;
                        list.appendChild(elementList);
                    }
                    recipeDescription.append(listName,list);
                }else if (recipeKey === 'id'){
                    const recipeNum = document.createElement('h3');
                    recipeNum.innerText = `Recipe №${recipe[recipeKey]}`;
                   recipeDescription.appendChild(recipeNum);
                }else if(recipeKey === 'image'){
                    const dishPhoto = document.createElement('img');
                    dishPhoto.src = recipe[recipeKey];
                   recipeDescription.appendChild(dishPhoto)
                }else if (recipeKey === 'name'){
                    const recipeName = document.createElement('h4');
                    recipeName.innerText = `${recipe[recipeKey]}`;
                   recipeDescription.appendChild(recipeName);
                }else {
                    const recipeInfo = document.createElement('p');
                    recipeInfo.innerText = `${recipeKey}: ${recipe[recipeKey]}`;
                   recipeDescription.appendChild(recipeInfo);
                }
            }
            collection.appendChild(recipeDescription);
        }
        document.body.appendChild(collection);
    });