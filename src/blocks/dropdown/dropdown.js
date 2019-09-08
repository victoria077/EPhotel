let valueAd, valueChild, valueBaby;
$("#adult_plus").on("click", function(){
    var newScore = $("#adult_text").html();
    valueAd = parseInt(newScore) + 1;
    $("#adult_text").html(valueAd); 
    return valueAd;
})

$("#adult_minus").on("click", function(){
  
    var newScore = $("#adult_text").html();
    if(newScore > 0) {
    valueAd = parseInt(newScore) - 1;
    $("#adult_text").html(valueAd); }
    return valueAd;
  }                       
)

$("#child_plus").on("click", function(){
    var newScore = $("#child_text").html();
    valueChild= parseInt(newScore) + 1;
    $("#child_text").html(valueChild); 
    return valueChild;
})

$("#child_minus").on("click", function(){
    var newScore = $("#child_text").html();
   if(newScore > 0) {
    valueChild = parseInt(newScore) - 1;
    $("#child_text").html(valueChild); }
    return valueChild;
  }                       
)

$("#baby_plus").on("click", function(){
    var newScore = $("#baby_text").html();
    valueBaby = parseInt(newScore) + 1;
    $("#baby_text").html(valueBaby); 
    return valueBaby;
})

$("#baby_minus").on("click", function(){
    var newScore = $("#baby_text").html();
   if(newScore > 0) {
    valueBaby = parseInt(newScore) - 1;
    $("#baby_text").html(valueBaby); }
    return valueBaby;
  }                       
)

$("#clean").on("click", function(){
  $("#baby_text").html(0); 
  $("#child_text").html(0); 
  $("#adult_text").html(0); 
});

$("#clean").on("click", function(){
  $("#baby_text").html(0); 
  $("#child_text").html(0); 
  $("#adult_text").html(0); 
});