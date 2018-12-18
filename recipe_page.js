var getID = localStorage.getItem('id');
console.log(getID);
function renderRecipes2(content_recipes_infoss){
    //title
    var title_recipe = document.getElementById("recipe_name_container");
    var label_recipe = content_recipes_infoss.label;
    var recipeHTML_title = `
    <div id = "recipe_name" > ${label_recipe} </div>
    `;
    title_recipe.insertAdjacentHTML("afterbegin", recipeHTML_title);

    //image
    var pic_recipe = document.getElementById("food_pic")
    var image_recipe = content_recipes_infoss.image;
    var recipeHTML_img = `
    <img class = "food_pic" src = "${image_recipe}" width="300px" height="300px">
    `;
    pic_recipe.insertAdjacentHTML("afterbegin", recipeHTML_img);

    //source
    var source_recipe = document.getElementById("source_recipe")
    var src_recipe = content_recipes_infoss.source;
    var recipeHTML_source = `
    <div class = "src-recipe">
        by ${src_recipe}
    </div>    
    `;
    source_recipe.insertAdjacentHTML("afterbegin", recipeHTML_source);

    //ingredient
    var ingre_recipe = document.getElementById("ingredient_list");
    var ingredients_recipe = content_recipes_infoss.ingredientLines;
    var serving = content_recipes_infoss.yield;
    var recipeHTML_serving =`
    <li> for ${serving} people</li><br>
    `
    ingre_recipe.insertAdjacentHTML("beforeend", recipeHTML_serving);
    for(a = 0; a < ingredients_recipe.length; a++){
        var ingredient_recipe = ingredients_recipe[a];
        var recipeHTML_ingredient = `
        <li> ${ingredient_recipe}</li><br>
        `;
        ingre_recipe.insertAdjacentHTML("beforeend", recipeHTML_ingredient);
    }
    
}

var app_key ="13e049696e5ecdbff2fc78d4b6da8b2f";
var app_id = "71dbab0b";
function fetchRecipes2(){
    var fullUrl_recipes1 = `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${getID}&app_id=${app_id}&app_key=${app_key}`;
    console.log(fullUrl_recipes1);
    sendGetRequest(fullUrl_recipes1, function(responseDatas){
        var content_recipes_infoss = responseDatas[0];
        console.log(content_recipes_infoss);
        renderRecipes2(content_recipes_infoss)
    });
}

fetchRecipes2();

var mouseOver_outs = document.getElementsByClassName("mouseOver_out");
var mouseOver_outIndex
function mouseOver_out(){
    var mouseOver_out = mouseOver_outs[mouseOver_outIndex];
    mouseOver_out.addEventListener('mouseover', function(e){
        mouseOver_out.style.fontSize = '23px';
    });
    mouseOver_out.addEventListener('mouseout', function(e){
        mouseOver_out.style.fontSize = '20px';
    });
}
for(j = 0; j < mouseOver_outs.length; j++){
    mouseOver_out(mouseOver_outIndex = j);
}

