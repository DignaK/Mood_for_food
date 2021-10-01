let ingredients = [
    "CARROT",
    "MANGO",
    "MINT",
    "PEACH",
];
let shoppingList = [];
let searchResults = [];
let breakfastList = [];

$(document).ready(()=>{
    $(".count").hide();
    redraw();
    counter();
})

    function redraw(){
        if ($("#search").val().length) {
            generateIngredientsList($(".all-ingredients"), searchResults, shoppingList);
        }
        else {
            generateIngredientsList($(".all-ingredients"), ingredients, shoppingList);
        }
        generateIngredientsList($(".shopping-list"), shoppingList, ingredients);
        generateBreakfastList($("#breakfastShoppingList"),ingrBreakfast1,breakfastList);
    }

    function generateIngredientsList (container,data,destination){
        container.empty();
        for(let i=0;i<data.length;i++){
            const ingredientTitle = data[i];
            const ingredientToBuy = $(document.createElement("h2"));
            ingredientToBuy.text(ingredientTitle);
            container.append(ingredientToBuy);
            ingredientToBuy.click(function(){
                data.splice(i,1);
                if ($(this).parent().hasClass('shopping-list') && $("#search").val().length) {
                    $("#search").val("");
                }
                if ($("#search").val().length) {
                    let j = ingredients.indexOf(ingredientTitle);
                    ingredients.splice(j,1);
                }
                destination.push(ingredientTitle);
                redraw();
                counter();
            });
        }
    }

    // SEARCHING INGREDIENTS
    const searchField = document.querySelector("#search");
    const searchResultsContainer = document.querySelector("div.all-ingredients");

    searchField.addEventListener('input', (search) => {
    // filter the ingredients array
    searchResults = ingredients.filter(ingredients => {
        return ingredients.toLowerCase().includes(search.target.value.toLowerCase());
        });
    // before displaying the search results, clear the search results div
    searchResultsContainer.innerHTML = '';
    // display ingredients that include the text entered in input field
    searchResults.forEach(element => {
        let h2 = document.createElement('h2');
        h2.innerText = element;
        searchResultsContainer.append(h2);
        $(h2).click(function(){
            let i = searchResults.indexOf(element);
            searchResults.splice(i,1);
            i = ingredients.indexOf(element);
            ingredients.splice(i,1);
            shoppingList.push(element);
            redraw();
            counter();
        });
    });
    });


    // Count of items in shopping list (notification in header)
    function counter(){
        let count = shoppingList.length + breakfastList.length;
        if(count != 0){
            let notification = document.querySelector(".count");
            notification.innerText = count;
            $(".count").show();
        }
        else {
            $(".count").hide();
        }
    }


    // ADD RECIPE TO SHOPPING LIST
    // function generateBreakfastList (container,data,destination){
    //     $(".addButton").click(function(){
    //         for(let i=0;i<ingrBreakfast1.length;i++){
    //             const buttonId = $(this).attr("id");
    //             console.info(buttonId);
    //             const ingredientTitle = data[i];
    //             const ingredientToBuy = $(document.createElement("h2"));
    //             ingredientToBuy.text(ingredientTitle);
    //             ingredientToBuy.addClass("recipeIngredients");
    //             container.append(ingredientToBuy);
    //             data.slice();
    //             destination.push(ingredientTitle);
    //             redraw();
    //             counter();
    //         }
    //     })
    // }

    function generateBreakfastList (container,data,destination){
        $("#addToListBreakfast1").click(function (){
            for(let i=0;i<ingrBreakfast1.length;i++){
                const ingredientTitle = data[i];
                const checkBox = $(document.createElement("input")).prop({
                    type: "checkbox"
                }); 
                container.append(checkBox);
                const ingredientToBuy = $(document.createElement("h2"));
                ingredientToBuy.text(ingredientTitle);
                ingredientToBuy.addClass("recipeIngredients");
                container.append(ingredientToBuy);
                data.slice();
                destination.push(ingredientTitle);
                redraw();
                counter();
            }
        })
        $(".recipeIngredients").click(()=>{
            // jāizvāc elements
        })
    }
