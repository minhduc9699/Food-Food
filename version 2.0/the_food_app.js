//LINK HOMEPAGE TO RECIPEPAGE
var homeBtn = document.querySelectorAll('.go-home');
for (var i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener('click', function(){
        window.location.href = "./the_food_app.html";
    })
}

//SLIDESHOW
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("my-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

//RECENT RECIPE


//SEARCH FOR RECIPE
var searchSubmitBtn = document.querySelector('#search_box_submit');
var recentRecipe = document.querySelector('#recent-recipes');
searchSubmitBtn.addEventListener('click', setupSearch);
console.log(searchSubmitBtn);
var app_key ="13e049696e5ecdbff2fc78d4b6da8b2f";
var app_id = "71dbab0b";
function setupSearch(e) {
    e.preventDefault();
    //hide all other elements except for the header
    var hideWhenSearch = document.querySelectorAll('.hide-when-search');
    for (var i = 0; i < hideWhenSearch.length; i++) {
        hideWhenSearch[i].style.display = 'none';
    }

    //hide current search
    var hideWhenReSearch = document.querySelectorAll('.hide-when-re-search');
    for (var i = 0; i < hideWhenReSearch.length; i++) {
        hideWhenReSearch[i].style.display = 'none';
    }

    //show search result
    var searchBox = document.querySelector('#search_box');
    var searchString = searchBox.value;
    if (searchString != '') {
        fullUrl_search_recipes = `https://api.edamam.com/search?q=${searchString}&app_id=${app_id}&app_key=${app_key}&from=0&to=32`;
        console.log(fullUrl_search_recipes);
        
        fetch(fullUrl_search_recipes)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            var recipe_search_result = data.hits;
            var id_recipe_tags = [];
            for (var i = 0; i < recipe_search_result.length; i++) {
                var search_result_recipe_img = recipe_search_result[i].recipe.image;
                var search_result_recipe_title = recipe_search_result[i].recipe.label;
                var search_result_uri = recipe_search_result[i].recipe.uri;
                var id_recipe_tag = search_result_uri.split('_');
                // console.log(id_recipe_tag[1]);
                id_recipe_tags.push(id_recipe_tag[1]);
                var search_result_recipe_tag = `
                <div class = "recipe-tag">
                    <img src = "${search_result_recipe_img}" alt = "${search_result_recipe_title}">
                    <h2 class = "recipe-title search-result">${search_result_recipe_title}</h2>
                    <div class = "recipe-rating">
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                `;
                recentRecipe.insertAdjacentHTML('beforeend', search_result_recipe_tag);
            }

            //Randomly generate star ratings
            var recipeRating = document.querySelectorAll('.recipe-rating');
            // console.log(recipeRating);
            for (var i = 0; i < recipeRating.length; i++) {
                var numStars = Math.floor(Math.random()*5 + 1);
                var recipeRatingStars = recipeRating[i].children;
                console.log(recipeRatingStars);
                for (var j = 0; j < numStars; j++) {
                    recipeRatingStars[j].classList.add('checked');
                }
            }

            // console.log(id_recipe_tags);

            //link recipeTag to recipe page
            var recipeTag = document.querySelectorAll('.recipe-tag');
            for (var i = 0; i < recipeTag.length; i++) {
                var tmp_id = id_recipe_tags[i];
                recipeTag[i].addEventListener('click', function(tmp_id){
                    let ID = tmp_id;
                    localStorage.setItem('id', ID);
                    // window.location.href = './the_recipe.html'; 
                    console.log(i + " " + " " + ID);                   
                })
            }

            //add class to recipeTag to hide them when re-search
            for (var i = 0; i < recipeTag.length; i++) {
                recipeTag[i].classList.add('hide-when-re-search');
            }

            //delete search content when focus
            searchBox.addEventListener('focus', function(){
                searchBox.value = '';
            })
        })

    }
}


