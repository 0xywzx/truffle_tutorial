pragma solidity ^0.4.25;

contract Reputation {
 mapping (address => uint) letters;

 event Trust(address indexed _from, address indexed _to, uint256 _value);

 constructor() public {
    letters[tx.origin] = 0;
 }

 function trust(address receiver, uint letter) public returns(bool sufficient) {
   emit Trust(msg.sender, receiver, letter);
   return true;
 }

 function getTrust(address addr) public view returns(uint) {
   return letters[addr];
 }
}