# skills-ledger
ブロックチェーンを使った資格証明ネットワーク

## Quickstart

- Install MetaMask
- Install IPFS Companion
- Install OpenPGP (Optional)

### Development Environment Setup

You can set up your dev environment with:

```sh
npm install ganache-cli
npm install -g truffle@4.1.15
git clone git@github.com:ethereum/skills-ledger.git
cd skills-ledger
npm install
```
Useful for testing. 

```sh
ganache-cli
truffle compile
truffle migrate
truffle test
```

Useful for deploying to a public network.
```sh
truffle compile
truffle migrate getho
truffle test
```
```sh
truffle compile
truffle migrate ropsten
truffle test
```
IPFS
```sh
cd go-ipfs
./install.sh
ipfs init
ipfs daemon
```
GPG
```sh
brew install gpg2 pinentry-mac
```