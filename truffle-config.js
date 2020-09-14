require('dotenv').config();
const privateKey = process.env.PRIVATE_KEY;
const infuraUrl = process.env.INFURA_URL;

const PrivateKeyProvider = require('truffle-privatekey-provider')

module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
   dev: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
   },
   goerli: {
    provider: () => new PrivateKeyProvider(privateKey, infuraUrl),
    network_id: 5,       // Goerli's id
    gas: 0x7a1200,
    confirmations: 1,    // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
  },
 
  }
};
