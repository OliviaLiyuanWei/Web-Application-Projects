// when clicking control list items



$(function(){

  var $color = $(".selected").css("background-color");
  var $canvas = $("canvas");
  var context = $canvas[0].getContext("2d");
  var lastEvent = "";
  var mouseDown = false;

  $(".controls").on('click', "li", function(){
     
      // deselect sibling elements
      $(this).siblings().removeClass("selected");
      // select current element
      $(this).addClass("selected");
      //cache current color
      $color = $(this).css("background-color");
      console.log($color);
  });

//  update the new color span
    function changeColor(){
        var r = $("#red").val();
        var g = $("#green").val();
        var b= $("#blue").val();
        var cstring = "rgb(" + r +"," + g + ","+ b + ")";
        $("#newColor").css("background-color", cstring);
        
      } 
// when new color is pressed
    // show color select or hide the color select 
     $("#revealColorSelect").on('click', function(){
          changeColor();
          $("#colorSelect").toggle();
      });
      //  when slider control change
    $("input[type=range]").change(changeColor);


//when add color is pressed
    //  append the color to the controls ul
    //  select the new color

   $("#addNewColor").click(function(){
      var $newColor = $("<li></li>");
      $newColor.css("background-color", $("#newColor").css("background-color"));
      $(".controls ul").append($newColor);
      
      $newColor.click();
  });

//on mouse envets on the canvas
    //draw lines
    //mouse event coordinates
  $canvas.mousedown(function(e){
    lastEvent = e;
    mouseDown = true;

  }).mousemove(function(e){
    if(mouseDown){
      context.beginPath();
      context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      context.lineTo(e.offsetX, e.offsetY);
      context.strokeStyle = $color;
      context.stroke();
      lastEvent = e;
    } 
  }).mouseup(function(){
      mouseDown = false;
    }).mouseleave(function(){
      $canvas.mouseup();
    });
 
});








