$(document).ready(function(){

//MAKE EXPAND FOR OUR RECIPES
$(".description").hide();
$(".expand").click(function() {
    $(this).parent().next(".description").toggle();
    
});
});



$(document).ready(function() {

    let iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    let container = $(document.createElement('div'));

    $('#btAdd').click(function() {
        if (iCnt <= 19) {

            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" id=tb' + iCnt + ' ' +
                 iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
            if (iCnt == 1) {
                var divSubmit = $(document.createElement('div'));
                $(divSubmit).append('<input type=button class="bt"' + 
                    'onclick="GetTextValue()"' + 
                        'id=btSubmit value=Add />');
            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#newIngredients').after(container, divSubmit);
        }
        // AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
        // (20 IS THE LIMIT WE HAVE SET)
        else {      
            $(container).append('<label>Reached the limit</label>'); 
            $('#btAdd').attr('class', 'bt-disable'); 
            $('#btAdd').attr('disabled', 'disabled');
        }
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $('#btRemove').click(function() {
        if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }
    
        if (iCnt == 0) { 
            $(container)
                .empty() 
                .remove(); 

            $('#btSubmit').remove(); 
            $('#btAdd')
                .removeAttr('disabled') 
                .attr('class', 'bt');
        }
    });

    // REMOVE ALL THE ELEMENTS IN THE CONTAINER.
    $('#btRemoveAll').click(function() {
        $(container)
            .empty()
            .remove(); 

        $('#btSubmit').remove(); 
        iCnt = 0; 
        
        $('#btAdd')
            .removeAttr('disabled') 
            .attr('class', 'bt');
    });
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
let divValue, values = '';

function GetTextValue() {
    $(divValue) 
        .empty() 
        .remove(); 
    
    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div'));
        values += this.value + '<br />'
    });

    $(divValue).append(values);
    $("#ingredientsOfAddedRecipe").append(divValue);
  }

//ADD TITLE AND INSTRUCTIONS FOR USER RECIPE
function addTitle(){ 
  let newTitle= document.getElementById("newTitle").value;
  document.getElementById("titleOfAddedRecipe").innerHTML=newTitle;
  // console.log("New title:"+ newTitle); 
};
  
function addInstructions(){ 
  let newInstructions= document.getElementById("newInstructions").value; 
  document.getElementById("instructionsOfAddedRecipe").innerHTML=newInstructions;
  // console.log("New instructions:"+ newInstructions); 
};
  