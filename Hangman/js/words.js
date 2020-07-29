
var figurePart = document.getElementsByClassName('figure-part');
//storing guessed letter from users
var wordGuessed = new Set();
var wrongWords = new Set();
//comparing the guessed letters with the available words.
function compareLetters() {
    document.addEventListener ('keypress' , function(event) {
    	console.log(event.key);
        var enteredValue = event.key;
        wordGuessed.add(enteredValue);
        if (randomNames.includes (enteredValue))
        for (var j=0; j < randomNames.length; j++) {
            if (enteredValue == randomNames[j]) {
                correctLetters(enteredValue , j);
            } 
        }
            else {
                wrongWords.add(enteredValue);
            	IncorrectLetters(wrongWords);
        } 
    })
}
compareLetters();

//Filling the blanks with correct letter from users
function correctLetters(value, index) {
    const letterStored = document.getElementById('letterBlanks').children[index];
	letterStored.innerHTML = value;
}
//displaying incorrect letters.
function IncorrectLetters(wrongWords) {
    var wrongLetter = document.getElementById('incorrect');
    wrongLetter.innerHTML = "Wrong Guess" +': '+ Array.from(wrongWords).join(',');   //convert set to array
    document.body.appendChild(wrongLetter);

    displayFigureParts();
    gameover();  
}
//add the figure
var n = 0;
function displayFigureParts() {
    figurePart[n].style.visibility = 'visible';
    n++;
}
//alert message when game is over.
function gameover() {
	var resultDiv = document.createElement('div');
	resultDiv.id = 'result';
	resultDiv.classList.add('result');

	var btnGameOver = document.createElement('button');
	btnGameOver.id = 'btn-game-over';
	btnGameOver.classList.add('btn-game-over');
	btnGameOver.innerHTML = 'Try again';
	resultDiv.appendChild(btnGameOver);


	document.body.appendChild(resultDiv);


    var gameOver = document.getElementById('result');
    var playAgain = document.getElementById('btn-game-over');

    if(Array.from(wrongWords).length === figurePart.length) {    //convert set to array

        gameOver.innerHTML = 'Game Over!!';
        playAgain.innerHTML = 'Play Again';
		//display msg
        document.body.appendChild(gameOver);
        gameOver.appendChild(playAgain);
        gameOver.style.display = 'block';

        // Reload the browser window on button click
        playAgain.addEventListener('click' , function(){
            window.location.reload();
            gameOver.style.display = 'none';
        });

    } else {
        gameOver.style.display = 'none';
	}
}
