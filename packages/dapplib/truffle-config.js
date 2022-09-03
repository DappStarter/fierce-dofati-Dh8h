require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rate rural slow inner end army giggle'; 
let testAccounts = [
"0xb36a0574cbf26253c737c3a08eebb0b03abfaab0987ab8369b9ba19144a52457",
"0x68cba9b200f30872b2b368c0757377649a5553d1eb021b33d071ac01f97003cf",
"0x80d89c767484a77b3e9fd451e63563034afa4754a87a767a970ec4f5e41ad270",
"0x97a93093092a2fbd603dbc28b5772ebe3ddb3428c15bc1f624d1ae7126eac84d",
"0x1084e3a9ea225c46165186a552a8dee19c4a87859be9669b42b9784fb07ae7bb",
"0xe2c2acbb69835aae7fe83c7966dc001a9bf12d6ad47ae44d4059af0c57814bb4",
"0x7c19a2092696390a315757a05893e7878374a69341f0c223e1a6279f1e9196ba",
"0x0fe989876f301d18a9bef9148a20d52137785169da2fd081ebccb0425e085224",
"0x0fbe8d620a542472f7172497bd8a2141ef7b80e216bd0e9fae03e6446f3cd64d",
"0xee6b09e1053367af319c6438584499bd6ae3272c83be519b57a480d037a96e67"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

