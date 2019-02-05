var homeBtn = document.querySelectorAll('.go-home');
for (var i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener('click', function(){
        window.location.href = "./food_app.html";
        //ERROR: 
    })
}

//MAIN PAGE
function renderTitle(content_recipes_infoss) {
    var recipeTitle = document.querySelector('#recipe-title');
    recipeTitle.textContent = content_recipes_infoss.label;

    var chefName = document.querySelector('#chef-name');
    chefName.textContent = "by " + content_recipes_infoss.source;
}
function renderImage(content_recipes_infoss) {
    var foodPic = document.querySelector('#food-pic');
    // console.log(foodPic);
    foodPic.src = content_recipes_infoss.image;
}

function renderIngredient(content_recipes_infoss) {
    var ingredients = document.querySelector('#ingredients');

    for (var i = 0; i < content_recipes_infoss.ingredients.length; i++) {
        var newLi = document.createElement('li');
        newLi.textContent = content_recipes_infoss.ingredients[i].text;
        ingredients.appendChild(newLi);
    }
}

var getID = localStorage.getItem('id');
console.log(getID);

var app_key ="13e049696e5ecdbff2fc78d4b6da8b2f";
var app_id = "71dbab0b";
function fetchRecipes2(){
    var fullUrl_recipes1 = `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${getID}&app_id=${app_id}&app_key=${app_key}`;
    console.log(fullUrl_recipes1);
    sendGetRequest(fullUrl_recipes1, function(responseDatas){
        var content_recipes_infoss = responseDatas[0];
        console.log(content_recipes_infoss);
        renderTitle(content_recipes_infoss);
        renderImage(content_recipes_infoss);
        renderIngredient(content_recipes_infoss);
    });
}

fetchRecipes2();