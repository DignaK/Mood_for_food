let ingredients = [
    "CARROT",
    "MANGO",
    "MINT",
    "PEACH",
];

let shoppingList = [];

let count = shoppingList.length;
let div0 = document.querySelector("div.menu-shopping");
// šis vēl līdz galam nestrādā
if(count != 0){
    let notification = document.createElement("div");
    notification.class = "count";
    notification.innerText = count;
    div0.append(notification);
}


let div1 = document.querySelector("div.all-ingredients");
    
for(i=0;i<ingredients.length;i++){
    let h2 = document.createElement("h2");
    h2.className = "ingredients";
    h2.innerText = ingredients[i];
    div1.append(h2);
}


// SEARCHING INGREDIENTS
const searchField = document.querySelector("#search");
const searchResultsContainer = document.querySelector("div.all-ingredients");

searchField.addEventListener('input', (search) => {
// filter the ingredients array
const searchResults = ingredients.filter(ingredients => {
    return ingredients.toLowerCase().includes(search.target.value.toLowerCase());
    });
// before displaying the search results, clear the search results div
searchResultsContainer.innerHTML = '';
// display ingredients that include the text entered in input field
searchResults.forEach(element => {
    let h2 = document.createElement('h2');
    h2.innerText = element;
    h2.className = "ingredients";
    searchResultsContainer.append(h2);
  });
});


let div2 = document.querySelector("div.shopping-list");

$(document).ready(function(){
    $("h2.ingredients").click(
        function (){
            $(this).hide(); // workaround
            let h2 = document.createElement("h2");
            h2.className = "ingredients-to-buy";
            h2.innerText = $(this).text();
            div2.append(h2);
        }
    )
})



// function redraw(){
//     generateMenuItems($("#menuItems"), menuItems, menuFinal);
//     generateMenuItems($("#menuFinal"), menuFinal, menuItems);
// }

// function generateMenuItems (container,data,destination){
//     container.empty();
//     for(let i=0;i<data.length;i++){
//         const itemTitle = data[i];
//         const menuItem = $(document.createElement("div"));
//         menuItem.text(itemTitle);
//         container.append(menuItem);
//         menuItem.click(function(){
//             data.splice(i,1);
//             destination.push(itemTitle);
//             redraw();
//         })
//     }
// }


