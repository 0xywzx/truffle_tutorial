pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

/**
 * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract ERC721TokenStandard is ERC721Full {
  constructor(string memory name, string memory symbol, uint tokenId, string memory tokenURI) ERC721Full(name, symbol) public {
    _mint(msg.sender, tokenId);
    _setTokenURI(tokenId, tokenURI);
  }
}