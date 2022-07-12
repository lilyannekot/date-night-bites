var todayDate = moment().format('dddd, MMM Do YYYY');
$("#todayDate").html(todayDate);

//Table function
var createTable = (row, col) => {
    
    var tableBody = document.body
    var tableMain = document.createElement("table")
//for loop to insert rows and columns
    for (i = 0; i < row; i++) {
        var tblRow = tableMain.insertRow()
        for (x = 0; x < col; x++) {

            //applying a unique id to the cells and class to rows
            var rowName = "row" + i + x
            var cellName = "cell" + i + x
            var buttonName = "btn" + x
            
            var buttonPointer = document.createElement("button")
            var tblCell = tblRow.insertCell()
             if (i == 1) {
                 var object = tblCell.appendChild(buttonPointer)
                 object.appendChild(document.createTextNode("Learn More"))
                 buttonPointer.setAttribute("id", buttonName)
           }
            tblCell.style.border = "2px solid gray"
            tblCell.setAttribute("id", cellName)
            tblRow.setAttribute("class", rowName)

            tableBody.appendChild(tableMain)
            document.getElementById("table-container").appendChild(tableMain)
        }
    }
    
    createTableTags();
}

function createTableTags(){
    var cell1 = document.querySelector("#cell00")
    var cell2 = document.querySelector("#cell01")
    var cell3 = document.querySelector("#cell02")
    var cell4 = document.querySelector("#cell03")

    var cellHead = document.createElement("h2")
    cellHead.textContent = ""
    cellHead.setAttribute("id", "cell1-head")
    cell1.appendChild(cellHead)
    var cellImg = document.createElement("img")
    cellImg.setAttribute("id", "cell1-img")
    cellImg.setAttribute("src", "")
    cell1.appendChild(cellImg)

    var cellHead2 = document.createElement("h2")
    cellHead2.textContent = ""
    cellHead2.setAttribute("id", "cell2-head")
    cell2.appendChild(cellHead2)
    var cellImg2 = document.createElement("img")
    cellImg2.setAttribute("id", "cell2-img")
    cellImg2.setAttribute("src", "")
    cell2.appendChild(cellImg2)

    var cellHead3 = document.createElement("h2")
    cellHead3.textContent = ""
    cellHead3.setAttribute("id", "cell3-head")
    cell3.appendChild(cellHead3)
    var cellImg3 = document.createElement("img")
    cellImg3.setAttribute("id", "cell3-img")
    cellImg3.setAttribute("src", "")
    cell3.appendChild(cellImg3)

    var cellHead4 = document.createElement("h2")
    cellHead4.textContent = ""
    cellHead4.setAttribute("id", "cell4-head")
    cell4.appendChild(cellHead4)
    var cellImg4 = document.createElement("img")
    cellImg4.setAttribute("id", "cell4-img")
    cellImg4.setAttribute("src", "")
    cell4.appendChild(cellImg4)
}

//amount of (rows, columns)
createTable(2, 4)

// edamam app key and id key
var edamam_app_key = "&app_key=2658fb427c224a591a4dd3e5d4db9160"
var edemam_app_id = "&app_id=8426c0e6"
//-------------------------------------------------------------------------

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
//Table Ids for content to be added 

var head1 = document.querySelector("#cell1-head")
var img1 = document.querySelector("#cell1-img")

var head2 = document.querySelector("#cell2-head")
var img2 = document.querySelector("#cell2-img")

var head3 = document.querySelector("#cell3-head")
var img3 = document.querySelector("#cell3-img")

var head4 = document.querySelector("#cell4-head")
var img4 = document.querySelector("#cell4-img")
//-------------------------------------------------------------------------
// Cocktail div Ids

var cocktailImage = document.querySelector("#cocktail-img")

var cocHead = document.querySelector("#divHead")
var cocCat = document.querySelector("#one")
var cocIMA = document.querySelector("#two")
var cocHelp = document.querySelector("#three")
//-------------------------------------------------------------------------
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

    cocktailReset();

    // thecocktaildb random cocktail request apicall
    var apiCocktailRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
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
// If statements for Cuisine Type
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
// If statements for Meal Type
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

    apiCocktailCall(apiCocktailRandom);
    apiEdamamCall(apiEdamam);
    
}

