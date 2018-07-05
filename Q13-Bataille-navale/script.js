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

const BOAT_ONE = {'b4':0, 'b5':0, 'b6':0, 'total':0};
const BOAT_TWO = {'d9':0, 'e9':0, 'f9':0, 'total':0};

const LIEU = $("#canon");


LIEU.keyup((k) => {
    if (k.key === 'Enter') {
        LIEUValue = LIEU.val().toLowerCase();

        $("#" + LIEUValue).css({
            'background-color': 'red'
    	});

	    touche = false;
	    coule = false;

	    if(BOAT_ONE[LIEUValue] === 0) {
	        BOAT_ONE[LIEUValue] = 1;
	        BOAT_ONE['total']++;
	        touche = true;
	        if(BOAT_ONE['total'] === 3) {
	            coule = true;
	        }
	    }

	    if(BOAT_TWO[LIEUValue] === 0) {
	        BOAT_TWO[LIEUValue] = 1;
	        BOAT_TWO['total']++;
	        touche = true;
	        if(BOAT_TWO['total'] === 3) {
	            coule = true;
	        }
	    }

	    if (BOAT_ONE['total'] === 3 && BOAT_TWO['total'] === 3) {
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
