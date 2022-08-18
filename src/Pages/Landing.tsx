import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { Button } from "../Components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Topbar from "../Components/Topbar";
import {
    LeftarrowIcon,
    RightarrowIcon,
    DownarrowIcon,
    SearchIcon,
} from "../Components/ImgSvg";
import { StringIterator } from 'lodash';
import LPToken from '../Components/LPToken';

const Landing = () => {
    const [page, setPage] = useState(0);
    const [active, setActive] = useState(true);
    const [liquidityOnly, setLiquidityOnly] = useState(true);

    const { account } = useAuth();
    let navigate = useNavigate();

    return (
    <ParentBox>
        <Topbar mode="staking" onChangePage={(page: number)=>{setPage(page)}} />
        <HeaderBox>
            <Box>
                <Typography style={{fontSize: 34, fontWeight: 600}}>Provide Liquidity, Earn DERI</Typography>
                <Typography style={{fontSize: 44, fontWeight: 800, color: 'rgb(1, 119, 251)'}}>$105,786,890.44</Typography>
                <Box style={{cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: 10}}>
                    <Typography>Total Value Locked(TVL)</Typography>
                    <Typography style={{marginLeft: 15, marginRight: 15, color: '#AAA9AA'}}>Tutorial</Typography>
                    <Box>{RightarrowIcon}</Box>
                </Box>
                <SearchContent style={{padding: 0, marginTop: 20}}>
                    <SearchBox>
                        <Box>{SearchIcon}</Box>
                        <input placeholder='Search by token symbol or pool address' style={{marginLeft: 10, color: 'white', marginBottom: 5, border: 'none', outline: 'none', background: 'transparent', width: '-webkit-fill-available'}} />
                    </SearchBox>
                    <BlueButton>Search</BlueButton>
                </SearchContent>
            </Box>
            <img src='img/background.png' style={{width: 600}} alt='back' />
        </HeaderBox>
        <RoundBox style={{height: '100%', minHeight: 750, marginBottom: 20}}>
            <Box style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <ControlBox>
                    <OneRow style={{borderRadius: 12, background: 'rgb(59, 60, 78)'}}>
                        <ActiveButton active={active} onClick={() => setActive(true)}>Active</ActiveButton>
                        <ActiveButton active={!active} onClick={() => setActive(false)}>Ended</ActiveButton>
                    </OneRow>
                    <OneRow style={{flexWrap: 'wrap', gap: 20, justifyContent: 'space-between'}}>
                        <OneRow style={{}}>
                            <Typography style={{marginRight: 20, whiteSpace: 'nowrap'}}>My Liquidity Only</Typography>
                            <SwitchBox onClick={() => setLiquidityOnly(!liquidityOnly)}>
                                <SwitchButton liquidityOnly={liquidityOnly}></SwitchButton>
                            </SwitchBox>
                        </OneRow>
                        <OneRow onClick={() => {}} style={{border: '1px solid rgb(59, 60, 78)', borderRadius: 14, padding: '5px 20px', cursor: 'pointer'}}>
                            <Typography>Available Balance</Typography>
                            <Box style={{marginBottom: 5, marginLeft: 30}}>{DownarrowIcon}</Box>
                        </OneRow>
                    </OneRow>
                </ControlBox>
                <OneRow style={{flexWrap: 'wrap', gap: 20, marginTop: 40, justifyContent: 'center', width: '100%'}}>
                    <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '100%', maxWidth: '33%', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='deri' token2='usdt' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>Deri - USDT LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>600.00%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>DERI APR</Typography>
                            </Box>
                            <Typography style={{fontSize: 40, fontWeight: 700}}>/</Typography>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>35.07%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>USDT APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$635,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 15, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '100%', textAlign: 'center', flex: 1}}>StakeBUSD</BlueButton>
                            <BlueButton style={{width: '100%', textAlign: 'center', flex: 1}}>StakeUSDT</BlueButton>
                        </OneRow>
                    </RoundBox>
                    <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '100%', maxWidth: '33%', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='usdc' token2='busd' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>USDC - BUSD LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>600.00%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>USDC APR</Typography>
                            </Box>
                            <Typography style={{fontSize: 40, fontWeight: 700}}>/</Typography>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>35.07%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>BUSD APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$635,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 15, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '100%', textAlign: 'center', flex: 1}}>StakeUSDC</BlueButton>
                            <BlueButton style={{width: '100%', textAlign: 'center', flex: 1}}>StakeBUSD</BlueButton>
                        </OneRow>
                    </RoundBox>
                    <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '100%', maxWidth: '33%', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='deri' token2='busd' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>Deri - BUSD LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box style={{textAlign: 'center', width: '100%'}}>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>320.73%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$635,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 15, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '100%', textAlign: 'center', flex: 1}}>Stake</BlueButton>
                        </OneRow>
                    </RoundBox>
                    <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '100%', maxWidth: '33%', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='deri' token2='usdt' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>Deri - USDT LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>600.00%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>DERI APR</Typography>
                            </Box>
                            <Typography style={{fontSize: 40, fontWeight: 700}}>/</Typography>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>35.07%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>USDT APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$635,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 15, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '100%', textAlign: 'center', flex: 1}}>StakeBUSD</BlueButton>
                            <BlueButton style={{width: '100%', textAlign: 'center', flex: 1}}>StakeUSDT</BlueButton>
                        </OneRow>
                    </RoundBox>
                    <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '100%', maxWidth: '33%', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='deri' token2='usdt' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>Deri - USDT LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>600.00%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>DERI APR</Typography>
                            </Box>
                            <Typography style={{fontSize: 40, fontWeight: 700}}>/</Typography>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>35.07%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>USDT APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$635,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 15, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '100%', textAlign: 'center', flex: 1}}>StakeBUSD</BlueButton>
                            <BlueButton style={{width: '100%', textAlign: 'center', flex: 1}}>StakeUSDT</BlueButton>
                        </OneRow>
                    </RoundBox>
                </OneRow>
            </Box>
        </RoundBox>
    </ParentBox>
    )
}

