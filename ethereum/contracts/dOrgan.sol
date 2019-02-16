// Solidity Version
pragma solidity >=0.4.26;

// Contract dOrgan
contract dOrgan{

    // Events
    event donorDead();

    // Structs
    struct Reciever{
        address patient;
        bool transplanted;
    }

    struct LiveDonor{
        address donor;
        bool approve;
    }

    struct DeadDonor{
        address donor;
        bool approve;
        uint kidneies;
    }

    struct Transplant{
        address reciever;
        address donor;
    }

    // Global Variables
    address admin;
    address[] recieverArr;
    address[] liveDonorArr;
    address[] deadDonorArr;
    address[] transplantArr;

    // Mappings
    mapping(address => Reciever) recievers;
    mapping(address => LiveDonor) liveDonors;
    mapping(address => DeadDonor) deadDonors;
    mapping(address => Reciever) waitlist;
    mapping(address => Transplant) transplants;

    // Modifiers
    modifier verifyAdmin(){
        require(admin == msg.sender,"Your are not authorized");
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
    function addReciever(address addr)public verifyAdmin{
        recievers[addr] = Reciever(addr,false);
        recieverArr.push(addr);
    }

    function getRecievers() public view verifyAdmin returns(address[] memory){
        return recieverArr;
    }

    function removeReciever(address addr) public verifyAdmin{
        for(uint i = 0; i<recieverArr.length;i++){
            if(recieverArr[i] == addr) delete recieverArr[i];
        }
        delete recievers[addr];
    }

    function updateReciever(address oldAddr, address newAddr) public verifyAdmin{
        removeReciever(oldAddr);
        addReciever(newAddr);
    }

    function getTransplanted(address addr) public view verifyAdmin returns(bool){
        return recievers[addr].transplanted;
    }

    function addRecieverToWaitlist(address addr)public{
        waitlist[addr] = recievers[addr];
    }

    function removeRecieverFromWaitlist(address addr)public{
        delete waitlist[addr];
    }

    /*
    Suppose that patient opt for transplantation from a living donor(i.e. Relatives)
    then the donor(person) has to approve that its Kidney is being transplanted.
    */

    // Live Donor Functions
    function addLiveDonor(address addr) public verifyAdmin{
        liveDonors[addr] = LiveDonor(addr, false);
        liveDonorArr.push(addr);
    }

    function getLiveDonors() public view verifyAdmin returns(address[] memory){
        return liveDonorArr;
    }

    function removeLiveDonor(address addr) public verifyAdmin{
        for(uint i = 0; i<liveDonorArr.length;i++){
            if(liveDonorArr[i] == addr) delete liveDonorArr[i];
        }
        delete liveDonors[addr];
    }

    function updateLiveDonor(address oldAddr, address newAddr) public verifyAdmin{
        removeLiveDonor(oldAddr);
        addLiveDonor(newAddr);
    }

    function approveLiveTransplant(address addr)public verifyAdmin{
        liveDonors[addr].approve = true;
    }

    function removeLiveTransplantApproval(address addr)public verifyAdmin approveLiveDonor(addr){
        liveDonors[addr].approve = false;
    }

    /*
    Suppose that patient opt for transplantation from a dead donor(i.e. a person who has died)
    then the donor's relatives has to approve that its kidneies are being transplanted.
    */

    // Dead Donor Functions
    function addDeadDonor(address addr) public verifyAdmin{
        deadDonors[addr] = DeadDonor(addr,true,2);
        deadDonorArr.push(addr);
    }

    function getDeadDonors() public view verifyAdmin returns(address[] memory){
        return deadDonorArr;
    }

    function removeDeadDonor(address addr) public verifyAdmin{
        for(uint i = 0; i<deadDonorArr.length;i++){
            if(deadDonorArr[i] == addr) delete deadDonorArr[i];
        }
        delete deadDonors[addr];
    }

    function updateDeadDonor(address oldAddr, address newAddr) public verifyAdmin{
        removeDeadDonor(oldAddr);
        addDeadDonor(newAddr);
    }

    /*
    If approved then his kidneies go to the nemerous people in demmand of kidney in waitlist.
    */

    function approveDeadTransplant(address addr)public verifyAdmin{
        deadDonors[addr].approve = true;
        emit donorDead(); // ML Predictions Here
    }

    function removeDeadTransplantApproval(address addr)public verifyAdmin approveDeadDonor(addr){
        deadDonors[addr].approve = false;
    }

    /*
    Final Transplant.
    */

    // Transplant functions
    function transplantLiveDonor(address reciever1,address donor1) public verifyAdmin approveLiveDonor(donor1) {
        recievers[reciever1].transplanted = true;
        transplants[reciever1] = Transplant(reciever1,donor1);
        transplantArr.push(reciever1);
        delete liveDonors[donor1];
    }

    function transplantDeadDonor(address reciever1,address donor1) public verifyAdmin approveDeadDonor(donor1) {
        if(deadDonors[donor1].kidneies > 0){
            recievers[reciever1].transplanted = true;
            transplants[reciever1] = Transplant(reciever1,donor1);
            deadDonors[donor1].kidneies --;
            transplantArr.push(reciever1);
            delete waitlist[reciever1];
        }
        if(deadDonors[donor1].kidneies == 0){
            delete deadDonors[donor1];
        }
    }

    function getTransplant(address reciever1)public view verifyAdmin returns(address){
        return transplants[reciever1].donor;
    }
}