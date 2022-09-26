// #f4f9f8 triad white bg id: polygon33
// #2b3e48 triad border color


var br = "<br />";
var hr = "<hr />";
var text_head = document.getElementById("text_head");
var text_body = document.getElementById("text_body");



// ------------------------------------------------------------------------------------------------------

var personal_head = "Developer. Student. Weeb."
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
	+ "-> My favourite font is Ubuntu" + br 
	+ "-> I do not have a second favourite font" + br
	+ hr
	);

var personal = document.getElementById("personal");
personal.onclick = function(){
	text_head.innerHTML = personal_head;
	text_body.innerHTML = personal_body;
}

// ------------------------------------------------------------------------------------------------------

var sch_head = "Scholarships."
var sch_body = (
	hr
	+ "-> In 11th Grade I qualified for the KVPY Scholarship to pursue my undergraduate research studies in India" + br
	+ "-> \"The <b>Kishore Vaigyanik Protsahan Yojana (KVPY)</b> is an on-going National Program of Fellowship in Basic Sciences, initiated and funded by the <b>Department of Science and Technology, Government of India</b>, to attract exceptionally highly motivated students for pursuing basic science courses and research career in science.\"" + br
	+ "-> <a id = \"kvpy_link\" href = \"http://www.kvpy.iisc.ernet.in/main/index.htm\">KVPY Website</a>"
	+ hr
	+ "-> In 10th Grade I qualified the first stage of the <b>National Talent Search Examination</b>, then a small impediment happened in early 2020 by the name of COVID-19 and in the process (which involved date clashes with other examinations) I never appeared for the second stage :("
	+ hr
	);

var sch = document.getElementById("sch");
sch.onclick = function(){
	text_head.innerHTML = sch_head;
	text_body.innerHTML = sch_body;	
}

// ------------------------------------------------------------------------------------------------------

var osrc_head = "Open Source."
var osrc_body = (
	hr
	+ "-> Won Google Code-in 2019 in 10th grade for my work with the R Project for Statistical Computing. Won an all-expense-paid trip to Google, San Francisco which eventually got cancelled because of COVID-19" + br
	+ "-> Selected for Google Summer of Code 2022 in 12th grade for the R Project for Statistical Computing. I worked on Constrained Delaunay Triangulations in R."
	+ hr
	);

var osrc = document.getElementById("osrc");
osrc.onclick = function(){
	text_head.innerHTML = osrc_head;
	text_body.innerHTML = osrc_body;
}

// ------------------------------------------------------------------------------------------------------
text_head.innerHTML = personal_head;
text_body.innerHTML = personal_body;