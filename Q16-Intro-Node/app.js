process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('Quel est ton âge ? ')
process.stdin.on('data', (age) => {
	if(isNaN(age)) {
        console.log('Tu dois saisir un nombre')
        console.log('Quel est ton âge ? ')
    } else if (age>=100) {
		console.log('Tu ne peux pas être centenaire')
		console.log('Quel est ton âge ? ')
	} else {
	dateNaissance = 2018 - age
	noAnniv = dateNaissance-1
  console.log('Ton année de naissance est : ' + dateNaissance + '... sauf si ton anniversaire n\'est pas encore passé alors tu es né(e) en : ' + noAnniv)
  process.exit()
	}
})