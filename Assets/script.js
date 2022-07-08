// edamam app key and id key
var edamam_app_key = "&app_key=2658fb427c224a591a4dd3e5d4db9160"
var edemam_app_id = "&app_id=8426c0e6"
//-------------------------------------------------------------------------
// thecocktaildb random cocktail request apicall
var apiCocktailRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
//-------------------------------------------------------------------------
//submit button
var subBtn = document.querySelector("#subBtn")
//-------------------------------------------------------------------------
//Diet checkboxes
var highProtein = document.querySelector("#high-protein")
var lowCarb = document.querySelector("#low-carb")
var lowSodium = document.querySelector("#low-sodium")
//-------------------------------------------------------------------------
//Health checkboxes
var vegan = document.querySelector("#vegan")
var vegetarian = document.querySelector("#vegetarian")
var paleo = document.querySelector("#paleo")
//-------------------------------------------------------------------------
//Cuisine checkboxes
var american = document.querySelector("#american")
var asian = document.querySelector("#asian")
var indian = document.querySelector("#indian")
var mediterranean = document.querySelector("#mediterranean")
//-------------------------------------------------------------------------
//Meal Type checkboxes
var breakfast = document.querySelector("#breakfast")
var lunch = document.querySelector("#lunch")
var dinner = document.querySelector("#dinner")
//-------------------------------------------------------------------------
//search bar 
var searchBar = document.querySelector("#search-bar")
//-------------------------------------------------------------------------
//

var head1 = document.querySelector("#head1")
var img1 = document.querySelector("#img1")

var head2 = document.querySelector("#head2")
var img2 = document.querySelector("#img2")

var head3 = document.querySelector("#head3")
var img3 = document.querySelector("#img3")

var head4 = document.querySelector("#head4")
var img4 = document.querySelector("#img4")

// example apiEdamam request = https://api.edamam.com/api/recipes/v2?type=public&q=chicken&health=vegan&health=vegetarian&app_key=2658fb427c224a591a4dd3e5d4db9160&app_id=8426c0e6

//var exampleEda = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&health=vegan&health=vegetarian&app_key=2658fb427c224a591a4dd3e5d4db9160&app_id=8426c0e6"

/*
filter types 

&diet=[high-protein, low-carb, low-sodium] arraystring

&health=[vegan, vegetarian, paleo] arraystring

&cuisineType=[american, asian, indian, mediterranean] arraystring

&mealType=[breakfast, lunch, dinner] arraystring

*/



