// Solidity Version
pragma solidity >=0.4.26;

// Contract dOrgan
contract dOrgan{

    // Events
    event donorDead();

    // Structs
    struct Reciever{
        address patient;
        bool exist;
        bool verify;
        uint priority;
    }

    struct Donor{
        address donor;
        bool approve;
        bool exist;
        bool verify;
        bool live;
        uint kidnies;
    }

    struct Transplant{
        address reciever;
        address donor;
        bool exist;
    }

    // Global Variables
    address admin;
    address[] recieverArr;
    address[] liveDonorArr;
    address[] deadDonorArr;
    address[] transplantArr;
    address[] waitlistArr;

    // Mappings
    mapping(address => Reciever) recievers;
    mapping(address => Donor) liveDonors;
    mapping(address => Donor) deadDonors;
    mapping(address => Reciever) waitlist;
    mapping(address => Transplant) transplants;

    // Modifiers
    modifier verifyAdmin(){
        require(admin == msg.sender,"Your are not authorized");
        _;
    }

    modifier checkTransplantedExist(address addr){
        require(!transplants[addr].exist,"Already done Transplant");
        _;
    }

    modifier checkVerifyReciever(address addr){
        require(!recievers[addr].verify,"Not verified by Admin");
        _;
    }

    modifier checkVerifyLiveDonor(address addr){
        require(!liveDonors[addr].verify,"Not verified by Admin");
        _;
    }

    modifier checkVerifyDeadDonor(address addr){
        require(!deadDonors[addr].verify,"Not verified by Admin");
        _;
    }

    modifier checkRecieverExist(address addr){
        require(!recievers[addr].exist,"Already added reciever");
        _;
    }

    modifier checkLiveDonorExist(address addr){
        require(!liveDonors[addr].exist,"Already added donor");
        _;
    }

    modifier checkDeadDonorExist(address addr){
        require(!deadDonors[addr].exist,"Already added donor");
        _;
    }

    modifier verifyTransplantExist(address addr){
        require(transplants[addr].exist,"Transplant not exist");
        _;
    }

    modifier verifyRecieverExist(address addr){
        require(recievers[addr].exist,"Reciever not exist");
        _;
    }

    modifier verifyDeadDonorExist(address addr){
        require(deadDonors[addr].exist,"Donor not exist");
        _;
    }

    modifier verifyLiveDonorExist(address addr){
        require(liveDonors[addr].exist,"Donor not exist");
        _;
    }

    modifier approveLiveDonor(address liveDonor1){
        require(liveDonors[liveDonor1].approve,"Donor didn't approved.");
        _;
    }

    modifier approveDeadDonor(address deadDonor1){
        require(deadDonors[deadDonor1].approve,"Relative of donor didn't approved.");
        _;
    }

    // Constructor
    constructor() public{
        admin = msg.sender;
    }

    //Admin Getters & Setters
    function getAdmin() public view returns(address){
        return admin;
    }

    function setAdmin(address admin1) public verifyAdmin{
        admin = admin1;
    }

    /*
    Suppose a Patient detected by ckd stage 5 then, it requires immediate Transplant
    so, he has two ways, first to go for the Live Donor(i.e. Relatives) or wait in the
    waiting list (i.e. when some one is dead) to get someone's Kidney.
    */

    // Patient functions
    function addReciever(address addr, uint priority1)public checkRecieverExist(addr){
        recievers[addr] = Reciever(addr,true,false,priority1);
        recieverArr.push(addr);
    }

    function getRecievers() public view returns(address[] memory){
        return recieverArr;
    }

    function removeReciever(address addr) public verifyRecieverExist(addr){
        for(uint i = 0; i<recieverArr.length;i++){
            if(recieverArr[i] == addr) delete recieverArr[i];
        }
        delete recievers[addr];
    }

    function updateReciever(address oldAddr, address newAddr) public verifyRecieverExist(oldAddr){
        addReciever(newAddr, recievers[oldAddr].priority);
        removeReciever(oldAddr);
    }

    function addRecieverToWaitlist(address addr)public verifyRecieverExist(addr){
        waitlistArr.push(addr);
        waitlist[addr] = recievers[addr];
    }

    function getWaitlist() public view returns(address[] memory){
        return waitlistArr;
    }

    function removeRecieverFromWaitlist(address addr)public verifyRecieverExist(addr){
        for(uint i = 0; i<waitlistArr.length;i++){
            if(waitlistArr[i] == addr) delete waitlistArr[i];
        }
        delete waitlist[addr];
    }

    function getPriority(address addr)public view verifyAdmin verifyRecieverExist(addr) returns(uint){
        return recievers[addr].priority;
    }

    function changePriority(address addr, uint priority1)public verifyAdmin verifyRecieverExist(addr){
        recievers[addr].priority = priority1;
    }

    function verifyRecieverByAdmin(address addr)public verifyAdmin verifyRecieverExist(addr){
        recievers[addr].verify = true;
    }

    function getVerificationRecieverByAdmin(address addr)public verifyRecieverExist(addr){
        recievers[addr].verify = true;
    }

    /*
    Suppose that patient opt for transplantation from a living donor(i.e. Relatives)
    then the donor(person) has to approve that its Kidney is being transplanted.
    */

    // Live Donor Functions
    function addLiveDonor(address addr) public checkLiveDonorExist(addr){
        liveDonors[addr] = Donor(addr, false,true,false,true,1);
        liveDonorArr.push(addr);
    }

    function getLiveDonors() public view returns(address[] memory){
        return liveDonorArr;
    }

    function removeLiveDonor(address addr) public verifyLiveDonorExist(addr){
        for(uint i = 0; i<liveDonorArr.length;i++){
            if(liveDonorArr[i] == addr) delete liveDonorArr[i];
        }
        delete liveDonors[addr];
    }

    function updateLiveDonor(address oldAddr, address newAddr) public verifyLiveDonorExist(oldAddr){
        addLiveDonor(newAddr);
        removeLiveDonor(oldAddr);
    }

    function approveLiveTransplant(address addr)public verifyLiveDonorExist(addr){
        liveDonors[addr].approve = true;
    }

    function removeLiveTransplantApproval(address addr)public verifyLiveDonorExist(addr) approveLiveDonor(addr){
        liveDonors[addr].approve = false;
    }

    function verifyLiveDonorByAdmin(address addr)public verifyAdmin verifyLiveDonorExist(addr){
        liveDonors[addr].verify = true;
    }

    function getVerificationLiveDonorByAdmin(address addr)public verifyLiveDonorExist(addr){
        liveDonors[addr].verify = true;
    }

    /*
    Suppose that patient opt for transplantation from a dead donor(i.e. a person who has died)
    then the donor's relatives has to approve that its kidneies are being transplanted.
    */

    // Dead Donor Functions
    function addDeadDonor(address addr) public checkDeadDonorExist(addr){
        deadDonors[addr] = Donor(addr, false,true,false,false,2);
        deadDonorArr.push(addr);
    }

    function getDeadDonors() public view returns(address[] memory){
        return deadDonorArr;
    }

    function removeDeadDonor(address addr) public verifyDeadDonorExist(addr){
        for(uint i = 0; i<deadDonorArr.length;i++){
            if(deadDonorArr[i] == addr) delete deadDonorArr[i];
        }
        delete deadDonors[addr];
    }

    function updateDeadDonor(address oldAddr, address newAddr) public verifyDeadDonorExist(oldAddr){
        removeDeadDonor(oldAddr);
        addDeadDonor(newAddr);
    }

    /*
    If approved then his kidneies go to the nemerous people in demmand of kidney in waitlist.
    */

    function approveDeadTransplant(address addr)public verifyDeadDonorExist(addr){
        deadDonors[addr].approve = true;
        emit donorDead(); // ML Predictions Here
    }

    function removeDeadTransplantApproval(address addr)public verifyDeadDonorExist(addr) approveDeadDonor(addr){
        deadDonors[addr].approve = false;
    }

    function verifyDeadDonorByAdmin(address addr)public verifyAdmin verifyDeadDonorExist(addr){
        deadDonors[addr].verify = true;
    }

    function getVerificationDeadDonorByAdmin(address addr)public verifyDeadDonorExist(addr){
        deadDonors[addr].verify = true;
    }

    function getKidnies(address addr)public view verifyDeadDonorExist(addr) returns(uint){
        return deadDonors[addr].kidnies;
    }

    /*
    Final Transplant.
    */

    // Transplant functions
    function transplantLiveDonor(address reciever1,address donor1) public checkTransplantedExist(reciever1) verifyAdmin verifyRecieverExist(reciever1) verifyLiveDonorExist(donor1) approveLiveDonor(donor1) checkVerifyReciever(reciever1) checkVerifyLiveDonor(donor1) {
        transplants[reciever1] = Transplant(reciever1,donor1,true);
        transplantArr.push(reciever1);
        removeReciever(reciever1);
        removeLiveDonor(donor1);
        delete liveDonors[donor1];
    }

    function transplantDeadDonor(address reciever1,address donor1) public checkTransplantedExist(reciever1) verifyAdmin verifyRecieverExist(reciever1) verifyDeadDonorExist(donor1) approveDeadDonor(donor1) checkVerifyReciever(reciever1) checkVerifyDeadDonor(donor1) {
        if(deadDonors[donor1].kidnies > 0){
            transplants[reciever1] = Transplant(reciever1,donor1,true);
            deadDonors[donor1].kidnies --;
            transplantArr.push(reciever1);
            removeReciever(reciever1);
            removeLiveDonor(donor1);
            removeRecieverFromWaitlist(reciever1);
            delete waitlist[reciever1];
        }
        if(deadDonors[donor1].kidnies == 0){
            delete deadDonors[donor1];
        }
    }

    function getTransplant(address reciever1)public view returns(address){
        return transplants[reciever1].donor;
    }

    function getTransplants() public view returns(address[] memory){
        return transplantArr;
    }
}