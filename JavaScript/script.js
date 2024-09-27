
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
    spørsmål:"In LOTR, how many members make up the fellowship of the ring?",
        svar:["10","8","7","9"],
        riktigSvar:"9",
        picture: "../bilder/Gandalf.jpg"

},{
    spørsmål:"Who is the scarecrow in howls moving castle?",
    svar:["Howl","Prince Justin","Markl","Calcifer"],
    riktigSvar:"Prince Justin"  ,
    picture: "../bilder/movingcastle.jpg"
},{
    spørsmål:"What sport does the queen play in Alice in wonderland?",
    svar:["Cricket","Golf","Putt-putt","Badminton"],
    riktigSvar:"Cricket",
    picture: "../bilder/alice-in-wonderland.jpg"
},{
    spørsmål:"How many Pirates of the Caribbean movies are there?",
    svar:["5","6","4","7"],
    riktigSvar:"5"  ,
    picture: "../bilder/sea.jpg"
},{
    spørsmål:"Who is Spidermans girlfriend?",
    svar:["Julia","Jessica May","Marilyn","Mary Jane"],
    riktigSvar:"Mary Jane"  ,
    picture: "../bilder/new_york_city.jpg"
},{
    spørsmål:"Who's planet does The little prince visit first?",
    svar:["The conceited man","The king","The businessman","The geographer"],
    riktigSvar:"The king" ,
    picture: "../bilder/la-petit-prince.jpg"
},{
    spørsmål:"Who is the youngest girl in My neightbor Totoro?",
    svar:["Rin","Aoi","Satsuki","Mei"],
    riktigSvar:"Mei",
    picture: "../bilder/totoro.jpg"
},{
    spørsmål:"What is Deadpools real name?",
    svar:["Wade Wilson","Ryan Reynolds","James Howlett","Hugh Jackman"],
    riktigSvar:"Wade Wilson"  ,
    picture: "../bilder/renolds.jpg"
},{
    spørsmål:"Hvilket år kom Flåklypa Grand Prix ut?",
    svar:["1970","1974","1975","1978"],
    riktigSvar:"1975"  ,
    picture: "../bilder/Kjell.jpg"
},{
    spørsmål:"Who is Black Beauty's friend?",
    svar:["Duchess","Merrylegs","Ginger","Rory"],
    riktigSvar:"Ginger",
    picture: "../bilder/blackhorse.jpg"
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