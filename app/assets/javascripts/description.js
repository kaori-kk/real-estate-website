$(document).ready(function(){
  $(".toggleDetails").on("click", function(){

    const details = $(".description-text");
    details.toggleClass("open");
  })
});
