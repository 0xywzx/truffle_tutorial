pragma solidity ^0.5.0;

/**
 * @dev See https://github.com/truffle-box/react-box/blob/master/contracts/SimpleStorage.sol
 */
contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}