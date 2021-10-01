let ingredients = [
    "Beef",
    "Blueberries",
    "Bok Choy",
    "Cherry Tomatoes",
    "Chicken",
    "Chicken Liver",
    "Chicken Stock",
    "Chops",
    "Crab",
    "Cranberry",
    "Drumstick",
    "Free Range Chicken",
    "Grass Fed Chicken",
    "Ham",
    "Kaffir Lime",
    "Keema",
    "Kidney Meat",
    "Kiwi",
    "Lemon Juice",
    "Lemon Rind",
    "Lychee",
    "Mango",
    "Meat Stock",
    "Mulberry",
    "Mushroom",
    "Mustard Leaves",
    "Mutton Liver",
    "Olives",
    "Onion",
    "Orange",
    "Orange Rind",
    "Organic Chicken",
    "Papaya",
    "Partridge",
    "Pear",
    "Pimiento",
    "Plantain",
    "Pork",
    "Radish",
    "Ridge Gourd",
    "Rocket Leaves",
    "Round Gourd",
    "Skinned Chicken",
    "Snake Beans",
    "Sorrel Leaves",
    "Spinach",
    "Strawberry",
    "Sultana",
    "Sweet Potatoes",
    "Tomato",
    "Turkey",
    "Turnip",
    "Water Chestnut",
    "Watermelon",
];
let shoppingList = [];
let searchResults = [];
let breakfastList = [];
let lunchList = [];
let snacksList = [];
let dinnerList = [];

$(document).ready(()=>{
    $(".count").hide();
    redraw();
    counter();

    function redraw(){
        if ($("#search").val().length) {
            generateIngredientsList($(".all-ingredients"), searchResults, shoppingList);
        }
        else {
            generateIngredientsList($(".all-ingredients"), ingredients, shoppingList);
        }
        generateIngredientsList($(".shopping-list"), shoppingList, ingredients);
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
        let count = 
            shoppingList.length + 
            breakfastList.length + 
            lunchList.length +
            snacksList.length +
            lunchList.length;
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
    
    generateBreakfastList($("#breakfastShoppingList"),ingrBreakfast1,breakfastList);
    generateBreakfastList2($("#breakfastShoppingList"),ingrBreakfast2,breakfastList);
    generateBreakfastList3($("#breakfastShoppingList"),ingrBreakfast3,breakfastList);
    generateBreakfastList4($("#breakfastShoppingList"),ingrBreakfast4,breakfastList);
    generateLunchList($("#lunchShoppingList"),ingrLunch5,lunchList);
    generateLunchList2($("#lunchShoppingList"),ingrLunch6,lunchList);
    generateLunchList3($("#lunchShoppingList"),ingrLunch7,lunchList);
    generateLunchList4($("#lunchShoppingList"),ingrLunch8,lunchList);
    generateSnacksList($("#snacksShoppingList"),ingrSnacks9,snacksList);
    generateSnacksList2($("#snacksShoppingList"),ingrSnacks10,snacksList);
    generateSnacksList3($("#snacksShoppingList"),ingrSnacks11,snacksList);
    generateSnacksList4($("#snacksShoppingList"),ingrSnacks12,snacksList);
    generateDinnerList($("#dinnerShoppingList"),ingrDinner13,dinnerList);
    generateDinnerList2($("#dinnerShoppingList"),ingrDinner14,dinnerList);
    generateDinnerList3($("#dinnerShoppingList"),ingrDinner15,dinnerList);
    generateDinnerList4($("#dinnerShoppingList"),ingrDinner16,dinnerList);

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
                counter();
            }
        })
    }
    $(document).on("click","#addToListBreakfast1",function(){
        $(this).attr('disabled', true);
    });

    function generateBreakfastList2 (container,data,destination){
        $("#addToListBreakfast2").click(function (){
            for(let i=0;i<ingrBreakfast2.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToListBreakfast2",function(){
        $(this).attr('disabled', true);
    });

    function generateBreakfastList3 (container,data,destination){
        $("#addToListBreakfast3").click(function (){
            for(let i=0;i<ingrBreakfast3.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToListBreakfast3",function(){
        $(this).attr('disabled', true);
    });

    function generateBreakfastList4 (container,data,destination){
        $("#addToListBreakfast4").click(function (){
            for(let i=0;i<ingrBreakfast4.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToListBreakfast4",function(){
        $(this).attr('disabled', true);
    });

    function generateLunchList (container,data,destination){
        $("#addToListLunch5").click(function (){
            for(let i=0;i<ingrLunch5.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToListLunch5",function(){
        $(this).attr('disabled', true);
    });

    function generateLunchList2 (container,data,destination){
        $("#addToListLunch6").click(function (){
            for(let i=0;i<ingrLunch6.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToListLunch6",function(){
        $(this).attr('disabled', true);
    });

    function generateLunchList3 (container,data,destination){
        $("#addToListLunch7").click(function (){
            for(let i=0;i<ingrLunch7.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToListLunch7",function(){
        $(this).attr('disabled', true);
    });

    function generateLunchList4 (container,data,destination){
        $("#addToListLunch8").click(function (){
            for(let i=0;i<ingrLunch8.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToListLunch8",function(){
        $(this).attr('disabled', true);
    });

    function generateSnacksList (container,data,destination){
        $("#addToListSnacks9").click(function (){
            for(let i=0;i<ingrSnacks9.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToSnacks9",function(){
        $(this).attr('disabled', true);
    });

    function generateSnacksList2 (container,data,destination){
        $("#addToListSnacks10").click(function (){
            for(let i=0;i<ingrSnacks10.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToSnacks10",function(){
        $(this).attr('disabled', true);
    });

    function generateSnacksList3 (container,data,destination){
        $("#addToListSnacks11").click(function (){
            for(let i=0;i<ingrSnacks11.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToSnacks11",function(){
        $(this).attr('disabled', true);
    });

    function generateSnacksList4 (container,data,destination){
        $("#addToListSnacks12").click(function (){
            for(let i=0;i<ingrSnacks12.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToSnacks12",function(){
        $(this).attr('disabled', true);
    });

    function generateDinnerList (container,data,destination){
        $("#addToListDinner13").click(function (){
            for(let i=0;i<ingrDinner13.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToDinner13",function(){
        $(this).attr('disabled', true);
    });

    function generateDinnerList2 (container,data,destination){
        $("#addToListDinner14").click(function (){
            for(let i=0;i<ingrDinner14.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToDinner14",function(){
        $(this).attr('disabled', true);
    });

    function generateDinnerList3 (container,data,destination){
        $("#addToListDinner15").click(function (){
            for(let i=0;i<ingrDinner15.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToDinner15",function(){
        $(this).attr('disabled', true);
    });

    function generateDinnerList4 (container,data,destination){
        $("#addToListDinner16").click(function (){
            for(let i=0;i<ingrDinner16.length;i++){
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
                counter();
            }
        })
    }
    $(document).on("click","#addToDinner16",function(){
        $(this).attr('disabled', true);
    });

})