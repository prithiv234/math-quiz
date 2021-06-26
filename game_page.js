 player1= localStorage.getItem("p1name");
 player2= localStorage.getItem("p2name");

 player1_score=0;
 player2_score=0;

 document.getElementById("player1_name").innerHTML=player1+" : "
 document.getElementById("player2_name").innerHTML=player2+" : "

 document.getElementById("player1_score").innerHTML=player1_score;
 document.getElementById("player2_score").innerHTML=player2_score;
 document.getElementById("player_question").innerHTML="question turn - "+player1;
 document.getElementById("player_answer").innerHTML="answer turn - "+player2;

 function Send() {
     get_number1=document.getElementById("n1").value;
     get_number2=document.getElementById("n2").value;
     answer= parseInt(get_number1)*parseInt(get_number2)

     question_number = "<h4> Q."+get_number1+"X"+ get_number2+"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
      row = question_number + input_box + check_button ;
      document.getElementById("output").innerHTML = row;
      document.getElementById("number1").value = "";
      document.getElementById("number2").value = "";
 }
 q_turn="p1";a_turn="p2"
 function check(){
    get_answer=document.getElementById("input_check_box").value;
    if (answer==get_answer){
        if (a_turn=="p1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score; 
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(q_turn=="p1"){
        q_turn="p2";
        a_turn="p1";
        document.getElementById("player_question").innerHTML="question turn - "+player2;
        document.getElementById("player_answer").innerHTML="answer turn - "+player1;
    }
    else{
        q_turn="p1";
        a_turn="p2";
        document.getElementById("player_question").innerHTML="question turn - "+player1;
        document.getElementById("player_answer").innerHTML="answer turn - "+player2;
    }
 }