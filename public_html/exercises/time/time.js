$(document).ready(function(){

console.log('ready');

$('#b, #bArea').hover(function (){
	$("#b").toggleClass("hovered");
	$('#bArea').animate({opacity:"1"}, 50).siblings().animate({opacity:"0"}, 50);
	//$('#d, #dArea, #f, #fArea, #h, #hArea').stop();
	}, 
	function(){;
	$("#b").toggleClass("hovered");
	$('#bArea').animate({opacity:"0.4"}, 125).siblings().animate({opacity:"0.4"}, 500);
	});
$('#d, #dArea').hover(function (){
	$("#d").toggleClass("hovered");
	$('#dArea').animate({opacity:"1"}, 125).siblings().animate({opacity:"0"}, 50);
	//$('#b, #bArea, #f, #fArea, #h, #hArea').stop();
	}, 
	function(){;
	$("#d").toggleClass("hovered");
	$('#dArea').animate({opacity:"0.4"}, 125).siblings().animate({opacity:"0.4"}, 500);
	});
$('#f, #fArea').hover(function (){
	$("#f").toggleClass("hovered");
	$('#fArea').animate({opacity:"1"}, 125).siblings().animate({opacity:"0"}, 50);
	//$('#b, #bArea, #d, #dArea, #h, #hArea').stop();
	}, 
	function(){;
	$("#f").toggleClass("hovered");
	$('#fArea').animate({opacity:"0.4"}, 125).siblings().animate({opacity:"0.4"}, 500);
	});
$('#h, #hArea').hover(function (){
	$("#h").toggleClass("hovered");
	$('#hArea').animate({opacity:"1"}, 125).siblings().animate({opacity:"0"}, 50);
	//$('#b, #bArea, #d, #dArea, #f, #fArea').stop();
	}, 
	function(){;
	$("#h").toggleClass("hovered");
	$('#hArea').animate({opacity:"0.4"}, 125).siblings().animate({opacity:"0.4"}, 500);
	});

$('#timeline, #plot').hover(function (){
	$('#line').animate({opacity:"1"}, 250);
	},
	function(){;
	$('#line').animate({opacity:"0"}, 250);
	});

$('.1700').hover(function(){
	$('#line').animate({left:"0%"}, 50);
	});
$('.1715').hover(function(){
	$('#line').animate({left:"5%"}, 50);
	});
$('.1730').hover(function(){
	$('#line').animate({left:"10%"}, 50);
	});
$('.1745').hover(function(){
	$('#line').animate({left:"15%"}, 50);
	});
$('.1800').hover(function(){
	$('#line').animate({left:"20%"}, 50);
	});
$('.1815').hover(function(){
	$('#line').animate({left:"25%"}, 50);
	});
$('.1830').hover(function(){
	$('#line').animate({left:"30%"}, 50);
	});
$('.1845').hover(function(){
	$('#line').animate({left:"35%"}, 50);
	});
$('.1900').hover(function(){
	$('#line').animate({left:"40%"}, 50);
	});
$('.1915').hover(function(){
	$('#line').animate({left:"45%"}, 50);
	});
$('.1930').hover(function(){
	$('#line').animate({left:"50%"}, 50);
	});
$('.1945').hover(function(){
	$('#line').animate({left:"55%"}, 50);
	});
$('.2000').hover(function(){
	$('#line').animate({left:"60%"}, 50);
	});
$('.2015').hover(function(){
	$('#line').animate({left:"65%"}, 50);
	});
$('.2030').hover(function(){
	$('#line').animate({left:"70%"}, 50);
	});
$('.2045').hover(function(){
	$('#line').animate({left:"75%"}, 50);
	});
$('.2100').hover(function(){
	$('#line').animate({left:"80%"}, 50);
	});
$('.2115').hover(function(){
	$('#line').animate({left:"85%"}, 50);
	});
$('.2130').hover(function(){
	$('#line').animate({left:"90%"}, 50);
	});
$('.2145').hover(function(){
	$('#line').animate({left:"95%"}, 50);
	});






}); //close document ready function