function getRecipes(event){
    //prevent default on form
    event.preventDefault()
    // origin for api request
    var apiEdamam = "https://api.edamam.com/api/recipes/v2?type=public"
    //adding the search bar value to the api request
    var searchResult = searchBar.value.trim()
    if (searchResult !== null){
        apiEdamam = apiEdamam + "&q=" + searchResult.toLowerCase()
        console.log(searchResult)
        console.log(apiEdamam + " This includes the search result")
    }
//-------------------------------------------------------------------------
// If statements for Diet
    if (highProtein.checked){
        var hpInfo = "&diet=high-protein"
        apiEdamam = apiEdamam + hpInfo
        console.log(apiEdamam + " high-protein yes")
    }

    if (lowCarb.checked){
        var lcInfo = "&diet=low-carb"
        apiEdamam = apiEdamam + lcInfo
        console.log(apiEdamam + " low-carb yes")
    }

    if (lowSodium.checked){
        var lsInfo = "&diet=low-sodium"
        apiEdamam = apiEdamam + lsInfo
        console.log(apiEdamam + " low-sodium yes")
    }
//-------------------------------------------------------------------------
// If statements for Health
    if (vegan.checked){
        var veganInfo = "&health=vegan"
        apiEdamam = apiEdamam + veganInfo
        console.log(apiEdamam + " vegan yes")
    }

    if (vegetarian.checked){
        var vegetarianInfo = "&health=vegetarian"
        apiEdamam = apiEdamam + vegetarianInfo
        console.log(apiEdamam + " vegetarian yes")
    }

    if (paleo.checked){
        var paleoInfo = "&health=paleo"
        apiEdamam = apiEdamam + paleoInfo
        console.log(apiEdamam + " paleo yes")
    }
//-------------------------------------------------------------------------
// If statments for Cuisine Type
    if (american.checked){
        var americanInfo = "&cuisineType=american"
        apiEdamam = apiEdamam + americanInfo
        console.log(apiEdamam + " american yes")
    }

    if (asian.checked){
        var asianInfo = "&cuisineType=asian"
        apiEdamam = apiEdamam + asianInfo
        console.log(apiEdamam + " asian yes")
    }

    if (indian.checked){
        var indianInfo = "&cuisineType=indian"
        apiEdamam = apiEdamam + indianInfo
        console.log(apiEdamam + " indian yes")
    }

    if (mediterranean.checked){
        var mediterraneanInfo = "&cuisineType=mediterranean"
        apiEdamam = apiEdamam + mediterraneanInfo
        console.log(apiEdamam + " medit yes")
    }
//-------------------------------------------------------------------------
// If statement for Meal Type
    if (breakfast){
        var breakfastInfo = "&mealType=breakfast"
        apiEdamam = apiEdamam + breakfastInfo
        console.log(apiEdamam + " breakfast yes")
    }

    if (lunch.checked){
        var lunchInfo = "&mealType=lunch"
        apiEdamam = apiEdamam + lunchInfo
        console.log(apiEdamam + " lunch yes")
    }

    if (dinner.checked){
        var dinnerInfo = "&mealType=dinner"
        apiEdamam = apiEdamam + dinnerInfo
        console.log(apiEdamam + " dinner yes")
    }

    // adding the app_key and app_id to the end of the api request
    apiEdamam = apiEdamam + edamam_app_key + edemam_app_id
    console.log(apiEdamam + " This is the full request with all paramaters selected")

    apiEdamamCall(apiEdamam);
}

function apiEdamamCall(apiEdamam){

    $.ajax({
        url: apiEdamam,
        method: "GET"
    }).then(function (response) {

    // grabbing the first recipe name
        var firstLabel = response.hits[0].recipe.label
    // grabbing the first recipe image
        var firstImg = response.hits[0].recipe.images.REGULAR.url

        console.log("1st label" , firstLabel)
        console.log("1st img " ,firstImg)
    // grabbing the second recipe name
        var secondLabel = response.hits[1].recipe.label
    // grabbing the second recipe image
        var secondImg = response.hits[1].recipe.images.REGULAR.url
        
        console.log("2nd label", secondLabel)
        console.log("2nd img", secondImg)
        
    // grabbing the third recipe name
        var thirdLabel = response.hits[2].recipe.label
    // grabbing the third recipe image
        var thirdImage = response.hits[2].recipe.images.REGULAR.url

        console.log("3rd label",thirdLabel)
        console.log("3rd img",thirdImage)
    
    // grabbing the fourth recipe name
        var fourthLabel = response.hits[3].recipe.label
    // grabbing the fourth recipe image
        var fourthImage = response.hits[3].recipe.images.REGULAR.url

        console.log("4th label",fourthLabel)
        console.log("4th img",fourthImage)

        placeTableData(firstLabel, firstImg, secondLabel, secondImg, thirdLabel, thirdImage, fourthLabel, fourthImage);
    })

    
    
}

function placeTableData(firstLabel, firstImg, secondLabel, secondImg, thirdLabel, thirdImage, fourthLabel, fourthImage){
    head1.textContent = firstLabel
    img1.src = firstImg

    head2.textContent = secondLabel
    img2.src = secondImg

    head3.textContent = thirdLabel
    img3.src = thirdImage

    head4.textContent = fourthLabel
    img4.src = fourthImage
}


subBtn.addEventListener("click", getRecipes)