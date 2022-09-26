// #f4f9f8 triad white bg id: polygon33
// #2b3e48 triad border color


var br = "<br />";
var hr = "<hr />";
var text_head = document.getElementById("text_head");
var text_body = document.getElementById("text_body");
var list_start = "<ul>";
var list_end = "</ul>";
var list_el_start = "<li>";
var list_el_end = "</li>";


// ------------------------------------------------------------------------------------------------------

var personal_head = "Math. Manga. JRPGs."
var personal_body = (
	hr 
	+ "Hello. My name doesn't translate to a pun and I have nothing witty to say here." +br
	+ "I am currently pursuing my <b>Bachelor in Science (Research)</b> from the <b>Indian Institute of Science</b>. "
	+ "I will be majoring in <b>Mathematics</b> and expect to graduate by 2026." + br
	+ "I do some:" + br
	+ "-> competitive programming(barely)" + br 
	+ "-> web design(judge me yourself lol)" + br
	+ "-> pixel art" + br
	+ hr
	+ "Some interesting facts about me:" + br
	+ "-> My favourite manga are Vinland Saga and Jujutsu Kaisen" + br
	+ "-> Favourite JRPG - NieR: Automata"+br
	+ "-> Favourite MMORPG - Final Fantasy XIV: A Realm Reborn" + br
	+ "-> My favourite font is Ubuntu" + br 
	+ "-> I do not have a second favourite font" + br
	+ hr
	+ "Email me: <a href = \"umang.zerodawn0d@gmail.com\">umang.zerodawn0d@gmail.com</a>"+br
	+ "Github: <a href = \"https://github.com/ZeroDawn0D\">ZeroDawn0D</a>"+br

	);

var personal = document.getElementById("personal");
personal.onclick = function(){
	text_head.innerHTML = personal_head;
	text_body.innerHTML = personal_body;
}

// ------------------------------------------------------------------------------------------------------

var uni_head = "University stuff."
var uni_body = (
	hr
	+ "-> In 11th Grade I qualified for the KVPY Scholarship to pursue my undergraduate research studies in India" + br
	+ "-> <a id = \"kvpy_link\" href = \"http://www.kvpy.iisc.ernet.in/main/index.htm\">KVPY Website</a>"
	+ hr
	+ "Semester 1 (October 2022 - )"+br
	+ list_start

	+ list_el_start 
	+ "UM101: Analysis and Linear Algebra I"+br
	+ list_el_end 
	
	+ list_el_start 
	+ "UB101: Introductory Biology I (Organismal Biology and Molecular Basis of Life"+br
	+ list_el_end
	
	+ list_el_start 
	+ "UC101: Physical Principles of Chemistry"+br
	+ list_el_end
	
	+ list_el_start 
	+ "UP101: Introductory Physics I (Mechanics, Oscillations and Waves)"+br
	+ list_el_end
	
	+ list_el_start 
	+ "UH101: Ways of Knowing"+br
	+ list_el_end
	
	+ hr
	);

var uni = document.getElementById("uni");
uni.onclick = function(){
	text_head.innerHTML = uni_head;
	text_body.innerHTML = uni_body;	
}

// ------------------------------------------------------------------------------------------------------

var work_head = "Work stuff."
var work_body = (
	hr
	+ "R Project for Statistical Computing (Dec 2019 - Present)"+br
	+ "-> Won Google Code-in 2019 in 10th grade for my work with the R Project. Won an all-expense-paid trip to Google, San Francisco which eventually got cancelled because of COVID-19" + br
	+ "-> Selected for Google Summer of Code 2022 in 12th grade for the R Project. "
	+ "I created an R package to compute the Delaunay Triangulation of a set of 2D points in C++ and R."+br
	+ hr
	);

var work = document.getElementById("work");
work.onclick = function(){
	text_head.innerHTML = work_head;
	text_body.innerHTML = work_body;
}

// ------------------------------------------------------------------------------------------------------
text_head.innerHTML = personal_head;
text_body.innerHTML = personal_body;