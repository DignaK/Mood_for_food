$(document).ready(function(){

//MAKE EXPAND FOR OUR RECIPES
$(".description").hide();
$(".expand").click(function() {
    $(this).parent().next(".description").toggle();
    
});





//ADD INGREDIENTS FOR USER RECIPE
$(document).ready(function(){
  let maxField = 10; //Input fields increment limitation
  let addButton = $('.add_button'); //Add button selector
  let wrapper = $('.addIngredients'); //Input field wrapper
  let fieldHTML = '<div><input type="text" name="newIngredients[]" value=""/><a href="javascript:void(0);" class="remove_button"><img src="IMAGES/minus.png" width= 15px/></a></div>'; //New input field html 
  let x = 1; //Initial field counter is 1
  
  //Once add button is clicked
  $(addButton).click(function(){
      //Check maximum number of input fields
      if(x < maxField){ 
          x++; //Increment field counter
          $(wrapper).append(fieldHTML); //Add field html
      }
  });
  
  //Once remove button is clicked
  $(wrapper).on('click', '.remove_button', function(e){
      e.preventDefault();
      $(this).parent('div').remove(); //Remove field html
      x--; //Decrement field counter
  });
});





});




//ADD TITLE AND INSTRUCTIONS FOR USER RECIPE
function add(){ 
  let newTitle= document.getElementById("newTitle").value;
  document.getElementById("titleOfAddedRecipe").innerHTML=newTitle;
  // console.log("New title:"+ newTitle); 
  
  // let newIngredients= document.getElementById("newIngredients[]").value; 
  // console.log("New ingredients:"+ newIngredients); 
  
  let newInstructions= document.getElementById("newInstructions").value; 
  document.getElementById("instructionsOfAddedRecipe").innerHTML=newInstructions;
  // console.log("New instructions:"+ newInstructions); 
};