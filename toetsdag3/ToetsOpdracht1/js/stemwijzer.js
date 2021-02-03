var eensButton = document.getElementById('btnEens');
var oneensButton = document.getElementById('btnOneens');
var submitButton = document.getElementById('btnVolgende');
var vraagzin = document.getElementById('stelling');
var huidig = null
var counter = 0;
var eensCounter = 0;


eensButton.onclick = function(){pressed(1)};
oneensButton.onclick = function(){pressed(2)};
submitButton.onclick = function(){startTest()};


function pressed(num){
	if (num == 1) {
		eensButton.style.background = "green";
		oneensButton.style.background = "grey";
		huidig = true;
		submitButton.style.display = "inline"
	}
	else if (num == 2) {
		eensButton.style.background = "grey";
		oneensButton.style.background = "green";
		huidig = false;
		submitButton.style.display = "inline"
	}
	else {
		eensButton.style.background = "grey";
		oneensButton.style.background = "grey";
		huidig = null;
		submitButton.style.display = "none"
	}
}

pressed(0)


var vragenLijst = ["Nederland moet terug naar de Gulden",
					"Er moet meer geld naar ontwikkelingshulp",
					"De overheid moet afslanken",
					"De AOW leeftijd moet terug naar 67 jaar",
					"Wietteelt moet worden gelegaliseerd",
					"We moeten minder geld aan het leger uitgeven",
					"Alle werkenden moeten minder loonbelasting betalen",
					"er moet dit gebeuren in nederland",
					"nog een stelling van iets relevants"]


function startTest() {
	if (huidig == true) {
		eensCounter++;}
	else {
		console.log("oneens")}

	pressed(0)
	
	if (counter < 7){
		counter++;
		vraagzin.innerHTML = vragenLijst[counter];
	}
	else if (counter == 7){
		submitButton.innerHTML = "voltooien";
		counter++;
		vraagzin.innerHTML = vragenLijst[counter]
	}
	else if (counter > 7){
		finalScore()
	}
}

function finalScore(){
	eensButton.style.display = "none";
	oneensButton.style.display = "none";
	submitButton.style.display = "none";

	if (eensCounter >= 8) {
		var partei = "d66"
	}
	else if (eensCounter >= 5) {
		var partei = "pvda"
	}
	else if (eensCounter >= 2) {
		var partei = "vvd"
	}
	else {
		var partei = "cda"
	}

	vraagzin.innerHTML = "U heeft " + eensCounter + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is " + partei + "."
}