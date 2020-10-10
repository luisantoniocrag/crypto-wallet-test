const bip39 = require('bip39')
const hdkey = require('hdkey')
const ethUtil = require('ethereumjs-util')

//const mnemonic: string = bip39.generateMnemonic() 
const mnemonic:string ='prepare wide tomorrow congress order purpose awesome fiscal quantum lizard wonder story'
const seed: Promise<object> = bip39.mnemonicToSeed(mnemonic)

setTimeout(() => { console.log(seed) }, 1000)
console.log(`mnemonic: ${mnemonic}`)

const root:any = hdkey.fromMasterSeed(seed.toString())
const masterPrivateKey:string = root.privateKey.toString('hex')

console.log(`masterPrivateKey: ${masterPrivateKey}`)

const addrNode:any = root.derive("m/44'/60'/0'/0/0"); //line 1
const pubKey:any = ethUtil.privateToPublic(addrNode._privateKey)
const addr:any = ethUtil.publicToAddress(pubKey).toString('hex')
console.log(`Address: ${addr}`)
const address:any = ethUtil.toChecksumAddress('0x' + addr)

console.log(`Address: ${address}`)