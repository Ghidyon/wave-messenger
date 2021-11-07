// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal{
    uint totalWaves;

    constructor() {
        console.log("You looking at a smart contract");
    }
    
    function wave() public {
        totalWaves += 1;

        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns(uint) {
        console.log("Wow! A total of %d waves", totalWaves);

        return totalWaves;
    }
}