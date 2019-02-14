const NFTToken = artifacts.require('NFTToken.sol');

contract('NFTToken', function ([creator, ...accounts]) {
  const name = "Property";

  it("...is going to confirm the token name and tokenId.", async () => {
    const assetInstance = await NFTToken.deployed();
    let tokenName = await assetInstance.name();

    assert.equal(tokenName, name, "Name isn't the same.");
  });
});