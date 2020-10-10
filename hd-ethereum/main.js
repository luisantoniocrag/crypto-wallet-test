var bip39 = require('bip39');
var hdkey = require('hdkey');
var ethUtil = require('ethereumjs-util');
//const mnemonic: string = bip39.generateMnemonic() 
var mnemonic = 'prepare wide tomorrow congress order purpose awesome fiscal quantum lizard wonder story';
var seed = bip39.mnemonicToSeed(mnemonic);
setTimeout(function () { console.log(seed); }, 1000);
console.log("mnemonic: " + mnemonic);
var root = hdkey.fromMasterSeed(seed.toString());
var masterPrivateKey = root.privateKey.toString('hex');
console.log("masterPrivateKey: " + masterPrivateKey);
var addrNode = root.derive("m/44'/60'/0'/0/0"); //line 1
var pubKey = ethUtil.privateToPublic(addrNode._privateKey);
var addr = ethUtil.publicToAddress(pubKey).toString('hex');
console.log("Address: " + addr);
var address = ethUtil.toChecksumAddress('0x' + addr);
console.log("Address: " + address);