function apiEdamamCall(apiEdamam){

    $.ajax({
        url: apiEdamam,
        method: "GET"
    }).then(function (response) {
        //validator for the web page
        var valid = response.to

        var noFood = "https://i.ebayimg.com/images/g/uuoAAOSw5wVdSXc0/s-l500.png"

        console.log("valid", valid)
        if (valid === 0){
            head1.textContent = "No recipes for that selection"
            img1.src = noFood
    
            head2.textContent = "No recipes for that selection"
            img2.src = noFood
    
            head3.textContent = "No recipes for that selection"
            img3.src = noFood
    
            head4.textContent = "No recipes for that selection"
            img4.src = noFood
        }

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


       //table url variable array
       tableArr = []
       tableArr[0] = response.hits[0]._links.self.href
       console.log("firstURL", tableArr[0])

       tableArr[1] = response.hits[1]._links.self.href
       console.log("secondURL", tableArr[1])

       tableArr[2] = response.hits[2]._links.self.href
       console.log("thirdURL", tableArr[2])

       tableArr[3] = response.hits[3]._links.self.href
       console.log("fourthURL", tableArr[3])
       return tableArr
    })
    
}

//Ids for generating recipe content 
var recipeLabelId = document.querySelector("#recipe_title")
var recipeImageId = document.querySelector("#recipe_image")
var recipeIngredientsId = document.querySelector("#recipe_ingredientlines")
var recipeCaloriesId = document.querySelector("#recipe_calories")
var recipeMinutesId = document.querySelector("#recipe_minutes")
var recipeLinkId= document.querySelector("#recipe_link")

function resetRecipe(){
    recipeIngredientsId.textContent = ""
}

//function for getting the recipe url after button 0 click
var tableArr = []

//adding text content to html after button click 0
function generateBtn0(recLabel0, recipeImg0, recipeIngredientLines0, recipeCalories0, recipeTotalTime0, btnURL0){
    favloc.setAttribute("data-target", recLabel0)
    favloc.textContent = "Click to Favorite!"
recipeLabelId.textContent = recLabel0
recipeImageId.setAttribute("src", recipeImg0)
/* var gList = recipeIngredientLines0[0]
for (var j = 1; j < recipeIngredientLines0.length; j++){
    gList = recipeIngredientLines0[j] + " "
} */
recipeIngredientsId.textContent = recipeIngredientLines0
recipeCaloriesId.textContent = recipeCalories0 + " calories"
if (recipeTotalTime0 === 0){
    recipeMinutesId.textContent = "Less than one minute"
}else{
    recipeMinutesId.textContent = recipeTotalTime0 + " minutes"
}

recipeLinkId.textContent = "Learn More: " + btnURL0
}

function button0Call(){
    var recipeURL = tableArr[0]
    console.log(recipeURL)
    $.ajax({
        url: recipeURL,
        method: 'GET',
    }).then(function (response){
        var recLabel0 = response.recipe.label
        console.log("recipe content", recLabel0)
        var recipeImg0 = response.recipe.images.REGULAR.url
        console.log("recipe image 0", recipeImg0)
        var recipeIngredientLines0 = response.recipe.ingredientLines
        console.log(recipeIngredientLines0)
        var recipeCalories0 = response.recipe.calories
        recipeCalories0 = Math.floor(recipeCalories0)
        console.log(recipeCalories0)
        var recipeTotalTime0 = response.recipe.totalTime 
        console.log(recipeTotalTime0)
        var btnURL0 = response.recipe.shareAs
        console.log(btnURL0)
        generateBtn0(recLabel0, recipeImg0, recipeIngredientLines0, recipeCalories0, recipeTotalTime0, btnURL0)
    })
    
}

//target button 0
var btn0Loc = document.querySelector("#btn0")
btn0Loc.addEventListener("click", button0Call)


//function for getting the recipe url after button 1 click
var tableArr = []

