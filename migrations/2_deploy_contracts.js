var Token = artifacts.require("./Token.sol");
var NFTToken = artifacts.require("./NFTToken.sol");

module.exports = function(deployer) {
  const name = "Property";
  const symbol = "PROPERTY";
  deployer.deploy(Token);
  deployer.deploy(NFTToken, name, symbol);
};