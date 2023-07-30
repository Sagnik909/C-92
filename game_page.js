question_turn = "player1";
answer_turn = "player2";

var player1_name = localStorage.getItem("playerName_1");
var player2_name = localStorage.getItem("playerName_2");
document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function send(){
    question_word = document.getElementById("word").value;
    word = question_word.toLowerCase();
    c1 = word.charAt(1);
    console.log(c1);
    mp = Math.floor(word.length/2);
    c2 = word.charAt(mp);
    l = word.length-1;
    c3 = word.charAt(l);
    r1 = word.replace(c1,"_");
    r2 = r1.replace(c2,"_");
    r3 = r2.replace(c3,"_");
    final_word = "<h4 id='word_display'>Q. " + r3+"</h4>";
    input_box = "<br>Answer: <input id='input_check_box' type='text'>";
    check_button = "<br><br><button id='btn btn-info' onclick='check()'>Check</button>"
    row = final_word  + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = " ";
}
function check(){
    getAnswer = document.getElementById("input_check_box").value;
    Answer = getAnswer.toLowerCase();
    
    if (Answer == word){
        if (answer_turn == "player2"){
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else{
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }
    if (question_turn == "player1"){
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
        question_turn = "player2";
    }
    else{
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
        question_turn = "player1";
    }
    if (answer_turn == "player2"){
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
        answer_turn = "player1";
    }
    else{
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
        answer_turn = "player2";
    }
    document.getElementById("output").innerHTML = " ";
    
}
