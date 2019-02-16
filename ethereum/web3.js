import Web3 from 'web3';

let web3;
if(typeof window !== 'undefined' && typeof  window.web3 !== 'undefined'){
    web3 = new Web3(window.web3.currentProvider);
}
else {
    const provider = new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/v3/34db7aa51a29454db3a3b3b68abd92ca'
    );
    web3 = new Web3(provider);
}
web3.eth.defaultAccount = web3.eth.accounts[0];
export default web3;