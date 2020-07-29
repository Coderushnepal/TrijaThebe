var nameList = ['blue', 'red', 'purple', 'green', 'brown'];
var randomNames = nameList[Math.floor(Math.random() * nameList.length)];


var headingDiv = document.createElement('div');
var title = document.createElement('h1');
var subTitle = document.createElement('p');

headingDiv.id = 'headingDiv';
headingDiv.classList.add('headingDiv');

title.innerHTML = 'Hangman';
title.classList.add('title');


subTitle.innerHTML = 'Guess the Word.';

document.body.appendChild(headingDiv);
headingDiv.appendChild(title);
headingDiv.appendChild(subTitle);


var availableName = randomNames.split(''); 
var totalLetter = function() {
    for( var i=0; i < availableName.length; i++ ) {
        var createDiv = document.createElement('div');
        createDiv.classList.add('letters');
        var lettersToFill = document.getElementById('letterBlanks');
        lettersToFill.appendChild(createDiv);
    }
}
console.log(randomNames);
totalLetter();


var correctDiv = document.createElement('div');
correctDiv.id = 'correct';
correctDiv.classList.add('correct');
document.getElementById('storeLetters').appendChild(correctDiv);

var incorrectDiv = document.createElement('div');
incorrectDiv.id = 'incorrect';
incorrectDiv.classList.add('incorrect');
incorrectDiv.innerHTML = 'Wrong Word:';
document.getElementById('storeLetters').appendChild(incorrectDiv);

