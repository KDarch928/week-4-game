var crystalImg = ["assets/images/Arena_Crystal.png", "assets/images/Crystal_alliance.png", "assets/images/Crystal_generic4.png", "assets/images/Crystal_multi_spiderman_black.png"];



for (var i = 0; i < 4; i++){
	    var imageCrystal = $("<img>");

		imageCrystal.addClass("crystal-image");

		imageCrystal.attr("height", "100");
		imageCrystal.attr("type","button");
		imageCrystal.attr("class", "btn btn-default btn-transparent");

	    imageCrystal.attr("src", crystalImg[i]);
	    $("#crystals").append(imageCrystal);

	}

