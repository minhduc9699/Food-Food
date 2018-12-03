var url = "https://gateway.marvel.com:443/v1/public/characters";
var publicKey ="b74e56465da3dcac4eb694a233c7a32f";
var privateKey ="c9a65e1bda14c1407b80b74038c81c88a9f9b942";

function renderCharacter(characters){
    var content = document.getElementById("content");
    content.textContent ="";

    for(var i = 0; i<characters.length; i++){
        var character = characters[i];
        var imgSrc = character.thumbnail.path + "." + character.thumbnail.extension;
        var name = character.name;
        var comicsAvailable = character.comics.available;

        var characterHTML = `
        <div>
        <img src="${imgSrc}"/>
        <h2>${name}</h2>
        <h3>Comics: ${comicsAvailable}</h3>
        <div>
        `;

        content.insertAdjacentHTML("beforeend", characterHTML);
        };
}

function fetchCharacter(){
    var key = marvelKey(privateKey, publicKey);
    var fullUrl = `${url}?${key}`;

    sendGetRequest(fullUrl, function(responseData){
        var characters = responseData.data.results;
        renderCharacter(characters);
    });
};

function setupEvents(){
    var btnSearch = document.getElementById("btn_search"); 
    btnSearch.addEventListener('click', function(e){ //khi nguoi dung click vao search
        var searchBar = document.getElementById("search_bar");
        var searchString = searchBar.nodeValue;
        var key = marvelKey(privateKey, publicKey);
        var fullUrl = `${url}?${key}`;
        if(searchString != ""){
            fullUrl += `&nameStartsWith=${searchString}`;
        }

        sendGetRequest(fullUrl, function(responseData){
            var characters = responseData.data.results;
            console.log(responseData);
            
            renderCharacter(characters);
        });
    
        sendGetRequest('data.json', function(responseData) {
            console.log(responseData);
            
        })
    });
}

fetchCharacter();
setupEvents();

