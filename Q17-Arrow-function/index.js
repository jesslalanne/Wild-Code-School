const profile = {
    name : 'Jess',
    getName : () => name = profile.name
}

console.log('Nom du profil (avec this.) : ' + profile.getName(this.name));

console.log(`Nom du profil (sans this.) : ${profile.getName()} `);

