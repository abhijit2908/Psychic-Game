var usrinput;
var wins=0;
var alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var Losses=0;
var Guessesleft=9;
var letterguessed= [];
var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];
document.onkeyup = function(event){
	usrinput=event.key;
	console.log(usrinput);
	console.log(computerGuess);

	if(usrinput===computerGuess){
		wins++;
		Guessesleft=9;
		letterguessed=[];
		console.log(wins);
		console.log(Guessesleft);
		computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];
	}
	else if(usrinput!== computerGuess){
		Guessesleft--;
		letterguessed.push(usrinput);
		console.log(Guessesleft);
		console.log("Guesses so far" ,letterguessed);
			if (Guessesleft === 0) {
				Losses++;
				Guessesleft=9;
				letterguessed=[];
				console.log(Losses);
				computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];
			}
	}

var html=
"<h1>The Psychic Game</h1>"+
"<p>Guess what letter I'm thinking of</p>"+
"<p>Wins:"+wins+"</p>"+
"<p>Losses:"+Losses+"</p>"+
"<p>Guessesleft:"+Guessesleft+"</p>"+
"<p>Guesss so far:"+letterguessed+"</p>";
document.querySelector("#game").innerHTML = html;
}


