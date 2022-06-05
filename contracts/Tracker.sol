// SPDX-License-Identifier: UNLICENSED 

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Tracker {
    uint256 totalDays;

    constructor() {
        console.log("Yooooooooooo");
    }

    function totaldays() public {
        totalDays += 1;
        console.log("%s thanks for tracking your flow!", msg.sender);
    }

    function getTotalDays() public view returns (uint256) {
        console.log("You've had your flow for %d days!", totalDays);
        return totalDays;
    }
}