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
    var recipe_collection1 = document.getElementById("container1");
    var recipe_collection_title_name1 = document.getElementById("header_collection1");
    recipe_collection1.addEventListener('mouseover', function(e){
        recipe_collection_title_name1.style.height = '250px';
    });
    recipe_collection_title_name1.addEventListener('mouseout', function(e){
        recipe_collection_title_name1.style.height = '0px';
    });

    var recipe_collection2 = document.getElementById("container2");
    var recipe_collection_title_name2 = document.getElementById("header_collection2");
    recipe_collection2.addEventListener('mouseover', function(e){
        recipe_collection_title_name2.style.height = '250px';
    });
    recipe_collection_title_name2.addEventListener('mouseout', function(e){
        recipe_collection_title_name2.style.height = '0px';
    });

}

// collection_title();

function setupSearch() {
    var btnSearch = document.getElementById("search_icon"); 
    btnSearch.addEventListener('click', function(e){ //khi nguoi dung click vao search
        var searchInput = document.getElementById("search_info");
        var searchString = searchInput.value;
        console.log(searchString);
        
        var app_key ="13e049696e5ecdbff2fc78d4b6da8b2f";
        var app_id = "71dbab0b";
        if(searchString != ""){
            fullUrl_recipes = `https://api.edamam.com/search?q=${searchString}&app_id=${app_id}&app_key=${app_key}&from=0&to=32`;
        };
        sendGetRequest(fullUrl_recipes, function (responseData3) {
            var page = document.getElementById("whole-page");
            //___
            var content = document.getElementById("recent-recipes");
            var DOMheaderImage = document.getElementById("header_img_slide");
            var contentBody = document.getElementById("content-body");
            console.log(page);
            DOMheaderImage.innerHTML = " "
            contentBody.style.display = "none"
            content.innerHTML = " "
            var  content_recipes_infos = responseData3.hits;
            console.log(content_recipes_infos);
            
            renderInfo(content_recipes_infos);
        })
    });
}
setupSearch();


document.addEventListener("scroll", function(event){
    var DOMimg = document.getElementById('img-header');
    var DOMheader = document.getElementById('header_container');
    if (window.scrollY > 100) {
        DOMimg.style.width = '100px';
        DOMimg.style.height = '100px';
    } else {
        DOMimg.style.width = '200px';
        DOMimg.style.height = '200px';
    }
});