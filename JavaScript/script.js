
const questionText =document.getElementById("question");
const nesteKnapp = document.getElementById("next");
const valgKnapper = document.getElementById("options");
const currentPicture =document.getElementById("myPicture")

/*_________________________________________*/

    nesteKnapp.addEventListener("click" , event => {
        spørmålIndex++
        if (spørmålIndex < questions.length){
            displayQuestion();}
        else {            
            let myText= document.getElementById("myText");
            myText.innerHTML= "Gratulerer du fikk " + score + " av "+spørmålIndex+" mulige poeng!\n Vill du spille igjen?";
            const rpScreen= document.getElementById("endScreen");
            rpScreen.style.backgroundColor = "rgb(255 127 127)"
            
            const playAgain = document.createElement("button");
            playAgain.innerHTML = "Play again"
            document.getElementById("replay").append(playAgain)
            playAgain.addEventListener("click", ()=>{
             window.location.reload();
            })
            hideQuiz()
        }
       });


/*_________Array_med_spørsmål___________________*/

const questions = [{
    spørsmål:"How many members make up the fellowship of the ring?",
        svar:["10","8","7","9"],
        riktigSvar:"9",
        picture: "../bilder/Gandalf.jpg"

}  ,{
    spørsmål:"spørsmål 2",
    svar:["e","f","g","h"],
    riktigSvar:"h"  ,
    picture: "../bilder/movingcastle.jpg"
}];
/*_________________________________________*/

let spørmålIndex = 0;
let score = 0;

/*________Funksjoner____________*/

function quiz(){
 spørmålIndex = 0;
 score = 0;
 displayQuestion();
}

function displayQuestion() {
    let currentQuestion = questions[spørmålIndex];

    questionText.innerHTML = currentQuestion.spørsmål;
    
    currentPicture.src = currentQuestion.picture;
    
    valgKnapper.innerHTML = ""; 

    for (let i = 0; i < currentQuestion.svar.length; i++) {

        const button = document.createElement("button");
        button.innerHTML = currentQuestion.svar[i];

        button.setAttribute("class", "valg");
        valgKnapper.appendChild(button);
        button.addEventListener("click",svarSkjekk);
         

    }

}


function svarSkjekk(event){
    if (event.target.textContent === questions[spørmålIndex].riktigSvar) {
        event.target.style.backgroundColor = "lightgreen";
        score++
    } else {
        event.target.style.backgroundColor = "rgb(255 127 127)";
    }

    const buttons = document.querySelectorAll(".valg");
    buttons.forEach(button => {
        button.removeEventListener("click", svarSkjekk);
    });
}

function hideQuiz(){
    document.getElementById("optionContainer").style.display = "none";
    nesteKnapp.style.display= "none";
    questionText.style.display="none";
    document.getElementById("myPicture").style.display="none";
}
quiz();