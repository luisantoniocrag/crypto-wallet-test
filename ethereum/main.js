var Web3 = require('web3');
var web3 = new Web3();
//const account:object = web3.eth.accounts.create()
var privateKeyEncrypt = web3.eth.accounts
    .encrypt('0xb4c173090303c3944c748fc2b100a345ad719abc486d1f2b651c2a91ba94e240', 'Asdfsd$vionA%//Aveja2&345Fkmkmfdgf$%/');
console.log(privateKeyEncrypt);
