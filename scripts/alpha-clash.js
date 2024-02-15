// function play(){
//     // hide home section on button click 
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show game section on button click
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')

//     // console.log(playGroundSection.classList);

// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    // stop the game if the player preessed esc

    if (playerPressed === 'Escape') {
        gameOver();
    }

    if (playerPressed === 'Enter') {
        hideElementById('home-screen');
        showElementById('play-ground');
        hideElementById('final-score');
        
        
    

    }





    //get the expected to press
    const currentalphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentalphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    //check if the player pressed the correct alphabet
    if (playerPressed === expectedAlphabet) {
        console.log('you got it right');

        const currentScore = getTextElementValueById('current-score');
        const upDatedScore = currentScore + 1;
        setTextelementValueById('current-score', upDatedScore);


        // -------------------------------------------------------------------
        // update score (1)get current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore);
        // // (2)increase the score by 1
        const newScore = currentScore + 1;
        // // (3) show updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('you got it wrong');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextelementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver()

        }


        // // get curren life number
        // const currentLifeElement = document.getElementById('current-life');
        // const curentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(curentLifeText);
        // // reduce the life count
        // const newLife = currentLife - 1;
        // // diplay the updated life count
        // currentLifeElement.innerText = newLife;
    }

}





document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    // generate random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Random alphabet: ', alphabet);

    // set randomly generated alphabet to screen
    const currentalphabetElement = document.getElementById('current-alphabet');
    currentalphabetElement.innerText = alphabet;

    //set bg color
    setBackgroundColorById(alphabet)
}



function play() {

    // hide everything except the play ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextelementValueById('current-life', 5);
    setTextelementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    const lastSCore = getTextElementValueById('current-score');
    console.log(lastSCore);
    setTextelementValueById('last-score', lastSCore)

    // clear the last selected alphabet
    const CurrentAlphabet = elementTextById('current-alphabet');
    console.log(CurrentAlphabet);
    removeBackgroundColorById(CurrentAlphabet)

}