//adding text content to html after button click 1
function generateBtn1(recLabel1, recipeImg1, recipeIngredientLines1, recipeCalories1, recipeTotalTime1, btnURL1){
    favloc.setAttribute("data-target", recLabel1)
    favloc.textContent = "Click to Favorite!"
    recipeLabelId.textContent = recLabel1
    recipeImageId.setAttribute("src", recipeImg1)
    /* for (var i = 0; i < recipeIngredientLines1.length; i++){
    recipeIngredientsId.textContent = recipeIngredientLines1[i] + " "
    } */
    recipeIngredientsId.textContent = recipeIngredientLines1
    recipeCaloriesId.textContent = recipeCalories1 + " calories"
    if (recipeTotalTime1 === 0){
        recipeMinutesId.textContent = "Less than one minute"
    } else{
        recipeMinutesId.textContent = recipeTotalTime1 + " minutes"
    }
    
    recipeLinkId.textContent = "Learn More: " + btnURL1
    
    }

function button1Call(){
    var recipeURL = tableArr[1]
    console.log(recipeURL)
    $.ajax({
        url: recipeURL,
        method: 'GET',
    }).then(function (response){
        var recLabel1 = response.recipe.label
        console.log(recLabel1)
        var recipeImg1 = response.recipe.images.REGULAR.url
        console.log(recipeImg1)
        var recipeIngredientLines1 = response.recipe.ingredientLines
        console.log(recipeIngredientLines1)
        var recipeCalories1 = response.recipe.calories
        recipeCalories1 = Math.floor(recipeCalories1)
        console.log(recipeCalories1)
        var recipeTotalTime1 = response.recipe.totalTime 
        console.log(recipeTotalTime1)
        var btnURL1 = response.recipe.shareAs
        console.log(btnURL1)
        generateBtn1(recLabel1, recipeImg1, recipeIngredientLines1, recipeCalories1, recipeTotalTime1, btnURL1)
    })
    
}
//target button 1
var btn1Loc = document.querySelector("#btn1")
btn1Loc.addEventListener("click", button1Call)


//function for getting the recipe url after button 2 click
var tableArr = []

//adding text content to html after button click 2
function generateBtn2(recLabel2, recipeImg2, recipeIngredientLines2, recipeCalories2, recipeTotalTime2, recipeURL2){
    favloc.setAttribute("data-target", recLabel2)
    favloc.textContent = "Click to Favorite!"
    recipeLabelId.textContent = recLabel2
    recipeImageId.setAttribute("src", recipeImg2)
    /* for (var i = 0; i < recipeIngredientLines2.length; i++){
    recipeIngredientsId.textContent = recipeIngredientLines2[i] + " "
    } */

    recipeIngredientsId.textContent = recipeIngredientLines2

    recipeCaloriesId.textContent = recipeCalories2 + " calories"
    if (recipeTotalTime2 === 0){
        recipeMinutesId.textContent = "Less than one minute"
    } else{
        recipeMinutesId.textContent = recipeTotalTime2 + " minutes"
    }
    
    recipeLinkId.textContent = "Learn More: " + recipeURL2
    }


function button2Call(){
    var recipeURL = tableArr[2]
    console.log(recipeURL)
    $.ajax({
        url: recipeURL,
        method: 'GET',
    }).then(function (response){
        var recLabel2 = response.recipe.label
        console.log("recipe content", recLabel2)
        var recipeImg2 = response.recipe.images.REGULAR.url
        console.log(recipeImg2)
        var recipeIngredientLines2 = response.recipe.ingredientLines
        console.log(recipeIngredientLines2)
        var recipeCalories2 = response.recipe.calories
        recipeCalories2 = Math.floor(recipeCalories2)
        console.log(recipeCalories2)
        var recipeTotalTime2 = response.recipe.totalTime
        console.log(recipeTotalTime2)
        var recipeURL2 = response.recipe.shareAs
        console.log(recipeURL2)
        generateBtn2(recLabel2, recipeImg2, recipeIngredientLines2, recipeCalories2, recipeTotalTime2, recipeURL2)
    })
    
}
//target button 2
var btn2Loc = document.querySelector("#btn2")
btn2Loc.addEventListener("click", button2Call)


//function for getting the recipe url after button 3 click
var tableArr = []

