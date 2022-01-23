require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name recipe six purchase install clock bridge ten'; 
let testAccounts = [
"0x1461b573300ce23b37ce925b9887f2493d31290ae9aa8fde190330414b7e23b0",
"0x4ba61b61b97a735058103f96f568537b247d5a71eb62b69d97bf05f1a61a9d0f",
"0x2d5c5e7f20b9daaf13524a9150d55b3b9fd1b93b4db58c19916a3728b9cb3e29",
"0xf3a5679d2a98984f1d35368364c71df58b359b4f4ac6a4d247ea4458d719dc06",
"0xf29b52ff68677e0b353e487b6cf9eb762a8f7e022703aceaed2a107f1b9dc38f",
"0x37d07eb2945d1554b105330a86f1cd129b8098683eefcd2d8e78c8b0f536f4b1",
"0xdafd06debf05226ab41ba42a1fca2052bfeb725fc8287cd1e32baa57d8b80502",
"0x0fe97f8475d22d87e88aec0f46716b354dab4e1ca8725705de85748dc6b3286c",
"0x9f55f7b5bbe01cbcd432bd46bc43beb8033cdf780fe748b99e9833ef60a9c950",
"0x04c3d356dd433722614b3389d6b8f4bf53d532af9920fc2bfaf5775418859e23"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


