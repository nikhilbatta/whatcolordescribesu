$(document).ready(function(){
  $("#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    var blue = []
    var green = []
    var orange = []
    $("input:checkbox[name=color-quiz]:checked").each(function(){
      var favoriteColor = $(this).val();
      if (favoriteColor === "orange"){
        orange.push(favoriteColor)
      }
      else if (favoriteColor === "blue"){
        blue.push(favoriteColor);
      }
      else {
        green.push(favoriteColor)
      }
      console.log(favoriteColor)
    });
    if(blue.length > green.length && blue.length > green.length){
      $("#transportation_survey").append("<h1> Your favorite color is blue</h1>")
    }
    else if (orange.length > blue.length && orange.length > green.length){
      $("#transportation_survey").append("<h1> Your favorite color is orange</h1>")
    }
    else{
      $("#transportation_survey").append("<h1> Your favorite color is green</h1>")
    }
  });
});
