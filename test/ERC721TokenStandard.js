const Asset = artifacts.require('ERC721TokenStandard.sol');

contract('ERC721TokenStandard', function ([creator, ...accounts]) {
  const name = "Property";

  it("...is going to confirm the token name and tokenId.", async () => {
    const assetInstance = await Asset.deployed();
    let tokenName = await assetInstance.name();

    assert.equal(tokenName, name, "Name isn't the same.");
  });
});