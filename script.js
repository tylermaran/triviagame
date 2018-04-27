
var qBank = [
	"What three countries share a border with North Korea?",
	"What is the name for the branch of mathematics dealing with lengths and angles of triangles.",
	"Who was the first U.S. president that was born a citizen of the United States?",
	"Which book holds the record of being the most stolen book from public libraries?",
	"In 1796 Edward Jenner developed the vaccination for what disease?",
	"Florence Nightingale aided the sick and wounded during which war?",
	"Cinco de Mayo celebrates the Mexican army’s 1862 victory over France in what battle?",
	"Which scientist is considered the father of modern genetics?",
	"The port city of Luanda is the capital city of which African country?",
	"What is the brand name for the product that has a mascot of a muscular man with a shaved head and an earring?"
]

var aBank = [
	"China, Russia, and South Korea",
	"Trigonometry",
	"Martin Van Buren",
	"Guinness Book of World Records",
	"Smallpox",
	"The Crimean War",
	"The Battle of Puebla",
	"Gregor Mendel",
	"Angola",
	"Mr. Clean"
]

var fBank1 =[
	"China, Mongolia, South Korea",
	"Geometry",
	"John Adams",
	"Steal this book",
	"Measels",
	"World War I",
	"The battle of Marathon",
	"Charles Darwin",
	"Rawanda",
	"Old Spice"
]

console.log("WHAAAAT");

$("document").ready(function startGame() {

	var startGame = $("<div>");
	var startMessage = $("<div>");
	startMessage.addClass("startMessage");
	startMessage.text("Ready to Play?");

	
	var startButton = $("<div>");
	startButton.attr("type","button");
	startButton.addClass("btn btn-primary");
	startButton.text("Play!");
	startButton.on("click", function() {
		playGame(0)
	});
	
	startGame.append(startMessage, startButton);

	$(".mainContent").append(startGame);

});


function playGame(q) {

	var count=10;

	var counter = setInterval(function() {
	function timer() {
  		count--;
  		if (count <= 0)
  			{
     			clearInterval(counter);
     			return checkAnswer("timeout", q);
     			
  			}
			  //Do code for showing the number of seconds here
			  // console.log(count);
			  $(".timerDiv").text(count);
		}
	}, 1000); 

	console.log("PLAAAAY");
	$(".mainContent").empty();

	var qdiv = $("<div>");
	
	var question = $("<div>");
	question.addClass("question");
	question.text(qBank[q]);

	var answer1 = $("<div>");
	answer1.attr("type","button");
	answer1.addClass("btn btn-primary");
	answer1.text(aBank[q]);
	answer1.on("click", function() {
		checkAnswer(this.textContent, q);
	});

	var answer2 = $("<div>");
	answer2.attr("type","button");
	answer2.addClass("btn btn-primary");
	answer2.text(fBank1[q]);
	answer2.on("click", function() {
		checkAnswer(this.textContent, q);
	});

	var timerDiv = $("<div>");
	timerDiv.addClass("timerDiv");

	qdiv.append(question, answer1, answer2, timerDiv);
	$(".mainContent").append(qdiv);


	function timer() {
  		count--;
  		if (count <= 0)
  			{
     			clearInterval(counter);
     			return checkAnswer("timeout", q);
     			
  			}
			  //Do code for showing the number of seconds here
			  // console.log(count);
			  $(".timerDiv").text(count);
		}

}


function checkAnswer(answer, q) {
	console.log(answer)
	if (answer === aBank[q]) {
		
		console.log("correct");
		playGame((q+1));
	}
	if (answer === "timeout") {
		console.log("Time has expired");
		playGame((q+1));
	}
	else {
		
		console.log("NOOOOPE");
		playGame((q+1));
	}
}