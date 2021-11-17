// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WaveMessenger{
    uint totalWaves;

    constructor() {
        console.log("You looking at a smart contract");
    }
    
    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver; // address of the user who waved
        string message; // the message the user sent
        uint timestamp; // the timestamp when the user waved
    }

    /* Declare a variable that saves an array of structs
        To hold all the waves users send
     */
    
    Wave[] waves;


    function wave(string memory _message) public {
        totalWaves += 1;

        console.log("%s has waved!", msg.sender);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        emit NewWave(msg.sender, block.timestamp, _message);
    }

    function getAllWaves() public view returns(Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns(uint) {
        console.log("Wow! A total of %d waves", totalWaves);

        return totalWaves;
    }
}