
window.onload = function(){
  
    var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
    $('.cdp_i').on('click', function(){
      var go = $(this).attr('href').replace('#!', '');
      if (go === '+1') {
        paginationPage++;
      } else if (go === '-1') {
        paginationPage--;
      }else{
        paginationPage = parseInt(go, 10);
      }
      $('.cdp').attr('actpage', paginationPage);
    });
  };

  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1000,
      max: 15000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "₽" + ui.values[ 0 ] + " - ₽" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "₽" + $( "#slider-range" ).slider( "values", 0 ) +
      " - ₽" + $( "#slider-range" ).slider( "values", 1 ) );
  } );


