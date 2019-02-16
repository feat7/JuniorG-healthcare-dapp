var Web3 = require('web3');
const dorgan_artifact = require('../build/contracts/dOrgan.json');

const ethers = require('ethers');

let web3Provider = ethers.getDefaultProvider('ropsten');
let contractAddress = "0xAeBC7188a0EE7eCf67eCbaa03c3C0f32a7615AF4";

var dOrgan =  new ethers.Contract(contractAddress, dorgan_artifact['abi'], web3Provider);

var web3Provider1 = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/34db7aa51a29454db3a3b3b68abd92ca");
var web3 = new Web3(web3Provider1);

module.exports = {
    getAdmin: function () {
        var meta;
        dOrgan.deployed().then(function(instance) {
            meta = instance;
            console.log(meta);
            return meta.getAdmin({from: web3.eth.defaultAccount})
                .then(function(result) {
                    console.log(result);
                    return result;
                }).catch(function(e) {
                    console.log(e);
                    return e;
                })
        }).catch(function(e) {
            console.log(e);
            return e;
        });
    }
};
