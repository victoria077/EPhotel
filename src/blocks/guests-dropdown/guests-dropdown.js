var bedroom = 0;
var bed = 0;
var bathroom = 0;

function num2str(n, text_forms) {  
  n = Math.abs(n) % 100; var n1 = n % 10;
  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }
  return text_forms[2];
}

function countComfort() {
  if(bedroom > 0 && bed > 0 && bathroom > 0) {
    $('#comfort-button').html(bedroom + ' ' +num2str(bedroom, [ 'спальня', 'спальни', 'спален']) + ',' + ' ' + bed + ' ' +num2str(bed, ['кровать', 'кровати', 'кроватей']) + ',' + ' ' + '...' );
  } 

  else if(bedroom > 0 && bed > 0) {
    $('#comfort-button').html(bedroom + ' ' +num2str(bedroom, [ 'спальня', 'спальни', 'спален']) + ',' + ' ' + bed + ' ' +num2str(bed, ['кровать', 'кровати', 'кроватей']));
  }

  else if(bedroom > 0 && bathroom > 0) {
    $('#comfort-button').html(bedroom + ' ' +num2str(bedroom, [ 'спальня', 'спальни', 'спален'])  + ',' + ' ' + bathroom + ' ' +num2str(bathroom, ['ванная', 'ванныe', 'ванных']));
  }
  else if (bedroom > 0) {
    $('#comfort-button').html(bedroom + ' ' +num2str(bedroom, [ 'спальня', 'спальни', 'спален']));
  }
  else{
    $('#comfort-button').html('Удобства');
  }
}

$('#bedroom_plus').on('click', function() {
  let newScore = $('#bedroom_text').html();
  bedroom = parseInt(newScore) + 1;
  $('#bedroom_text').html(bedroom);
  countComfort();
  return bedroom;
});

$('#bedroom_minus').on('click', function() {
  let newScore = $('#bedroom_text').html();
  if (newScore > 0) {
    bedroom = parseInt(newScore) - 1;
    $('#bedroom_text').html(bedroom);  
  }
  countComfort();
  return bedroom;
});

$('#bed_plus').on('click', function() {
  let newScore = $('#bed_text').html();
  bed = parseInt(newScore) + 1;
  $('#bed_text').html(bed);
  countComfort();
  return bed;
});

$('#bed_minus').on('click', function() {
  let newScore = $('#bed_text').html();
  if (newScore > 0) {
    bed = parseInt(newScore) - 1;
    $('#bed_text').html(bed);
  }
  countComfort();
  return bed;
});

$('#bathroom_plus').on('click', function() {
  let newScore = $('#bathroom_text').html();
  bathroom = parseInt(newScore) + 1;
  $('#bathroom_text').html(bathroom);
  countComfort();
  return bathroom;
});

$('#bathroom_minus').on('click', function() {
  let newScore = $('#bathroom_text').html();
  if (newScore > 0) {
    bathroom = parseInt(newScore) - 1;
    $('#bathroom_text').html(bathroom);
  }
  countComfort();
  return bathroom;
});

