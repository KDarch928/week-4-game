//creating image variables
var crystalImg = ["assets/images/Arena_Crystal.png", "assets/images/Crystal_alliance.png", "assets/images/Crystal_generic4.png", "assets/images/Crystal_multi_spiderman_black.png"];

//setting up the crystal images
for (var i = 0; i < 4; i++){
	    var imageCrystal = $("<img>");

		imageCrystal.addClass("crystal-image");

		imageCrystal.attr("height", "100");
		imageCrystal.attr("type","button");
		imageCrystal.attr("class", "btn btn-default btn-transparent");

	    imageCrystal.attr("src", crystalImg[i]);
	    $("#crystals").append(imageCrystal);

}

// //addition function
// function add(num){
// 	results += num
// }

// // random number generator for the image between 1 and 12
// function ranImgNumGenerator(){
// 	ranImgNum = Math.floor(Math.floor() * 12) + 1;
// 	console.log(ranImgNum);
// }

// //random number generator for display screen between 19 and 120
// function ranNumGenerator() {
// 	ranDisplayNum = Math.floor(Math.floor() * 102) + 19;
// 	console.log(ranDisplayNum);
// }

// if (ranDisplayNum === null){
// 	ranDisplayNum = ranNumGenerator();
// 	console.log(ranDisplayNum);
// }

$(document).ready(function() {

	//creating variables
	var ranImgNum = 0;
	var ranDisplayNum;
	var results = 0;

	//addition function
	function add(num) {
	    results += num
	}

	// random number generator for the image between 1 and 12
	function ranImgNumGenerator() {
	    ranImgNum = Math.floor(Math.random() * 12) + 1;
	    console.log(ranImgNum);
	}

	//random number generator for display screen between 19 and 120
	function ranNumGenerator() {
	    ranDisplayNum = Math.floor(Math.random() * 102) + 19;
	    console.log(ranDisplayNum);
	}
	console.log(ranNumGenerator());

	if (ranDisplayNum === null) {
	    ranDisplayNum = ranNumGenerator();
	    console.log(ranDisplayNum);
	}
});

