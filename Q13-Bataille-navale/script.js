// Met à jour le message affiché à l´adversaire à chaque nouvelle
// lettre saisie dans l´input ´Mon nom´
$("#moi").keyup(function(event) {
    var myName = $("#moi").val();
    $("#megaphone").text(promptMessage(myName));
});

// Génère le message diffusé à l´adversaire
function promptMessage(playerName) {
    if (playerName.length > 0) {
        return ">> " + playerName + " va attaquer en ...";
    } else {
        return "> En attente d'un joueur";
    }
}

let boatOne = {'b4':0, 'b5':0, 'b6':0, 'total':0};
let boatTwo = {'d9':0, 'e9':0, 'f9':0, 'total':0};

let lieu = $("#canon");


lieu.keyup((k) => {
    if (k.key === 'Enter') {
        lieuValue = lieu.val().toLowerCase();

        $("#" + lieuValue).css({
            'background-color': 'red'
    	});

	    touche = false;
	    coule = false;

	    if(boatOne[lieuValue] === 0) {
	        boatOne[lieuValue] = 1;
	        boatOne['total']++;
	        touche = true;
	        if(boatOne['total'] === 3) {
	            coule = true;
	        }
	    }

	    if(boatTwo[lieuValue] === 0) {
	        boatTwo[lieuValue] = 1;
	        boatTwo['total']++;
	        touche = true;
	        if(boatTwo['total'] === 3) {
	            coule = true;
	        }
	    }

	    if (boatOne['total'] === 3 && boatTwo['total'] === 3) {
	        $("#history").append('<br />WIN');
	        $("#no-mans-land").css({'background-color':'white', 'background-image':'url("https://casimg.com/w/articles-attachments/1/599/ee735b0783.png")'});
	    } else if (coule) {
	        $("#history").append('<br />COULE');
	    } else if (touche) {
	        $("#history").append('<br />TOUCHE');
	    } else {
	        $("#history").append('<br />PLOUF');
	    }
	}
})
