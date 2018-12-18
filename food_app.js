var slideIndex;
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
       slides[i].className = slides[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";  
    slides[slideIndex].className += " active";
    slideIndex++;
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    setTimeout(showSlides, 7000);
}

showSlides(slideIndex = 0);

function renderInfo(content_recipes_infos){
    var content = document.getElementById("recent-recipes");
    console.log(content)
    for(m = 0; m < content_recipes_infos.length; m++){
        var recipe_info = content_recipes_infos[m].recipe;
        var imgSrc = recipe_info.image;
        var title = recipe_info.label;
        var ingredients = recipe_info.ingredientLines;
        for(n = 0; n < ingredients.length; n++){
            var ingredient = ingredients[n];
        }
        var url_recipes_origin = recipe_info.url;
        var time = recipe_info.totalTime;
        var people = recipe_info.yield;
        var uri_id = recipe_info.uri;
        var id_recipe = uri_id.split('_');
        var recipeHTML = `
        <div class="recent-recipes-foodname" id="${id_recipe[1]}">
           <div class="smaller-content-recipes-img" >
             <img src="${imgSrc}" class="zoom">
           </div>
           <div class="smaller-content-recipes-fix-title"><p class="zoom">${title}</p></div>
        </div>
        `;

        content.insertAdjacentHTML("afterbegin", recipeHTML);
        };
        var recent_recipes_foodname_ids = document.getElementsByClassName("recent-recipes-foodname")
        console.log(recent_recipes_foodname_ids)
        for(m = 0; m < recent_recipes_foodname_ids.length; m++){
            recent_recipes_foodname_ids[m].addEventListener('click', function(event){
                let ID = event.path[2].getAttribute('id')
                localStorage.setItem('id', ID);
                window.location.href = './recipe_page.html';
            })
        }
};

var search_contents = ["waffle", "tart", "pancake"];
var app_key ="13e049696e5ecdbff2fc78d4b6da8b2f";
var app_id = "71dbab0b";
function fetchRecipes(){
    for(k = 0; k <search_contents.length; k++){
        var search_content = search_contents[k];
        console.log(search_content)
        var fullUrl_recipes = `https://api.edamam.com/search?q=${search_content}&app_id=${app_id}&app_key=${app_key}&from=0&to=4`;
        console.log(fullUrl_recipes);
        sendGetRequest(fullUrl_recipes, function(responseData){
            var content_recipes_infos = responseData.hits;
            console.log(content_recipes_infos);
            renderInfo(content_recipes_infos);
        });
    };
}

fetchRecipes();

function collection_title(recipe_collection_title_name){
    var recipe_collections = document.getElementsByClassName('container');
    for(i = 0; i < recipe_collections.length; i++){
        recipe_collection = recipe_collections[i];
        recipe_collection.addEventListener('mouseover', function(e){
            recipe_collection_title_name.style.height = '250px';
        });
        recipe_collection_title_name.addEventListener('mouseout', function(e){
            recipe_collection_title_name.style.height = '0px';
        });
    }
}
var recipe_collection_title_names = document.getElementsByClassName("header_collection");
console.log(recipe_collection_title_names);
for(j = 0; j < recipe_collection_title_names.length; j++){
    recipe_collection_title_name = recipe_collection_title_names[j];
    collection_title(recipe_collection_title_name);
}

