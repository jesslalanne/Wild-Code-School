const monster = require('./monster');

const jess = new monster.Monster({options:'Jess'});
const vandekamp = new monster.MonsterMini({options:'Vandekamp'});

jess.getName();
jess.getHealth();
jess.heal();
jess.getHealth();

vandekamp.getName();
vandekamp.getHealth();
vandekamp.heal();
vandekamp.getHealth();