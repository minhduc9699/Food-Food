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

function currentSlide(n) {
  showSlides(slideIndex = n);
}

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




// var api_key = "6c43eaddf1fcf5f90698fe0511840f65";
// var url = "https://www.food2fork.com/api/search?key";
// var url2 = "https://www.food2fork.com/api/get?key"
// function fetchRecipes(){
//     var fullUrl = `${url}=${api_key}&q=egg`;
//     console.log(fullUrl);
//     sendGetRequest(fullUrl, function(responseData){
//         var recipes_data= responseData.recipes;
//         console.log(recipes_data)
//         for(i = 0; i < recipes_data.length; i++){
//             var recipes_ids = recipes_data[i].recipe_id;
//             var fullUrl2 = `${url2}=${api_key}&rId=${recipes_ids}`
//             sendGetRequest(fullUrl2, function (responseData2){
//                 console.log(responseData2);
//             })
//         }
//     });
// }

// fetchRecipes();

function IconNextLeft(){
    var iconNextLefts = document.getElementsByClassName("icon-next-left");
    console.log(iconNextLefts);
    for(i = 0; i < iconNextLefts.length; i++){
        var iconNextLeft = iconNextLefts[i];
        iconNextLeft.addEventListener('click', function(e){
            console.log("done");
            clearTimeout(currentSlide);
        })
    }
}
IconNextLeft();
