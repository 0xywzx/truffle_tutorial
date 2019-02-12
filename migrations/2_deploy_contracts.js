/**
 * @dev See https://github.com/truffle-box/react-box/blob/master/migrations/2_deploy_contracts.js
 */
var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var ERC721NFTTokenStandard = artifacts.require("./ERC721TokenStandard.sol");

module.exports = function(deployer, network, accounts) {
  const name = "Property";
  const symbol = "PROPERTY";
  const tokenId = 1;
  const tokenURI = "";

  deployer.deploy(SimpleStorage);
  deployer.deploy(ERC721NFTTokenStandard, name, symbol, tokenId, tokenURI);
};