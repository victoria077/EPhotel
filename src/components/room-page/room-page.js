$(document).ready(function() {
  $('.close').click(function() {
    $('#sidebar').hide();
    $('.settings__left-side').width('0');
    $('.settings__right-side').show();
    $('.settings__right-side').width('100%');
  });
  $('.slide').click(function() {
    $('#sidebar').show();
    $('.settings__left-side').css('display', 'block');
    $('.settings__left-side').addClass('show');
    $('.settings__left-side').width('700px');
    $('.settings__right-side').hide();
    $('.settings__right-side').width('0');
  });
});
