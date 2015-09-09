$(function() {

  $('.deleteCountry').on('click', function (e) {
    var dataUrl = $(this).data('url');
    $.ajax({
      url: dataUrl,
      method: 'DELETE',
      success: function (e) {
        $(this).parent().remove();
        window.location.reload();
      }
    })
  })

  $('.editCountry').on('click', function (e) {
    console.log('editcountry button')
    var dataUrl = $(this).data('url');
    window.location.href = dataUrl;
  })

  $('.goHome').on('click', function (e) {
    window.location.href = '/countries';
  })

  $('.newCountry').on('click', function (e) {
    window.location.href = '/countries/new';
  })

  $('#deleteCountry').on('click', function (e) {
    var dataUrl = $(this).data('url');
    $.ajax({
      url: dataUrl,
      method: "DELETE",
      success: function (e) {
         window.location.href = "/countries"
      }
    })
  })

})