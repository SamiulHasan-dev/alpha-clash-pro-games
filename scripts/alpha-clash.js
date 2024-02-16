
function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;

    //key player is expected to press
    const currentAlphabetElements = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElements.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check match or not
    if(playerPressed === expectedAlphabet){
        console.log('You got a point');
    }
    else{
        console.log('missed point');
    }
}


document.addEventListener('keyup',handleKeyboardKeyupEvent);

function continueGame(){
    //step 1: generate a random alphabet
    const  alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet',alphabet);

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