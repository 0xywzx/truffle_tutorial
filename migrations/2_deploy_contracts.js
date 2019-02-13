/**
 * @dev See https://github.com/truffle-box/react-box/blob/master/migrations/2_deploy_contracts.js
 */
var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var ERC721TokenStandard = artifacts.require("./ERC721TokenStandard.sol");

module.exports = function(deployer) {
  const name = "Property";
  const symbol = "PROPERTY";

  deployer.deploy(SimpleStorage);
  deployer.deploy(ERC721TokenStandard, name, symbol);
};