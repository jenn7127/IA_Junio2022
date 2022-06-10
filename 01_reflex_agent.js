// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
		
	    document.getElementById("log").innerHTML+="<br>State A: ".concat(states[1]).concat(" | State B: ").concat(states[2]);
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";	
		document.getElementById("log").innerHTML+="<br>State A: ".concat(states[1]).concat(" | State B: ").concat(states[2]);
		cont+=1;	


	setTimeout(function(){ test(states); }, 2000);

}

var cont=0;
var states = ["A","DIRTY","DIRTY"];
var state1 = ["A","DIRTY","DIRTY"];
var state2 = ["B","DIRTY","DIRTY"];
test(states);
