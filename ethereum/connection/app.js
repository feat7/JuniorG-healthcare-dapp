const dorgan_artifact = require('../build/contracts/dOrgan.json');

const ethers = require('ethers');

let web3Provider = ethers.getDefaultProvider('ropsten');
let contractAddress = "0x23f98Bb23D495F7e2d9426Eb5f5094E865def3a2";

let privateKey = '0x31b52c32c3aa048dde03def434300b90f4a39f4f97ac3ea0bf8619ce4a6df8e1';
let wallet = new ethers.Wallet(privateKey, web3Provider);

var dOrgan =  new ethers.Contract(contractAddress, dorgan_artifact['abi'], wallet);

module.exports = {
    getAdmin: async function() {
        return dOrgan.getAdmin()
                .then(function(result) {
                    return result;
                }).catch(function(e) {
                    return e;
                });
    },
    setAdmin: async function(address) {
        return dOrgan.setAdmin(address)
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
    },             //done
    getRecievers: async function() {
        return dOrgan.getRecievers()
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },                            //done
    updateReciever: async function(oldAddr,newAddr) {
        return dOrgan.updateReciever(oldAddr,newAddr)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    addRecieverToWaitlist: async function(address) {
        return dOrgan.addRecieverToWaitlist(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getWaitlist: async function() {
        return dOrgan.getRecievers()
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    removeRecieverFromWaitlist: async function(address) {
        return dOrgan.removeRecieverFromWaitlist(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getPriority: async function() {
        return dOrgan.getPriority()
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    changePriority: async function(address,priority) {
        return dOrgan.changePriority(address,priority)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    verifyRecieverByAdmin: async function(address) {
        return dOrgan.verifyRecieverByAdmin(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getVerificationRecieverByAdmin: async function(address) {
        return dOrgan.getVerificationRecieverByAdmin(address)
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },

    addLiveDonor: async function(address) {
        return dOrgan.addLiveDonor(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },                    //done
    getLiveDonors: async function() {
        return dOrgan.getLiveDonors()
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },                          //done
    removeLiveDonor: async function(address) {
        return dOrgan.removeLiveDonor(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    updateLiveDonor: async function(oldAddr,newAddr) {
        return dOrgan.updateLiveDonor(oldAddr,newAddr)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    approveLiveTransplant: async function(address) {
        return dOrgan.approveLiveTransplant(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    removeLiveTransplantApproval: async function(address) {
        return dOrgan.removeLiveTransplantApproval(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getVerificationLiveDonorByAdmin: async function(address) {
        return dOrgan.getVerificationDeadLiveByAdmin(address)
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    verifyLiveDonorByAdmin: async function(address) {
        return dOrgan.verifyLiveDonorByAdmin(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },

    addDeadDonor: async function(address) {
        return dOrgan.addDeadDonor(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },                   //done
    getDeadDonors: async function() {
        return dOrgan.getDeadDonors()
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },                         //done
    removeDeadDonor: async function(address) {
        return dOrgan.removeDeadDonor(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    updateDeadDonor: async function(oldAddr,newAddr) {
        return dOrgan.updateDeadDonor(oldAddr,newAddr)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    approveDeadTransplant: async function(address) {
        return dOrgan.approveDeadTransplant(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    removeDeadTransplantApproval: async function(address) {
        return dOrgan.removeDeadTransplantApproval(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getKidnies: async function(address) {
        return dOrgan.getKidnies(address)
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    getVerificationDeadDonorByAdmin: async function(address) {
        return dOrgan.getVerificationDeadDonorByAdmin(address)
            .then(function(res) {
                return res;
            }).catch(function(e) {
                return e;
            });
    },
    verifyDeadDonorByAdmin: async function(address) {
        return dOrgan.verifyDeadDonorByAdmin(address)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },

    transplantLiveDonor: async function(recAddr,donorAddr) {
        return dOrgan.transplantLiveDonor(recAddr,donorAddr)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    transplantDeadDonor: async function(recAddr,donorAddr) {
        return dOrgan.transplantDeadDonor(recAddr,donorAddr)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getTransplant: async function(recAddr) {
        return dOrgan.getTransplant(recAddr)
            .then(function() {
                return "success";
            }).catch(function(e) {
                return e;
            });
    },
    getTransplants: async function() {
        return dOrgan.getTransplants()
            .then(function (res) {
                return res;
            }).catch(function (e) {
                return e;
            });
    },

    dOrgan: dOrgan
};
