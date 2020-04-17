$(document).ready(function(){

  $(".toggleDetails").on("click", function(){

    const details = $(".description-text");
    details.toggleClass("open");

    if (details.hasClass("open")){
      $(this).text("Show less");
    } else {
      $(this).text("Show more");
    }
  })
});
