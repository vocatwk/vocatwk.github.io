$(document).ready(function() {

//(window).on('load', function() {
   //$("#cover").hide();


$("#mybutton").on("mouseover",function() {
	$("#mybutton").html("<br><strong> I love Huskies! </strong>");
	
})

$("h1").on('mouseover', function() {
  $("h1").animate({ "font-size" : "40px" ,}, 400)
  .animate({ "letter-spacing" : "10px" }, 1000);



//$("#mybutton").on("click", function() {
  $("#mybutton").toggleClass("#mybutton");
})//

$("#vidbut").on("click",function(){ $(".myimg").after("<a href=https://www.youtube.com/watch?v=Ubj6CY2T0Nc>");


})

$("h1").on("click",function(){ $("h1").toggleClass("toggleex");



})


});

