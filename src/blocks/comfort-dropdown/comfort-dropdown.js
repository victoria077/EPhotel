var bedroom = 0;
var bed = 0; 
var bathroom = 0;
$('#bedroom_plus').on('click', function() {
  let newScore = $('#bedroom_text').html();
  bedroom = parseInt(newScore) + 1;
  $('#bedroom_text').html(bedroom);
  return bedroom;
});

$('#bedroom_minus').on('click', function() {
  let newScore = $('#bedroom_text').html();
  if (newScore > 0) {
    bedroom = parseInt(newScore) - 1;
    $('#bedroom_text').html(bedroom);
  }
  return bedroom;
});

$('#bed_plus').on('click', function() {
  let newScore = $('#bed_text').html();
  bed = parseInt(newScore) + 1;
  $('#bed_text').html(bed);
  return bed;
});

$('#bed_minus').on('click', function() {
  let newScore = $('#bed_text').html();
  if (newScore > 0) {
    bed= parseInt(newScore) - 1;
    $('#bed_text').html(bed);
  }
  return bed;
});

$('#bathroom_plus').on('click', function() {
  let newScore = $('#bathroom_text').html();
  bathroom = parseInt(newScore) + 1;
  $('#bathroom_text').html(bathroom);
  return bathroom;
});

$('#bathroom_minus').on('click', function() {
  let newScore = $('#bathroom_text').html();
  if (newScore > 0) {
    bathroom = parseInt(newScore) - 1;
    $('#bathroom_text').html(bathroom);
  }
  return bathroom;
});


$('#comfort-clean').on('click', function() {
  $('#bedroom_text').html(0);
  $('#bed_text').html(0);
  $('#bathroom_text').html(0);
  $('#comfort-button').html('Удобства');
  bedroom = 0;
  bed = 0; 
  bathroom = 0;
});

$('#comfort-apply').on('click', function() {
    $('#comfort-button').html(bedroom + ' '+ 'спален' + ',' + ' ' + bed + ' ' + 'кровати' + '...');
});
