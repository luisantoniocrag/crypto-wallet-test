const { bip32 } = require("bitcoinjs-lib")

const bip39 = require('bip39')
const hdkey = require('hdkey')
const createHash = require('create-hash')
const btcLib = require('bitcoinjs-lib')
const bs58check = require('bs58check')

// Const mnemonic = bip39.generateMnemonic() // Generates string
// const mnemonic = bip39.generateMnemonic()
const mnemonic = "must army more hip banner rocket adjust mystery title spice gift okay"
const seed = bip39.mnemonicToSeed(mnemonic) //creates seed buffer
//setTimeout(() => {console.log(seed) }, 1000)
console.log(`mnemonic: ${mnemonic}`)

const root = hdkey.fromMasterSeed(seed.toString());
const masterPrivateKey = root.privateKey.toString('hex');
console.log('masterPrivateKey: ' + masterPrivateKey);

const addrnode = root.derive("m/44'/0'/0'/0/0")
console.log("addrnodePublicKey: " + addrnode._publicKey)

const step1 = addrnode._publicKey
const step2 = createHash('sha256').update(step1).digest()
const step3 = createHash('rmd160').update(step2).digest()

const step4 = Buffer.allocUnsafe(21)
step4.writeUInt8(0x00, 0)
step3.copy(step4, 1) //step4 now holds the extended RIPMD-160 result
const step9 = bs58check.encode(step4)
console.log("Base58Check: " + step9)