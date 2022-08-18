/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */
import _ from "lodash";
import Web3 from "web3";

import ERC20ABI from "../contracts/ERC20ABI.json";
import Swap from "../contracts/Swap.json"
import {
    ERC20_CONTRACT_ADDR,
    SWAP_CONTRACT_ADDR,
    PANCAKE_ROUTER_ADDR,
    UNISWAP_ROUTER_ADDR,
} from './tokenAddress';

declare let window: any;

export interface StakedInfo{
    duration: number
    amount: number
    stakedTime: number
    lastClaimed: number
    name: string
    NFTId: number
    StakeNFTId: number
}

export const setTokenProvider = async (tokenAddr: string) => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    const ERC20Contract = await new window.web3.eth.Contract(ERC20ABI, tokenAddr);
    return ERC20Contract
}

export const setNetworkProvider = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    const SwapContract = await new window.web3.eth.Contract(Swap, SWAP_CONTRACT_ADDR);
    return SwapContract
}

export const estimateGasForApprove = async (spender: string, tokenAddr: string, amount: number, account: string) => {
    const tokenContract = await setTokenProvider(tokenAddr);
    let addr = SWAP_CONTRACT_ADDR;
    if (spender === 'router') {
        addr = PANCAKE_ROUTER_ADDR;
    }
    const res = await tokenContract.methods.approve(addr, '0x' + (Math.round(amount * Math.pow(10, 18))).toString(16)).estimateGas({from: account});
    return res;
}

export const tokenApprove = async (spender: string, tokenAddr: string, amount: number, account: string) => {
    const tokenContract = await setTokenProvider(tokenAddr);
    let addr = SWAP_CONTRACT_ADDR;
    if (spender === 'router') {
        addr = PANCAKE_ROUTER_ADDR;
    }
    const res = await tokenContract.methods.approve(addr, '0x' + (Math.round(amount * Math.pow(10, 18))).toString(16))
                .send({from: account, gas: '0x' + (3 * Math.round(Math.pow(10, 4)))});
    return res;
}

export const p2p = async (tokenIn: string, toAddr: string, amountIn: number, account: string) => {
    const SwapContract = await setNetworkProvider();
    const res = await SwapContract.methods.p2p(tokenIn, toAddr, '0x' + (Math.round(amountIn * Math.pow(10, 18))).toString(16)).send({from: account, gas: '0x' + (3 * Math.round(Math.pow(10, 4)))});
    return res;
}

export const estimateGasForSwap = async (tokenIn: string, tokenOut: string, amountIn: number, slippage: number, account: string) => {
    const SwapContract = await setNetworkProvider();
    const res = await SwapContract.methods.swap(tokenIn, tokenOut, '0x' + (Math.round(amountIn * Math.pow(10, 18))).toString(16), slippage).estimateGas({from: account});
    return res;
}

export const swapToken = async (tokenIn: string, tokenOut: string, amountIn: number, slippage: number, account: string) => {
    const SwapContract = await setNetworkProvider();
    const res = await SwapContract.methods.swap(tokenIn, tokenOut, '0x' + (Math.round(amountIn * Math.pow(10, 18))).toString(16), slippage).send({from: account, gas: '0x' + (3 * Math.round(Math.pow(10, 4)))});
    return res;
}

export const getStep = async () => {
    const SwapContract = await setNetworkProvider();
    const step = await SwapContract.methods.step().call();
    return step;
}

export const includedWhiteList = async (whitelistAddress: string) => {
    const SwapContract = await setNetworkProvider();
    const res = await SwapContract.methods.whiteList(whitelistAddress).call();
    return res;
}
