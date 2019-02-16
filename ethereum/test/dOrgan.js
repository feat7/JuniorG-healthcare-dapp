var dOrgan = artifacts.require("./dOrgan.sol");

contract('dOrgan', function(accounts) {
    it("Admin", function(done) {
        dOrgan.deployed().then(function(instance){
            console.log(instance.getAdmin);
            return instance.getAdmin.call().then(function (response){
                assert.isTrue(response === accounts[0]);
                done();
            });
        });
    });
});