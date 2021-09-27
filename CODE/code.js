let ingredients = [
    "CARROT",
    "MANGO",
    "MINT",
    "PEACH",
];

let shoppingList = [];

let div1 = document.querySelector("div.all-ingredients");

for(i=0;i<ingredients.length;i++){
    let h2 = document.createElement("h2");
    h2.className = "ingredients";
    h2.innerText = ingredients[i];
    div1.append(h2);
}

const searchField = document.querySelector("#search");
const searchResultsContainer = document.querySelector("div.all-ingredients");

searchField.addEventListener('input', (e) => {
// filter the ingredients array
const searchResults = ingredients.filter(ingredients => {
    return ingredients.toLowerCase().includes(e.target.value.toLowerCase());
    });
// before displaying the search results, clear the search results div
searchResultsContainer.innerHTML = '';
// display ingredients that include the text entered in input field
searchResults.forEach(element => {
    let h2 = document.createElement('h2');
    h2.textContent = element;
    h2.className = "ingredients";
    searchResultsContainer.appendChild(h2);
  });
});