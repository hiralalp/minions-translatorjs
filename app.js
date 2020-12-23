


// button click
var translateButton = document.querySelector("#button");

translateButton.addEventListener("click", buttonClickHandler)

// read input
var translateInput = document.querySelector("#input");

// show output
var translateOutput = document.querySelector("#output");



var url = "https://api.funtranslations.com/translate/minion.json"



function buttonClickHandler(event) {
    
    var input = translateInput.value;
    var finalURL = constructURL(input);
    
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
    
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}
