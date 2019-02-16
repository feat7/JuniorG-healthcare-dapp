const web3 = require( '../web3' );

const dorgan_artifact = require('../build/contracts/dOrgan.json');

const ethers = require('ethers');

let web3Provider = ethers.getDefaultProvider('ropsten');
let contractAddress = "0x46283B7AC41939e73DDB63030BC5fdD2fDB24E33";

let privateKey = '0x31b52c32c3aa048dde03def434300b90f4a39f4f97ac3ea0bf8619ce4a6df8e1';
let wallet = new ethers.Wallet(privateKey, web3Provider);

var dOrgan =  new ethers.Contract(contractAddress, dorgan_artifact['abi'], wallet);

module.exports = {
    getAdmin: async function() {
        return dOrgan.getAdmin({from: web3.eth.defaultAccount})
                .then(function(result) {
                    return result;
                }).catch(function(e) {
                    return e;
                });
    },
    setAdmin: async function(address) {
        return dOrgan.setAdmin(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "sucess";
            }).catch(function(e) {
                return e;
            });
    },

    addReciever: async function(address,priority) {
        return dOrgan.addReciever(address,priority)
            .then(function() {
                return "sucess";
            }).catch(function(e) {
                return e;
            });
    },
    getRecievers: async function() {
        return dOrgan.getRecievers({from: web3.eth.defaultAccount})
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    updateReciever: async function(oldAddr,newAddr) {
        return dOrgan.updateReciever(oldAddr,newAddr,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getTransplanted: async function(address) {
        return dOrgan.getTransplanted(address,{from: web3.eth.defaultAccount})
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    addRecieverToWaitlist: async function(address) {
        return dOrgan.addRecieverToWaitlist(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    removeRecieverFromWaitlist: async function(address) {
        return dOrgan.removeRecieverFromWaitlist(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getPriority: async function() {
        return dOrgan.getPriority(address,{from: web3.eth.defaultAccount})
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    changePriority: async function(address,priority) {
        return dOrgan.changePriority(address,priority,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    verifyRecieverByAdmin: async function(address) {
        return dOrgan.verifyRecieverByAdmin(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getVerificationRecieverByAdmin: async function(address) {
        return dOrgan.getVerificationRecieverByAdmin(address,{from: web3.eth.defaultAccount})
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },

    addLiveDonor: async function(address) {
        return dOrgan.addLiveDonor(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getLiveDonors: async function() {
        return dOrgan.getLiveDonors({from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    removeLiveDonor: async function(address) {
        return dOrgan.removeLiveDonor(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    updateLiveDonor: async function(oldAddr,newAddr) {
        return dOrgan.updateLiveDonor(oldAddr,newAddr,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    approveLiveTransplant: async function(address) {
        return dOrgan.approveLiveTransplant(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    removeLiveTransplantApproval: async function(address) {
        return dOrgan.removeLiveTransplantApproval(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getVerificationLiveDonorByAdmin: async function(address) {
        return dOrgan.getVerificationDeadLiveByAdmin(address,{from: web3.eth.defaultAccount})
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    verifyLiveDonorByAdmin: async function(address) {
        return dOrgan.verifyLiveDonorByAdmin(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },

    addDeadDonor: async function(address) {
        return dOrgan.addDeadDonor(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getDeadDonors: async function() {
        return dOrgan.getDeadDonors({from: web3.eth.defaultAccount})
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    removeDeadDonor: async function(address) {
        return dOrgan.removeDeadDonor(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    updateDeadDonor: async function(oldAddr,newAddr) {
        return dOrgan.updateDeadDonor(oldAddr,newAddr,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    approveDeadTransplant: async function(address) {
        return dOrgan.approveDeadTransplant(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    removeDeadTransplantApproval: async function(address) {
        return dOrgan.removeDeadTransplantApproval(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getKidnies: async function(address) {
        return dOrgan.getKidnies(address,{from: web3.eth.defaultAccount})
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    getVerificationDeadDonorByAdmin: async function(address) {
        return dOrgan.getVerificationDeadDonorByAdmin(address,{from: web3.eth.defaultAccount})
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    verifyDeadDonorByAdmin: async function(address) {
        return dOrgan.verifyDeadDonorByAdmin(address,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },

    transplantLiveDonor: async function(recAddr,donorAddr) {
        return dOrgan.transplantLiveDonor(recAddr,donorAddr,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    transplantDeadDonor: async function(recAddr,donorAddr) {
        return dOrgan.transplantDeadDonor(recAddr,donorAddr,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getTransplant: async function(recAddr) {
        return dOrgan.getTransplant(recAddr,{from: web3.eth.defaultAccount})
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    }
};
