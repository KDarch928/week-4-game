//creating image variables
var crystalImg = ["assets/images/Arena_Crystal.png", "assets/images/Crystal_alliance.png", "assets/images/Crystal_generic4.png", "assets/images/Crystal_multi_spiderman_black.png"];

//setting up the crystal images
for (var i = 0; i < 4; i++){
	    var imageCrystal = $("<img>");

		imageCrystal.addClass("crystal-image");

		imageCrystal.attr("height", "100");
		imageCrystal.attr("type","button");
		imageCrystal.attr("class", "btn btn-default btn-transparent");
		imageCrystal.attr("id", "crystalBtn-"+i);

	    imageCrystal.attr("src", crystalImg[i]);
	    $("#crystals").append(imageCrystal);

}

$(document).ready(function() {

	//creating variables
	var ranImgNum = 0;
	var targetNumber = 0;
	var results = 0;
	var win = 0;
	var lose = 0;
	var btn1;
	var btn2;
	var btn3;
	var btn4;


	//addition function
	function add(num) {
	    results += num
	}

	// random number generator for the image between 1 and 12
	function ranImgNumGenerator() {
		ranImgNum = Math.floor(Math.random() * 12) + 1;
	    return ranImgNum;
	}

	//random number generator for display screen between 19 and 120
	function ranNumGenerator() {
	    targetNumber = Math.floor(Math.random() * 102) + 19;
		console.log(targetNumber);
		$("#display").text(targetNumber);
	}

	//
	function addRanNumToBtn(){
		btn1 = ranImgNumGenerator();
		btn2 = ranImgNumGenerator();
		btn3 = ranImgNumGenerator();
		btn4 = ranImgNumGenerator();
	}

	ranNumGenerator();
	addRanNumToBtn();


	$("#crystalBtn-0").on("click",function() {
		add(btn1);
		console.log(btn1);
		resultDisplay();
		checkGameStatus();
	});

	$("#crystalBtn-1").on("click", function () {
		add(btn2);
		console.log(btn2);
		resultDisplay();
		checkGameStatus();
	});

	$("#crystalBtn-2").on("click", function () {
		add(btn3);
		console.log(btn3);
		resultDisplay();
		checkGameStatus();
	});

	$("#crystalBtn-3").on("click", function () {
		add(btn4);
		console.log(btn4);
		resultDisplay();
		checkGameStatus();
	});

	function resultDisplay(){
		$("#result").text(results);
	}

	function winDisplay(){
		win += 1;
		$("#win").text(win);
	}

	function loseDisplay() {
		lose += 1;
		$("#lose").text(lose);
	}

	function messageDisplay(msg){
		$("#display-message").text(msg);
	}

	function resetGame() {
		ranNumGenerator();
		addRanNumToBtn();
		results = 0;
		resultDisplay();
	}

	function checkGameStatus(){
		if (results === targetNumber) {

			winDisplay();
			messageDisplay("You Win!");
			resetGame();
		}

		else if (results >= targetNumber) {
			loseDisplay();
			messageDisplay("You Lose!");
			resetGame();
		}
	}
});

