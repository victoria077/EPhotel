

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

