import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
 // testnet: Networks.ethereumTestnet,
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'GummyWorldNFT',
  tokenName: 'GummyWorld',
  tokenSymbol: 'GW',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 2357,
  whitelistSale: {
    price: 0.0005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.001,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.002,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x7664E7A722D8c8FB40425EC7382F6BF905E92aF0",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
