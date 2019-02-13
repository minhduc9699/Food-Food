var homeBtn = document.querySelectorAll('.go-home');
for (var i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener('click', function(){
        window.location.href = "./food_app.html";
        //ERROR: 
    })
}

//MAIN PAGE
function renderTitle(data) {
    var recipeTitle = document.querySelector('#recipe-title');
    recipeTitle.textContent = data.label;

    var chefName = document.querySelector('#chef-name');
    chefName.textContent = "by " + data.source;
}
function renderImage(data) {
    var foodPic = document.querySelector('#food-pic');
    // console.log(foodPic);
    foodPic.src = data.image;
}

function renderIngredient(data) {
    var ingredients = document.querySelector('#ingredients');

    for (var i = 0; i < data.ingredients.length; i++) {
        var newLi = document.createElement('li');
        newLi.textContent = data.ingredients[i].text;
        ingredients.appendChild(newLi);
    }
}

var getID = localStorage.getItem('id');
console.log(getID);

var app_key ="13e049696e5ecdbff2fc78d4b6da8b2f";
var app_id = "71dbab0b";
var fullUrl_recipes1 = `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${getID}&app_id=${app_id}&app_key=${app_key}`;

fetch(fullUrl_recipes1)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
    // Create and append the li's to the ul
        var recipe_information = data[0];
        console.log(recipe_information);
        renderImage(recipe_information);
        renderIngredient(recipe_information);
        renderTitle(recipe_information);
    })

