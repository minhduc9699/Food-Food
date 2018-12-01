unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=apples%2Cflour%2Csugar")
.header("83449fa608msh88107c5b33f4703p1f7533jsn429242f88589", "83449fa608msh88107c5b33f4703p1f7533jsn429242f88589")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
})