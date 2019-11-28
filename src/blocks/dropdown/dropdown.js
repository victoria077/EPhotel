var valueAd = 0;
var valueChild = 0; 
var valueBaby = 0;
$('#adult_plus').on('click', function() {
  let newScore = $('#adult_text').html();
  valueAd = parseInt(newScore) + 1;
  $('#adult_text').html(valueAd);
  return valueAd;
});

$('#adult_minus').on('click', function() {
  let newScore = $('#adult_text').html();
  if (newScore > 0) {
    valueAd = parseInt(newScore) - 1;
    $('#adult_text').html(valueAd);
  }
  return valueAd;
});

$('#child_plus').on('click', function() {
  let newScore = $('#child_text').html();
  valueChild = parseInt(newScore) + 1;
  $('#child_text').html(valueChild);
  return valueChild;
});

$('#child_minus').on('click', function() {
  let newScore = $('#child_text').html();
  if (newScore > 0) {
    valueChild = parseInt(newScore) - 1;
    $('#child_text').html(valueChild);
  }
  return valueChild;
});

$('#baby_plus').on('click', function() {
  let newScore = $('#baby_text').html();
  valueBaby = parseInt(newScore) + 1;
  $('#baby_text').html(valueBaby);
  return valueBaby;
});

$('#baby_minus').on('click', function() {
  let newScore = $('#baby_text').html();
  if (newScore > 0) {
    valueBaby = parseInt(newScore) - 1;
    $('#baby_text').html(valueBaby);
  }
  return valueBaby;
});


$('#clean').on('click', function() {
  $('#baby_text').html(0);
  $('#child_text').html(0);
  $('#adult_text').html(0);
  $('#dd-text').html('Сколько гостей');
  valueChild = 0;
  valueBaby = 0;
  valueAd = 0;
});

$('#apply').on('click', function() {
  $('#clean').css('color', 'rgba(31, 32, 65, 0.5)');
  guests = valueAd + valueChild + valueBaby;
  if (guests == 1) {
    $('#dd-text').html(guests + ' ' + 'гость');
  }
  else if ((guests > 1 && guests < 5) || guests == 0) {
    $('#dd-text').html(guests + ' ' + 'гостя');
  }
  else{
    $('#dd-text').html(guests + ' ' + 'гостей');
  }
});




