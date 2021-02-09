$(document).ready(function() {
    $("#exampleModalLong").modal();
  });

$('#exampleModalLong').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
    console.log("Hello World") 
});
