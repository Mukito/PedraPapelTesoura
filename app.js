let userScore = 0;
let compScore = 0;

//variaveis DOM
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const pedra_div = document.getElementById("r");
const papel_div = document.getElementById("p");
const tesoura_div = document.getElementById("t");

//funcao para a escolha do computador
function getCompEscolha(){
    const escolhas = ['r', 'p', 't'];
    const randomNumber = Math.floor(Math.random() * 3);
    return escolhas[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "PEDRA";
    if (letter === "p") return "PAPEL";
    if (letter === "t") return "TESOURA";
}

function vence(userEscolha, compEscolha){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userEscolha)} ${smallUserWord} Batidas ${convertToWord(compEscolha)} ${smallCompWord}. Você VENCEU!!!`
    //document.getElementById(userEscolha).classList.add('green-glow');
    //setTimeout(function() { document.getElementById(userEscolha).classList.remove('green-glow')}, 400)
}

function perde(userEscolha, compEscolha){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();    
    result_p.innerHTML = `${convertToWord(userEscolha)} ${smallUserWord} Batidas ${convertToWord(compEscolha)} ${smallCompWord}. Você PERDEU!!!`
    //document.getElementById(compEscolha).classList.add('red-glow');
    //setTimeout(function() { document.getElementById(compEscolha).classList.remove('red-glow')}, 400)
}

function empata(userEscolha, compEscolha){ 
    //userScore_span.innerHTML = userScore;
    //compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();    
    result_p.innerHTML = `${convertToWord(userEscolha)} ${smallUserWord} Batidas ${convertToWord(compEscolha)} ${smallCompWord}. EMPATE!!!`
    //document.getElementById(empateEscolha).classList.add('gray-glow');
    //setTimeout(function() { document.getElementById(empateEscolha).classList.remove('gray-glow')}, 400)
}

//função jogo
function jogo(userEscolha){
    const compEscolha = getCompEscolha();
    switch (userEscolha + compEscolha){
        case "rt":
        case "pr":
        case "tp":
            vence(userEscolha, compEscolha); 
            break;    
        case "rp":
        case "pt":
        case "tr":
            perde(userEscolha, compEscolha);
            break;
        case "rr":
        case "pp":
        case "tt": 
            empata(userEscolha, compEscolha);            
            break;
    }
}


function main(){

    pedra_div.addEventListener('click', function(){
        jogo("r");       
    })
    
    papel_div.addEventListener('click', function(){
        jogo("p");        
    })
    
    tesoura_div.addEventListener('click', function(){
        jogo("t");        
    })
    
}

main();






