
// window.onload = function(){
  
//     var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
//     $('.cdp_i').on('click', function(){
//       var go = $(this).attr('href').replace('#!', '');
//       if (go === '+1') {
//         paginationPage++;
//       } else if (go === '-1') {
//         paginationPage--;
//       }else{
//         paginationPage = parseInt(go, 10);
//       }
//       $('.cdp').attr('actpage', paginationPage);
//     });
//   };

  // $( function() {
  //   $( "#slider-range" ).slider({
  //     range: true,
  //     min: 1000,
  //     max: 15000,
  //     values: [ 5000, 10000 ],
  //     slide: function( event, ui ) {
  //       $( "#amount" ).val( "₽" + ui.values[ 0 ] + " - ₽" + ui.values[ 1 ] );
  //     }
  //   });
  //   $( "#amount" ).val( "₽" + $( "#slider-range" ).slider( "values", 0 ) +
  //     " - ₽" + $( "#slider-range" ).slider( "values", 1 ) );
  // } );

  $(document).ready(function() { 
    $(".close").click(function() { 
        $("#sidebar").hide();
        $("#left-side").width("0")
        if($(window).width() < 600){
          $(".right-side").show();
          $(".right-side").width("100%")
        }
    }); 
    $(".slide").click(function() { 
      $("#sidebar").show();
      $("#left-side").css("display", "block");
      $("#left-side").addClass("show");
      $("#left-side").width("100%");
      if($(window).width() < 600){
        $(".right-side").hide();
        $(".right-side").width("0");
      }
  });  
}); 


// window.onload = function(){
//   console.log("kkkkk")
//   function closeSideBar(){
//     document.getElementById("sidebar").style.width = "0";
//     document.getElementById("left-side").style.marginLeft = "0";
//     console.log("fgfhg");
//   }


//   function openSideBar(){
//     document.getElementById("sidebar").style.width = "250px";
//     document.getElementById("left-side").style.marginLeft = "250px";
//   }
// }