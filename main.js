// $(document).on('ready', function() {
  
// });

// $(".b1").click (function() {
// 	console.log("Herrow");
// 	$("body").append("Hey There!");
// });

// $(".b2").click (function(){
//  $("body").append("<h1> YYYeaaaaaahhh </h1>");
// });

// $(".b3").click (function(){
//  $("body").append("<ul><li>zoey</li><li>is</li><li>amazing</li></ul>");
// });

// // $("p").mouseover(function(){
// //  $(this).css("color","pink");
// // }).mouseout(function(){
// //  $(this).css("color","black");
// // });

// $("p").hover(function(){
//  $(this).css("color","pink");
// }, function(){
//  $(this).css("color","black");
// });

// $(document).on ('ready',function(){
//  $(".heading").append("<em>!</em>")
// });


// $(".link").click(function(){
//  var meow = confirm("Are you sure?");
// 	if (meow === false){
//  	$(this).remove();
// 	} 
//  return meow;
// });
//..............................start big button

$('.button').click(function(){
  $('body').append('<div class="backdrop"><div class="box"> Light box<div class="close"><button>X</button></div></div></div>');
  	$('.close').click(function(){
  		$('.backdrop').remove();
  	});
});



