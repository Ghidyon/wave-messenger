// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WaveMessenger{
    uint totalWaves;

    constructor() payable {
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

        console.log("%s has waved with message - %s", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        emit NewWave(msg.sender, block.timestamp, _message);

        uint256 prizeAmount = 0.0001 ether;

        require(

            // address(this).balance is the balance of the contract itself
            prizeAmount <= address(this).balance,
            "Trying to withdraw more money than the contract has."
        );

        (bool success,) = (msg.sender).call{value: prizeAmount}("");

        require(
            success,
            "Failed to withdraw money from the contract."
        );
    }

    function getAllWaves() public view returns(Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns(uint) {
        console.log("Wow! A total of %d waves", totalWaves);

        return totalWaves;
    }
}