
var edamam_app_key = "&app_key=2658fb427c224a591a4dd3e5d4db9160"
var edemam_app_id = "&app_id=8426c0e6"

var apiCocktailRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var subBtn = document.querySelector("#subBtn")

var highProtein = document.querySelector("#high-protein")
var lowCarb = document.querySelector("#low-carb")
var lowSodium = document.querySelector("#low-sodium")

var searchBar = document.querySelector("#search-bar")

// example apiEdamam request = https://api.edamam.com/api/recipes/v2?type=public&q=chicken&health=vegan&health=vegetarian&app_key=2658fb427c224a591a4dd3e5d4db9160&app_id=8426c0e6

var exampleEda = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&health=vegan&health=vegetarian&app_key=2658fb427c224a591a4dd3e5d4db9160&app_id=8426c0e6"

/*
filter types 

&diet=[high-protein, low-carb, low-sodium] arraystring

&health=[vegan, vegetarian, paleo] arraystring

&cuisineType=[American, Asian, Indian, Mediterranean] arraystring

&mealType=[Breakfast, Lunch, Dinner] arraystring

*/

$.ajax({
    url: exampleEda,
    method: "GET"
}).then(function (response) {
    var first = response.hits[0].recipe
    console.log(first)
    var second = response.hits[1].recipe
    console.log(second)
})

function getRecipes(event){
    event.preventDefault()
    var apiEdamam = "https://api.edamam.com/api/recipes/v2?type=public"

    var searchResult = searchBar.value.trim()
    if (searchResult !== null){
        apiEdamam = apiEdamam + "&q=" + searchResult.toLowerCase()
        console.log(searchResult)
        console.log(apiEdamam + " This includes the search result")
    }

    if (highProtein.checked){
        var hpInfo = "&diet=high-protein"
        apiEdamam = apiEdamam + hpInfo
        console.log(apiEdamam + " high-protein")
    }

    if (lowCarb.checked){
        var lcInfo = "&diet=low-carb"
        apiEdamam = apiEdamam + lcInfo
        console.log(apiEdamam + " low-carb")
    }

    if (lowSodium.checked){
        var lsInfo = "&diet=low-sodium"
        apiEdamam = apiEdamam + lsInfo
        console.log(apiEdamam + " low-sodium")
    }

    apiEdamam = apiEdamam + edamam_app_key + edemam_app_id
    console.log(apiEdamam + " This is the full request with all paramaters selected")
}

subBtn.addEventListener("click", getRecipes)