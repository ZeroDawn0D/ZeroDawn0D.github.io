var br = "<br />";
var hr = "<hr />";
var text_head = document.getElementById("text_head");
var text_body = document.getElementById("text_body");



// ------------------------------------------------------------------------------------------------------

var personal_head = "Developer. Student. Weeb."
var personal_body = (
	hr 
	+ "Hello. My name doesn't translate to a pun and I have nothing witty to say here." +br
	+ "I graduated from my high school (Salt Lake School,Kolkata) in June, 2022." + br
	+ "I do some:" + br
	+ "-> competitive programming(barely)" + br 
	+ "-> web design(judge me yourself lol)" + br
	+ "-> mathematics" + br
	+ "-> and linguistics(failed to qualify the olympiad three years in a row)" + br
	+ hr
	+ "Some interesting facts about me:" + br
	+ "-> My favourite font is Ubuntu" + br 
	+ "-> I do not have a second favourite font" + br
	+ hr);

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
	+hr
	);

var sch = document.getElementById("sch");
sch.onclick = function(){
	text_head.innerHTML = sch_head;
	text_body.innerHTML = sch_body;	
}

// ------------------------------------------------------------------------------------------------------



text_head.innerHTML = personal_head;
text_body.innerHTML = personal_body;