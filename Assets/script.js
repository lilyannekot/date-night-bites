var apiEdamam = "https://api.edamam.com/api/recipes/v2"
var edamam_app_key = "2658fb427c224a591a4dd3e5d4db9160"
var edemam_app_id = "8426c0e6"

var apiCocktailRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var subBtn = document.querySelector("#subBtn")

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
    console.log(exampleEda)
}

subBtn.addEventListener("click", getRecipes)