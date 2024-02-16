
function handleKeyboardKeyupEvent(event){
    const playerPress = event.key;
    console.log('player press:',playerPress);

    //get the expected to press
    const currentAlphabetElements = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElements.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPress, expectedAlphabet);

    // check match or not
    if(playerPress === expectedAlphabet){
        console.log('get a point');
    }
    else{
        console.log('you missed point');
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