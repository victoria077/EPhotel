$(document).ready(function() {
  $('.sidebar__close').click(function() {
    $('#sidebar').hide();
    $('.sidebar').width('0');
    $('.rooms').show();
    $('.rooms').width('100%');
  });
  $('.rooms__slide').click(function() {
    $('#sidebar').show();
    $('.sidebar').css('display', 'block');
    $('.sidebar').addClass('show');
    $('.sidebar').width('700px');
    $('.rooms').hide();
    $('.rooms').width('0');
  });
});
