var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;

var Games = require('../../services/Games');
var redisGetStub = sinon.stub();
Games.setClient({
    get: redisGetStub
});

describe("Games", function() {
    describe("getGames", function() {
        it("should return all active games", function(done) {
            var expectedGames = [JSON.stringify({title: 'Test Game'}), JSON.stringify({title: 'Test Game2'})];
            redisGetStub.withArgs('games').callsArgWith(1, [1, 2]);
            redisGetStub.withArgs('game-1').callsArgWith(1, expectedGames[0]);
            redisGetStub.withArgs('game-2').callsArgWith(1, expectedGames[1]);
            var gamesStream = Games.getGames();
            gamesStream.subscribe((games) => {
                expect(games).to.deep.equal(expectedGames);
            }, (err) => {
                expect(err).to.equal(null);
            }, () => {
                done();
            });
        });
    });
});