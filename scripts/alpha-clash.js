
function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;

    //key player is expected to press
    const currentAlphabetElements = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElements.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check match or not
    if(playerPressed === expectedAlphabet){
        console.log('You got a point');
        console.log('You have pressed currently', expectedAlphabet);
        //update score
        // 1.get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScoreText);
        // 2.increase the score
        const newScore = currentScore + 1;
        // 3.show the update score
        currentScoreElement.innerText = newScore;
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('missed point');
        // step 1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        console.log(currentLifeText);
        //step 2: reduce the count
        const life = currentLife - 1;
        //step 3: display the updated life count
        currentLifeElement.innerText = life;
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
    
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