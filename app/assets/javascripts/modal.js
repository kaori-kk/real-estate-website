$(function(){
  $("#send-message").on("click", function(){

    const agent_id = $("#agent_id").val();
    const first_name = $("#message-first-name").val();
    const last_name = $("#message-last-name").val();
    const email = $("#message-email").val();
    const message = $("#message-text").val();

  $.ajax({
    url: "/agent/message",
    method: "POST",
    dataType: "json",
    data: {
      agent_id: agent_id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      message: message
    },
    success: function(data){
      console.log(data);
    }
  })
 });

  $('#contactAgent').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var modal = $(this)
  });

});
