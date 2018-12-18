function collection_title(recipe_collection_title_name){
    var recipe_collections = document.getElementsByClassName('container');
    for(i = 0; i < recipe_collections.length; i++){
        recipe_collection = recipe_collections[i];
        recipe_collection.addEventListener('mouseover', function(e){
            console.log("ahhahahasdsd");
            recipe_collection_title_name.style.height = '250px';
        });
        recipe_collection_title_name.addEventListener('mouseout', function(e){
            console.log("ahhahahasdsd");
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