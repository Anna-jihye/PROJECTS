// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/// @title Mock oracle for testing

contract Oracle_ {

	AggregatorV3Interface internal priceFeed;
	int private _btcPriceInEth;

    AggregatorV3Interface internal eth30DayAprFeed;
	int private _eth30DayApr;

    AggregatorV3Interface internal btc1DayBaseRateFeed;
	int private _btc1DayBaseRate;


	constructor(){
		_btcPriceInEth = 20954713673392767000;
		priceFeed = AggregatorV3Interface(0x0000000000000000000000000000000000000000);

        _eth30DayApr = 322131;
        eth30DayAprFeed = AggregatorV3Interface(0x0000000000000000000000000000000000000001);

        _btc1DayBaseRate = 1450000;
        btc1DayBaseRateFeed = AggregatorV3Interface(0x0000000000000000000000000000000000000010);
	}


    /**
    * @dev Get the current BTC price in Eth
    *
    * @return Current BTC/ETH price returned by oracle
    **/
	function getLatestBtcPriceInEth() public view returns (int) {
		return _btcPriceInEth;
	}


    /**
    * @dev Get the current 30-day ETH apr
    *
    * @return Current 30-day ETH apr stored in 7 decimals returned by oracle
    **/
    function getLatestEth30DayApr() public view returns (int) {
        return _eth30DayApr;
    }


    /**
    * @dev Get the current 1-Day BTC interest rate benchmark curve 
    *
    * @return Current 1-Day BTC interest rate benchmark curve stored in 8 decimals returned by oracle
    **/
    function getBtc1DayBaseRate() public view returns (int) {
        return _btc1DayBaseRate;
    }
}