//adding text content to html after button click 3
function generateBtn2(recLabel3, recipeImg3, recipeIngredientLines3, recipeCalories3, recipeTotalTime3, recipeURL3){
    favloc.setAttribute("data-target", recLabel3)
    favloc.textContent = "Click to Favorite!"
    recipeLabelId.textContent = recLabel3
    recipeImageId.setAttribute("src", recipeImg3)
    /* for (var i = 0; i < recipeIngredientLines3.length; i++){
    recipeIngredientsId.textContent = recipeIngredientLines3[i] + " "
    } */

    recipeIngredientsId.textContent = recipeIngredientLines3

    recipeCaloriesId.textContent = recipeCalories3 + " calories"
    if (recipeTotalTime3 === 0){
        recipeMinutesId.textContent = "Less than one minute"
    }else{
        recipeMinutesId.textContent = recipeTotalTime3 + " minutes"
    }
    
    recipeLinkId.textContent = "Learn More: " + recipeURL3
    }


function button3Call(){
    var recipeURL = tableArr[3]
    console.log(recipeURL)
    $.ajax({
        url: recipeURL,
        method: 'GET',
    }).then(function (response){
        var recLabel3 = response.recipe.label
        console.log("recipe content", recLabel3)
        var recipeImg3 = response.recipe.images.REGULAR.url
        console.log(recipeImg3)
        var recipeIngredientLines3 = response.recipe.ingredientLines
        console.log(recipeIngredientLines3)
        var recipeCalories3 = response.recipe.calories
        recipeCalories3 = Math.floor(recipeCalories3)
        console.log(recipeCalories3)
        var recipeTotalTime3 = response.recipe.totalTime 
        console.log(recipeTotalTime3)
        var recipeURL3 = response.recipe.shareAs
        console.log(recipeURL3)
        generateBtn2(recLabel3, recipeImg3, recipeIngredientLines3, recipeCalories3, recipeTotalTime3, recipeURL3)
    })
    
}
//target button 3
var btn3Loc = document.querySelector("#btn3")
btn3Loc.addEventListener("click", button3Call)




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

function apiCocktailCall(apiCocktailRandom){
    $.ajax({
        url: apiCocktailRandom,
        method: 'GET'
    }).then(function (response){

    var drinkName = response.drinks[0].strDrink
    console.log("Drink Name", drinkName)
    var drinkCategory = response.drinks[0].strCategory
    console.log("Drink Category", drinkCategory)
    var drinkInstructions = response.drinks[0].strInstructions
    console.log(drinkInstructions)
    var drinkIngredients = []
    var drinkMixAmount = []
    var drinkIMA = []
    var drinkImg = response.drinks[0].strDrinkThumb
    console.log("Drink Image", drinkImg)
    if (response.drinks[0].strIngredient1 !== null && response.drinks[0].strIngredient1 !== undefined){
        drinkIngredients[0] = response.drinks[0].strIngredient1
        drinkMixAmount[0] = response.drinks[0].strMeasure1
    }

    if (response.drinks[0].strIngredient2 !== null && response.drinks[0].strIngredient2 !== undefined){
        drinkIngredients[1] = response.drinks[0].strIngredient2
        drinkMixAmount[1] = response.drinks[0].strMeasure2
    }

    if (response.drinks[0].strIngredient3 !== null && response.drinks[0].strIngredient3 !== undefined){
        drinkIngredients[2] = response.drinks[0].strIngredient3
        drinkMixAmount[2] = response.drinks[0].strMeasure3
    }

    if (response.drinks[0].strIngredient4 !== null && response.drinks[0].strIngredient4 !== undefined){
        drinkIngredients[3] = response.drinks[0].strIngredient4
        drinkMixAmount[3] = response.drinks[0].strMeasure4
    }

    if (response.drinks[0].strIngredient5 !== null && response.drinks[0].strIngredient5 !== undefined){
        drinkIngredients[4] = response.drinks[0].strIngredient5
        drinkMixAmount[4] = response.drinks[0].strMeasure5
    }

    if (response.drinks[0].strIngredient6 !== null && response.drinks[0].strIngredient6 !== undefined){
        drinkIngredients[5] = response.drinks[0].strIngredient6
        drinkMixAmount[5] = response.drinks[0].strMeasure6
    }

    if (response.drinks[0].strIngredient7 !== null && response.drinks[0].strIngredient7 !== undefined){
        drinkIngredients[6] = response.drinks[0].strIngredient7
        drinkMixAmount[6] = response.drinks[0].strMeasure7
    }

    if (response.drinks[0].strIngredient8 !== null && response.drinks[0].strIngredient8 !== undefined){
        drinkIngredients[7] = response.drinks[0].strIngredient8
        drinkMixAmount[7] = response.drinks[0].strMeasure8
    }

    if (response.drinks[0].strIngredient9 !== null && response.drinks[0].strIngredient9 !== undefined){
        drinkIngredients[8] = response.drinks[0].strIngredient9
        drinkMixAmount[8] = response.drinks[0].strMeasure9
    }

    if (response.drinks[0].strIngredient10 !== null && response.drinks[0].strIngredient10 !== undefined){
        drinkIngredients[9] = response.drinks[0].strIngredient10
        drinkMixAmount[9] = response.drinks[0].strMeasure10
    }

    if (response.drinks[0].strIngredient11 !== null && response.drinks[0].strIngredient11 !== undefined){
        drinkIngredients[10] = response.drinks[0].strIngredient11
        drinkMixAmount[10] = response.drinks[0].strMeasure11
    }

    if (response.drinks[0].strIngredient12 !== null && response.drinks[0].strIngredient12 !== undefined){
        drinkIngredients[11] = response.drinks[0].strIngredient12
        drinkMixAmount[11] = response.drinks[0].strMeasure12
    }

    if (response.drinks[0].strIngredient13 !== null && response.drinks[0].strIngredient13 !== undefined){
        drinkIngredients[12] = response.drinks[0].strIngredient13
        drinkMixAmount[12] = response.drinks[0].strMeasure13
    }

    if (response.drinks[0].strIngredient14 !== null && response.drinks[0].strIngredient14 !== undefined){
        drinkIngredients[13] = response.drinks[0].strIngredient14
        drinkMixAmount[13] = response.drinks[0].strMeasure14
    }

    if (response.drinks[0].strIngredient15 !== null && response.drinks[0].strIngredient15 !== undefined){
        drinkIngredients[14] = response.drinks[0].strIngredient15
        drinkMixAmount[14] = response.drinks[0].strMeasure15
    }

    for (var i = 0; i < drinkIngredients.length; i++){
        drinkIMA[i] = drinkMixAmount[i] + " " + drinkIngredients[i]
        if (drinkIMA[i] === " "){
            delete drinkIMA[i]
            drinkIMA[i] = 1
        }
    }

    console.log(drinkIMA)

    generateCocktail(drinkName, drinkImg, drinkCategory, drinkInstructions, drinkIMA);
    })
}

