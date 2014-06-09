console.log("reading js");

//Display current date
window.onload=printToday;

function printToday() {
	var today = new Date();
	var year = document.getElementById("year");
	year.innerHTML = today.getFullYear();
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
	var mvalue = today.getMonth();	
	curMonth = months[mvalue];
	var month = document.getElementById("month");
	month.innerHTML = curMonth;
	var day = document.getElementById("day");
	day.innerHTML = today.getDate();
	}
	


//capture the submit event
document.f.onsubmit=process;

//define process function
function process(){
	console.log("process initiated");

	var userName=document.f.userName.value;

	var adj1=document.f.adj1.value;
	
	var adj2=document.f.adj2.value;
	
	var adj3=document.f.adj3.value;
	
	var amount=document.f.amount.value;

	var noun1=document.f.noun1.value;
	
	var person=document.f.person.value;
	
	var myMsg=document.getElementById("myMsg");
	
	//Gender Pronouns
	var persPro;
	var posPro;
	var gender=document.f.gender.value;
	
	if (gender=="female")
		{
		persPro="she";
		posPro="her";
		console.log("female selected");
		}
	else if (gender=="male")
		{
		persPro="he";
		posPro="his";
		console.log("male selected");
		}
	else
		{
		persPro='zhe';
		posPro='hir';
		}
	
	//Elements
	var method;
	var elem=document.f.element.value;
	
	if (elem=='earth')
		{
		method='lowered deep into the ground beside ' + posPro + ' ancestors in their ' + adj3 + ' burial plot.';
		}
	else if (elem=='air')
		{
		method='shot into space like the ' + adj3 + ', sky-faring folk of ' + posPro + ' homeland.';
		}
	else if (elem=='fire')
		{
		method='cremated and the ashes placed into an urn of ' + adj3 + ' quality.';
		}
	else if (elem=='water')
		{
		method='buried at sea, as is the way of ' + posPro + adj3 + ', seafaring ancestors.';
		}
	else
		{
		method='disposed of.'
		}
	
	//push new html to myMsg
	myMsg.innerHTML="Herein lies the last will and testament of " + userName + ",<br><br> Let it be known that " + posPro + " death was " + adj1 + " and " + adj2 + ". The funeral is to be held no more than " + amount%14 + " days from the time that " + persPro + " died, at which point " + posPro + " body is to be " + method + " Over " + posPro + " life, " + userName + " accumulated many treasures, including " + posPro + " most cherished " + noun1 + ", which is to be bequeathed to " + person + " along with the wishes that they may treasure it as much as " + persPro + " has for all these years. The remaining estate of $" + amount*312.5 + "0 is to be divided amongst " + posPro + " friends and family as this legal counsel sees fit.";
	
	//prevent page from reloading
	return false;
	}

