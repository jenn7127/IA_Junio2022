// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}



function test(states){
		if (cont===0){
			document.getElementById("log").innerHTML+="<br>Location: ".concat(states[0]).concat(" | Action: Initial state");
			document.getElementById("log").innerHTML+="<br>State A: ".concat(states[1]).concat(" | State B: ").concat(states[2]);
			document.getElementById("log").innerHTML+="<br>";
		}
		
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";	
		
		cont+=1;	

		if (cont===8){
			document.getElementById("log").innerHTML+="<br><br>All states were visited"
			return
		} else if (cont===4){
			document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
			states[0]="B"
			states[1]="DIRTY"
			states[2]="DIRTY"
			document.getElementById("log").innerHTML+="<br>State A: ".concat(states[1]).concat(" | State B: ").concat(states[2]);
			document.getElementById("log").innerHTML+="<br>";
		}else{
			document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
			document.getElementById("log").innerHTML+="<br>State A: ".concat(states[1]).concat(" | State B: ").concat(states[2]);
			document.getElementById("log").innerHTML+="<br>";
		}


	setTimeout(function(){ test(states); }, 2000);
	
}

var cont=0;
var states = ["A","DIRTY","DIRTY"];
test(states);
