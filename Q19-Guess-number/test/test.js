const assert = require('assert');

const helper = require('../helper');

/**
 * tirer un entier aleatoire (X) compris entre 0 et 100 : OK
 * decider si un nombre donné est >, < ou = à (X) : OK
 * demander à l'utilisateur de rentre un nbre | IN
 * afficher la decision si le nbre donné est >,< ou = à X | OUT
 */

describe('PlusMinus Game', function () {
    it('random(): should generate a random integer between 0 and 100', function (done) {
        for (let index = 0; index < 100000; index++) {
            let X = helper.random();
            assert.equal(X > 0 && X < 100, true);
            assert.equal(Number.isInteger(X), true);
        }
        done();
    });

    it('decide(): should return "-" if the given number is less than X', function (done) {
        let X = 20;
        let userInput = 10;
        assert.equal(helper.decide(X, userInput), '-');
        done();
    });

    it('decide(): should return "+" if the given number is more than X', function (done) {
        let X = 20;
        let userInput = 30;
        assert.equal(helper.decide(X, userInput), '+');
        done();
    });

    it('decide(): should return "=" if the given number is equal to X', function (done) {
        let X = 20;
        let userInput = 20;
        assert.equal(helper.decide(X, userInput), '=');
        done();
    });
});