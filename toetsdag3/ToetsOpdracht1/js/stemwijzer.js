var eensButton = document.getElementById('eensButton');
var oneensButton = document.getElementById('oneensButton');
var submitButton = document.getElementById('submitButton');
var vraagzin = document.getElementById('vraagzin');
var counter = 0;
var eensCounter = 0;
var oneensCounter = 0;



var vragenLijst = ["Nederland moet terug naar de Gulden",
					"Er moet meer geld naar ontwikkelingshulp",
					"De overheid moet afslanken",
					"De AOW leeftijd moet terug naar 67 jaar",
					"Wietteelt moet worden gelegaliseerd",
					"We moeten minder geld aan het leger uitgeven",
					"Alle werkenden moeten minder loonbelasting betalen",
					"er moet dit gebeuren in nederland",
					"nog een stelling van iets relevants"]


vraagzin.innerHTML = vragenLijst[0];



function startTest(testcount) {
	if (eensButton.checked == true) {
		eensCounter++;
	}
	else if (oneensButton.checked == true) {
		oneensCounter++;
	}
	else {
		console.log("fout")
	}
	
	if (counter < 7){
		counter++
		vraagzin.innerHTML = vragenLijst[testcount];
	}
	else if (counter == 7){
		submitButton.innerHTML = "voltooien";
		counter++;
	}
	else{
		finalScore()
	}
}

function finalScore(){
	eensButton.style.display = "none";
	oneensButton.style.display = "none";
	submitButton.style.display = "none";
	vraagzin.innerHTML = "je hebt " + eensCounter + " keer op eens gestemt.<br>jouw partei is: "
}