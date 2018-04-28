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

var fBank1 = [
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

var fBank2 = [
	"Japan, China, South Korea",
	"Algebra",
	"John Kennedy",
	"The Bible",
	"Chicken Pox",
	"World War II",
	"Gettysburg",
	"Alexander Fleming",
	"South Africa",
	"Tide"
]

var interval = null;
var number = 0;

function startGame() {
	number = 0;
	$(".mainContent").empty();
	var startGame = $("<div>");
	var startMessage = $("<div>");
	startMessage.addClass("startMessage");
	startMessage.text("Ready to Play Trivia!?");

	var startButton = $("<div>");
	startButton.attr("type", "button");
	startButton.addClass("btn btn-primary");
	startButton.text("Play!");
	startButton.on("click", function () {
		playGame(0, true)
	});
	startGame.append(startMessage, startButton);
	$(".mainContent").append(startGame);
};

function playGame(q, correct) {
	var count = 10;
	var timesup = true;
	if (q === (qBank.length)) {
		return newGame(number);
	}
	interval = setInterval(function () {
		count--;
		if (count === 0) {
			clearInterval(interval);

			if (timesup) {
				return checkAnswer("timeout", q);
			} else {
				var answer = $("#chosen").text()
				return checkAnswer(answer, q)
			}
		} else {
			var timeLeft = $("<div>");
			timeLeft.addClass("timeLeft");
			timeLeft.text(count);
			$(".timerDiv").html(timeLeft);
		}
	}, 1000);

	$(".mainContent").empty();

	var qdiv = $("<div>");

	var question = $("<div>");
	question.addClass("question");
	question.text(qBank[q]);

	var answer1 = $("<div>");
	answer1.attr("type", "button");
	answer1.addClass("btn btn-primary");
	answer1.text(aBank[q]);
	answer1.on("click", function () {
		answer2.attr("id", "");
		answer3.attr("id", "");
		answer1.attr("id", "chosen");
		$(".resultsBar").text("You Sure?");
		timesup = false;
	});

	var answer2 = $("<div>");
	answer2.attr("type", "button");
	answer2.addClass("btn btn-primary");
	answer2.text(fBank1[q]);
	answer2.on("click", function () {
		answer1.attr("id", "");
		answer3.attr("id", "");
		answer2.attr("id", "chosen");
		$(".resultsBar").text("You Sure?");
		timesup = false;

	});

	var answer3 = $("<div>");
	answer3.attr("type", "button");
	answer3.addClass("btn btn-primary");
	answer3.text(fBank2[q]);
	answer3.on("click", function () {
		answer1.attr("id", "");
		answer2.attr("id", "");
		answer3.attr("id", "chosen");
		$(".resultsBar").text("You Sure?");
		timesup = false;
	});

	var timerDiv = $("<div>");
	timerDiv.addClass("timerDiv");

	var resultsBar = $("<div>");
	resultsBar.addClass("resultsBar");
	resultsBar.text(" ");

	qdiv.append(question, answer1, answer2, answer3, resultsBar, timerDiv);
	$(".mainContent").append(qdiv);

	if (q > 0) {
		if (correct) {
			number++;
			$(".resultsBar").text("You got it!");
			$(".resultsBar").attr("id", "correct");
		} else {

			$(".resultsBar").text("Nope!");
			$(".resultsBar").attr("id", "incorrect");
		}
	}
}

function checkAnswer(answer, q) {

	if (answer === aBank[q]) {
		playGame((q + 1), true);
	} else if (answer === "timeout") {
		playGame((q + 1), false);
	} else {
		playGame((q + 1), false);
	}
}

function newGame(number) {
	$(".mainContent").empty();
	var endDiv = $("<div>");
	var message = $("<div>");
	message.addClass("gameOver");
	message.text("Game over. You got " + number + " correct");

	var playAgain = $("<div>");
	playAgain.attr("type", "button");
	playAgain.addClass("btn btn-primary");
	playAgain.text("Play Again?");
	playAgain.on("click", function () {
		startGame();
	});
	endDiv.append(message, playAgain);

	$(".mainContent").append(endDiv);
}

$("document").ready(function () {
	startGame();
});