const SwitchButton = styled(Box)<any>`
    border-radius: 50%;
    background: white;
    width: 25px;
    height: 25px;
    position: relative;
    top: 0;
    left: ${({liquidityOnly}) => liquidityOnly ? 0 : 30}px;
    transition: all .3s;
    cursor: pointer;
`;
const SwitchBox = styled(Box)`
    border-radius: 40px;
    background: rgb(59, 60, 78);
    padding: 3px;
    height: 25px;
    width: 55px;
    cursor: pointer;
`;
const ActiveButton = styled(Box)<any>`
    border-radius: 12px;
    padding: 10px 40px;
    cursor: pointer;
    background: ${({ active }) => active ? "white" : "transparent"};
    color: ${({active}) => active ? 'rgb(1, 119, 251)' : 'white'};
    transition: all .2s;
`;
const ControlBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    @media (max-width: 770px) {
        justify-content: center;
    }
`;
const OneRow = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: space-between;
`;
const RoundBox = styled(Box)`
    border-radius: 12px;
    padding: 20px;
    background: rgb(44, 45, 58);
    // width: -webkit-fill-available;
`;
const BlueButton = styled(Box)`
    padding: 10px 40px;
    background: rgb(1, 119, 251);
    border-radius: 12px;
    cursor: pointer;
`;
const SearchBox = styled(Box)`
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid rgb(44, 45, 58);
    width: -webkit-fill-available;
    margin-right: 20px;
`;
const SearchContent = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px;
`;
const HeaderBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    padding-bottom: 0;
    flex-wrap: wrap;
    gap: 900px;
    @media (max-width: 1900px) {
        gap: 50px
    }
    @media (max-width: 820px) {
        padding: 30px;
        padding-bottom: 0;
        gap: 30px;
        >img {
            width: 400px;
        }
    }
    @media (max-width: 660px) {
        padding: 10px;
        padding-top: 30px;
        padding-bottom: 0;
        gap: 10px;
        >img {
            width: 200px;
        }
    }
`;
const ParentBox = styled(Box)`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    align-items: center;
    justify-content: space-between;
    width: -webkit-fill-available;
    background: rgb(26, 27, 35);
`;

export default Landing;