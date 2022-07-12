# Date Night Bites

## Project Summary

Date Night Bites is your new go-to for finding new and exciting recipes to cook with your loved ones. Select from 13 different filters including health preferences, diet, meal type, and cuisine type to specify your recipe search. Click "Learn More" on a recipe to view ingredients and save your favorite dish. To include some spontaneity, find a randomly generated beverage to go with your selected meal.

## Languages and Technology Used

* **HTML**
* **CSS**
* **JavaScript**
* **jQuery:** JavaScript library used for event handling and Ajax requests
* **Moment:** JavaScript library used for parsing, validating, manipulating, and displaying the date/time
* **Parsley:** 
* **Bulma:** CSS Framework

# Project Demonstration

![Date-Night-Bites](Assets/Images/Project-Demo.gif)

# Code Snippet

Here's an example of how we were able to generate the title of the recipe under the favorites section on the website. The recipe title, is also stored locally.

```
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
```

# Author Links

* [Jonathan Mengel Github](https://github.com/digggggg)
* [Tim Sasse Github](https://github.com/timcs1274)
* [Lily Kot Github](https://github.com/lilyannekot)