const Asset = artifacts.require('ERC721TokenStandard.sol');

contract('ERC721TokenStandard', function ([creator, ...accounts]) {
  const name = "Property";
  const tokenId = 1;

  it("...is going to confirm the token name and tokenId.", async () => {
    const assetInstance = await Asset.deployed();
    let tokenName = await assetInstance.name();
    let owner = await assetInstance.ownerOf(tokenId);

    assert.equal(tokenName, name, "Name isn't the same.");
    assert.equal(creator, owner, "Account isn't the same.");
  });
});