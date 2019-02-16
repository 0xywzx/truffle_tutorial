pragma solidity ^0.4.25;

contract Reputation {

  uint256 constant DO_NOT_KNOW_TRUST = 1;
  uint256 constant DO_NOT_TRUST_TRUST = 2;
  uint256 constant TRUST_MARGINALLY_TRUST = 3;
  uint256 constant TRUST_FULLY_TRUST = 4;
  uint256 constant MORE_INFORMATION_TRUST = 5;

  event Trust(address indexed _from, address indexed _to, uint256 _trustType);
  event Approval(address indexed _owner, address indexed _receiver, uint256 _trustType);

  function trust(address _to, uint256 _trustType) public returns (bool success);
  function trustFrom(address _from, address _to, uint256 _trustType) public returns (bool success);
  function approve(address _receiver, uint256 _trustType) public returns (bool success);
  function allowance(address _owner, address _receiver) public view returns (uint256 remaining);

}
