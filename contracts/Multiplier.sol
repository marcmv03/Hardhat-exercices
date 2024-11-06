// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Multiplier {
    uint256 private value;

    // Constructor to initialize the value
    constructor() {
        value = 1;
    }

    // Function to view the current value
    function getValue() public view returns (uint256) {
        return value;
    }

    // Function to add 1 to the current value
    function addOne() public {
        value += 1;
    }
    function multiplybythree() public {
        value *= 3;
    }
}