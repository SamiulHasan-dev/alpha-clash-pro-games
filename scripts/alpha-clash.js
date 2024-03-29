
function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;
    console.log(playerPressed);

    //stop game if press esc
    if(playerPressed === 'Escape'){
        gameOver();
    }
    //key player is expected to press
    const currentAlphabetElements = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElements.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check match or not
    if(playerPressed === expectedAlphabet){
        console.log('You got a point');
        console.log('You have pressed currently', expectedAlphabet);

        const currentScore = getTextElementValueByID('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);

        //-------------------
        //update score
        // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScoreText);
        // // 2.increase the score
        // const newScore = currentScore + 1;
        // // 3.show the update score
        // currentScoreElement.innerText = newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('missed point');

        const currentLife = getTextElementValueByID('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);


        if(updatedLife === 0){
            gameOver();
        }



        //---------------------
        // update life
        // // step 1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLifeText);
        // //step 2: reduce the count
        // const life = currentLife - 1;
        // //step 3: display the updated life count
        // currentLifeElement.innerText = life;
    }
}


document.addEventListener('keyup',handleKeyboardKeyupEvent);

function continueGame(){
    //step 1: generate a random alphabet
    const  alphabet = getARandomAlphabet();
    // console.log('Your Random Alphabet',alphabet);

    //randomly alphabet showing in screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet'); 
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
    
}

function play(){
    //hide everything show only play ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();

    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score', 0);
    
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    // 1. get the final score
    const lastScore = getTextElementValueByID('current-score');
    console.log(lastScore);
    setTextElementValueById('game-score',lastScore);

    //clear the last selected alphabet 
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}


// function play(){
//     //step 1: hide the home screen  to hide the screen add the class hidden to the home section

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     //show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // console.log(playGround.classList)
// }