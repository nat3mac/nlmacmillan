$(document).ready(function(){
console.log('ready');

//reveal content
$('#rightPocket').click(function(){
	$('#wrapper').css({"top":"0px", "transition-timing-function":"ease", "transition":"3s"});
	$('#zippo').css({"top":"48px", "transition":"2.5s", "transition-timing-function":"ease-in", "margin-left":"-110px" });
	$('#pencils').css({"display":"block"});
	}); //close tag click function

//to pencils
$('#forwardPencil').click(function(){
	//reveal back button
	$('#backLighter').css({"display":"block", "transition":"1s"});
	//remove lighter
	$('#zippo').css({"left":"-999px", "transition":"2s"});
	//hide pencil button
	$('#forwardPencil').css({"display":"none"});
	//show shades button
	$('#forwardShades').css({"display":"block"});
	$('#shades').css({"display":"block"});
	//place pencils
	$('#pencils').css({"overflow":"visible", "margin-left":"-210px", "top":"64px", "left":"50%", "transition":"2s"});
	$('#rightPocket').unbind();
	}); //close forwardPencil click function

//return to lighter
$('#backLighter').click(function(){
	$('#zippo').css({"left":"50%", "transition":"1s"});
	$('#forwardPencil').css({"display":"block"});
	$('#backLighter').css({"display":"none"});
	$('#forwardShades').css({"display":"none", "transition":"1s"});
	$('#pencils').css({"left":"1920px", "transition":"1s"});
	}); //close backLighter click function

//to shades
$('#forwardShades').click(function(){
	console.log('to shades');
	//reveal back button
	$('#backPencil').css({"display":"block"});
	//remove pencils
	$('#pencils').css({"left":"-999px", "transition":"2s"});
	//hide shades button
	$('#forwardShades').css({"display":"none"});
	$('#backLighter').css({"display":"none"});
	//show tool button
	$('#forwardTool').css({"display":"block"});
	$('#leatherman').css({"display":"block"});
	//place shades
	$('#shades').css({"overflow":"visible", "margin-left":"-532px", "transform":"rotate(-90deg)", "top":"330px", "left":"50%", "transition":"2s"});
	}); //close forwardShades click function
	
//return to pencils
$('#backPencil').click(function(){
	$('#pencils').css({"left":"50%", "transition":"1s"});
	$('#forwardShades').css({"display":"block"});
	$('#backPencil').css({"display":"none"});
	$('#backLighter').css({"display":"block"});
	$('#forwardPencil').css({"display":"none"});
	$('#forwardTool').css({"display":"none"});
	$('#shades').css({"left":"1920px", "transition":"1s"});
	}); //close backLighter click function

//to leatherman
$('#forwardTool').click(function(){
	console.log('to leatherman');
	$('#backShades').css({"display":"block"});
	$('#shades').css({"left":"-999px", "transition":"2s"});
	$('#forwardTool').css({"display":"none"});
	$('#backLighter').css({"display":"none"});
	$('#backPencil').css({"display":"none"});
	$('#reload').css({"display":"block"});
	$('#leatherman').css({"overflow":"visible", "margin-left":"-280px","top":"96px", "left":"50%", "transform":"rotate(0deg)", "transition":"2s"});
	});

//return to shades
$('#backShades').click(function(){
	$('#shades').css({"left":"50%", "transition":"1s"});
	$('#forwardTool').css({"display":"block"});
	$('#backPencil').css({"display":"block"});
	$('#backLighter').css({"display":"none"});
	$('#backShades').css({"display":"none"});
	$('#forwardPencil').css({"display":"none"});
	$('#reload').css({"display":"none"});
	$('#leatherman').css({"left":"1920px", "transition":"1s"});
	}); //close backShades click function

//lighter
$('#zippo').click(function(){
	console.log('zippo clicked');
	//open lid	
    $('#lighterLid').css({"transform":"rotate(120deg)","transition":".5s", "transition-timing-function":"ease-out"});
    //flame
    $('#lighterFlame').css({"height":"180px", "transition":".5s", "transition-timing-function":"ease-in"});
    }); //close zippo click function

//pencils
$('#pencils').click(function(){
	console.log('pencils clicked');
	//fan
	$('#pRed').css({"transform":"rotate(-60deg)", "transition":"2s"});
	$('#pGold').css({"transform":"rotate(-30deg)", "transition":"1.5s"});
	$('#pGreen').css({"transform":"rotate(30deg)", "transition":"1.5s"});
	$('#pGrey').css({"transform":"rotate(60deg)", "transition":"2s"});
	});

//leatherman
$('#leatherman').click(function(){
	console.log('tool clicked');
	$('#tool1').css({"transform":"rotate(-15deg)","transition":".5s", "transition-timing-function":"ease"});
	$('#tool2').css({"transform":"rotate(15deg)","transition":".5s", "transition-timing-function":"ease"});
	});

//reload
$('#reload').click(function(){
	console.log('reload page');
	location.reload(true);
	});

}); //close document ready function