function generateCocktail(drinkName, drinkImg, drinkCategory, drinkInstructions, drinkIMA){
    cocktailImage.setAttribute("src", drinkImg)
    cocktailImage.setAttribute("alt", drinkName)

   
    cocHead.textContent = drinkName
    
    
    cocCat.textContent = drinkCategory
    var coctext = drinkIMA[0]
    
    for (var i = 1; i < drinkIMA.length; i++){
        
         coctext = coctext + ", " + drinkIMA[i] 
    }
    cocIMA.textContent = coctext
    cocHelp.textContent = drinkInstructions
    
}
var favP = document.querySelector("#favP")
function cocktailReset(){
    cocHead.textContent = ""
    cocCat.textContent = ""
    cocIMA.textContent = ""
    cocHelp.textContent = ""
}
subBtn.addEventListener("click", getRecipes)

var localFav = document.getElementById("localFav")
favload();
var favloc = document.querySelector("#FavBtn")
function favload(){
    var favMeals = localStorage.getItem("favMeals")
    
    var fav = JSON.parse(favMeals)
    
    favP.textContent = fav

}

function makeFav(event){
    
    var element = event.target
    var favData = element.getAttribute("data-target")
    favData = JSON.stringify(favData)
    
    localStorage.setItem("favMeals", favData)
    favload();
}

favloc.addEventListener("click", makeFav)

// Local storage for subscribe button
var subscribeInput = document.getElementById("subscribe")
var subscribeBtn = document.getElementById("subscribe-btn")

function subscribeEmail(event){

    var subscribe = event.target
    var email = subscribe.getAttribute("data-target", subscribeInput)
    email = JSON.stringify(email)

    localStorage.setItem("input", email)
    subscribeEmail();
}

subscribeBtn.addEventListener("click", subscribeEmail)



