$(document).ready(function(){
    
   
      $("#signup").click(function(){
          location.href = "/add";
      })
      $("#signin").click(function(){
          location.href = "/login";
      })
      $("#again").click(function(){
        location.href = "/add";
      })

      
    $('.form-signin button').click(function () {
    $.ajax('/create', {
      'method': 'POST',
      'data': {
        'Eth_Address': $('#inputEthAddress').val(),
        'id': $('#inputId').val(),
        'password': $('#inputPassword').val()
          }
    })
    // var Eth_Address = $('#inputEthAddress').val()
    // var id = $('#inputEthAddress').val()
    // var password = $('#inputEthAddress').val()

  })
})
