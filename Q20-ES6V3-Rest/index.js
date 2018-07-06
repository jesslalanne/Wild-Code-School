const address = {
	city: "Bordeaux",
	state: "FR",
	zip: 33000
};

const sportList = ['Krav Maga', ' Escrime']
const otherSportList = [' Boxe', ' Kung Fu']

function display({ city }, sportList, otherSportList = [], ...rest){
	let sports = [...sportList, ...otherSportList, ...rest];
	
	console.log(`Dans la ville de ${city}, tu peux pratiquer les sports suivants : ${sports}`);
}

display(address, sportList, otherSportList);