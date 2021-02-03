

//hier maak ik alle vars die ik nodig ga hebben

var eensButton = document.getElementById('btnEens');
var oneensButton = document.getElementById('btnOneens');
var submitButton = document.getElementById('btnVolgende');
var vraagzin = document.getElementById('stelling');
var buttonNav = document.getElementById('buttons');
var huidig = null
var counter = 0;
var eensCounter = 0;

//hier geef ik de buttons een onclick, die er voor zorgt dat de huidig gekozen optie groen word

eensButton.onclick = function(){pressed(1)};
oneensButton.onclick = function(){pressed(2)};
submitButton.onclick = function(){startTest()};


//afhankelijk van welke button gedrukt is gaat de var genaamd huidig naar true fals of neutraal.
//huidig geeft aan welke butten/optie de gebruiker op dit moment heeft gekozen

function pressed(num){
	if (num == 1) {
		eensButton.style.background = "green";
		oneensButton.style.background = "grey";
		huidig = true;
		submitButton.style.display = "inline-block"
	}
	else if (num == 2) {
		eensButton.style.background = "grey";
		oneensButton.style.background = "green";
		huidig = false;
		submitButton.style.display = "inline-block"
	}
	else {
		eensButton.style.background = "grey";
		oneensButton.style.background = "grey";
		huidig = null;
		submitButton.style.display = "none"
	}
}

//hier zorg ik dat huidig meteen op null staat, zodat de opties neutraal starten

pressed(0)

//hier maak ik de vragenlijst aan.

var vragenLijst = ["Nederland moet terug naar de Gulden",
					"Er moet meer geld naar ontwikkelingshulp",
					"De overheid moet afslanken",
					"De AOW leeftijd moet terug naar 67 jaar",
					"Wietteelt moet worden gelegaliseerd",
					"We moeten minder geld aan het leger uitgeven",
					"Alle werkenden moeten minder loonbelasting betalen",
					"er moet dit gebeuren in nederland",
					"nog een stelling van iets relevants"]

//hier begint de daadwerkelijke quiz

function startTest() {

//eerst kijk ik wat de gebruiker als optie had toen hij op de volgende button klikte
//als dit true is heeft de gebruiker eens gekozen en gaat de de tel van eensCounter omhoeg.
//bij false krijg je een console log dat er geen counter omhoog is gegaan en de gebruik oneens koos.

	if (huidig == true) {
		eensCounter++;}
	else {
		console.log("oneens")}

//dan reset ik de buttons weer en zet ik huidig op null

	pressed(0)

//dan check ik op welke vraag we zitten met de counter var

	if (counter < 7){
		counter++;
		vraagzin.innerHTML = vragenLijst[counter];
	}

//als de counter onder de zeven zit is er niks aan de hand en laat hij gewoon de volgende vraag zien

	else if (counter == 7){
		submitButton.innerHTML = "voltooien";
		counter++;
		vraagzin.innerHTML = vragenLijst[counter]
	}

//als de count op zeven is maakt hij van de verder button een voltooien button

	else if (counter > 7){
		finalScore()
	}

//en als de counter boven de 7 zit, geeft hij geen volgende vraag meer weer, maar gaat hij naar de score

}

function finalScore(){

//eerst ga ik alle elementen verbergen

	eensButton.style.display = "none";
	oneensButton.style.display = "none";
	submitButton.style.display = "none";
	vraagzin.style.display = "none";

//dan check ik hoeveel eens is gekozen en maak ik op basis daarvan een var met daarin het resultaat

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


//dan maak ik en header aan om het resultaat te laten zien

	var finalText = document.createElement("h1");
	finalText.innerHTML = "U heeft " + eensCounter + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is " + partei + "."

	finalText.style.textAlign = "center";
	finalText.style.fontWeight = "bold";
	finalText.style.fontSize = "20px";

//en als laatste verschijnt het resultaat op het scherm

	buttonNav.appendChild(finalText)
}
