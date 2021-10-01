let ingredients = [
    "CARROT",
    "MANGO",
    "MINT",
    "PEACH",
];
let shoppingList = [];
let searchResults = [];

$(document).ready(()=>{
    $(".count").hide();
    redraw();
    counter();

    function redraw(){
        if ($("#search").val().length) {
            generateMenuItems($(".all-ingredients"), searchResults, shoppingList);
        }
        else {
            generateMenuItems($(".all-ingredients"), ingredients, shoppingList);
        }
        generateMenuItems($(".shopping-list"), shoppingList, ingredients);
    }

    function generateMenuItems (container,data,destination){
        container.empty();
        for(let i=0;i<data.length;i++){
            const itemTitle = data[i];
            const menuItem = $(document.createElement("h2"));
            menuItem.text(itemTitle);
            container.append(menuItem);
            menuItem.click(function(){
                data.splice(i,1);
                if ($(this).parent().hasClass('shopping-list') && $("#search").val().length) {
                    $("#search").val("");
                }
                if ($("#search").val().length) {
                    let j = ingredients.indexOf(itemTitle);
                    ingredients.splice(j,1);
                }
                destination.push(itemTitle);
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
        // h2.className = "ingredients";
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
        let count = shoppingList.length;
    // šis vēl līdz galam nestrādā
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
    


})