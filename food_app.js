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


var mouseOver_outs = document.getElementsByClassName("mouseOver_out");
var mouseOver_outIndex
function mouseOver_out(){
    var mouseOver_out = mouseOver_outs[mouseOver_outIndex];
    mouseOver_out.addEventListener('mouseover', function(e){
        mouseOver_out.style.fontSize = '33px';
    });
    mouseOver_out.addEventListener('mouseout', function(e){
        mouseOver_out.style.fontSize = '30px';
    });
}
for(j = 0; j < mouseOver_outs.length; j++){
    mouseOver_out(mouseOver_outIndex = j);
}

function IconNextLeft(){
    var iconNextLefts = document.getElementsByClassName("icon-next-left");
    console.log(iconNextLefts);
    for(i = 0; i < iconNextLefts.length; i++){
        var iconNextLeft = iconNextLefts[i];
        iconNextLeft.addEventListener('click', function(e){
            console.log("done");
            showSlides(slideIndex--);
        })
    }
}

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
        var recipeHTML = `
        <div class="recent-recipes-foodname" >
           <div class="smaller-content-recipes-img" >
             <img src="${imgSrc}" class="zoom">
           </div>
           <div class="smaller-content-recipes-fix-title"><p class="zoom">${title}</p></div>
        </div>
        `;

        content.insertAdjacentHTML("afterbegin", recipeHTML);
        };
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
console.log(data);



    