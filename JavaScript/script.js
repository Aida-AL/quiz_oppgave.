
const questionText =document.getElementById("question");
const nesteKnapp = document.getElementById("next");
const valgKnapper = document.getElementById("options");

/*_________________________________________*/

nesteKnapp.addEventListener("click" , event => {
    
   });
/*_________Array_med_spørsmål___________________*/

const questions = [{
    spørsmål:"spørsmål 1",
        svar:["a","b","c","d"],
        riktigSvar:"b"
}  ,{
    spørsmål:"spørsmål 2",
    svar:["e","f","g","h"],
    riktigSvar:"h"  
}];
/*_________________________________________*/

let spørmålIndex = 0;
let score = 0;

/*________Funksjoner____________*/

function quiz(){
 spørsmålIndex = 0;
 score = 0;
 displayQuestion();
}

function displayQuestion() {
    let currentQuestion = questions[spørsmålIndex];

    questionText.innerHTML = currentQuestion.spørsmål;

    valgKnapper.innerHTML = ""; 

    for (let i = 0; i < currentQuestion.svar.length; i++) {

        const button = document.createElement("button");
        button.innerHTML = currentQuestion.svar[i];

        button.setAttribute("class", "valg");
        valgKnapper.appendChild(button);
        button.addEventListener("click",svarSkjekk)
    }
}

function svarSkjekk(event){
    if (event.target.textContent == questions[spørsmålIndex].riktigSvar){
      console.log("Riktig!")}
    else{
     console.log("feil")
        }
}