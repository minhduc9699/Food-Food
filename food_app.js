//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    slides[slideIndex].style.left = "200px";
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function mouseOver_out(){
    var mouseOver_outs = document.getElementsByClassName("mouseOver_out");
    for(i=0; i < mouseOver_outs.length; i++){
        var mouseOver_out = mouseOver_outs[i];
        console.log(i)
        mouseOver_out.addEventListener('mouseover', function(e){
            mouseOver_out.style.fontSize = '25px';
            console.log("good")
        });
        mouseOver_out.addEventListener('mouseout', function(e){
            mouseOver_out.style.fontSize = '20px';
            console.log("good")
        });
    }
}

var api_key = "6c43eaddf1fcf5f90698fe0511840f65";
var url = "https://www.food2fork.com/api/search?key";
var url2 = "https://www.food2fork.com/api/get?key"
function fetchRecipes(){
    var fullUrl = `${url}=${api_key}&q=egg`;
    console.log(fullUrl);
    sendGetRequest(fullUrl, function(responseData){
        var recipes_data= responseData.recipes;
        console.log(recipes_data)
        for(i = 0; i < recipes_data.length; i++){
            var recipes_ids = recipes_data[i].recipe_id;
            var fullUrl2 = `${url2}=${api_key}&rId=${recipes_ids}`
            sendGetRequest(fullUrl2, function (responseData2){
                console.log(responseData2);
            })
        }
    });
}

fetchRecipes();
