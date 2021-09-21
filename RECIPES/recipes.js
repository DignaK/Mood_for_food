$(document).ready(function(){


$(".description").hide();
$(".expand").click(function() {
    $(this).parent().next(".description").toggle();
    
});

});

