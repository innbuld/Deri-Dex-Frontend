import { Box, Button as MuiButton, Typography } from "@mui/material";

import { FC, useState } from "react";
import useAuth from "../hooks/useAuth";
import { shortAddr } from "../utils/calculation";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "./Global";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {RightarrowIcon} from './ImgSvg';

interface SidebarProps {
    mode?: string;
    onChangePage: (page: number) => void
}

const Topbar: FC<SidebarProps> = (props: SidebarProps) => {
    const { account, logout, login } = useAuth();
    const [open, setOpen] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false);

    const navigate = useNavigate();

    const copyAddress = () => {
        navigator.clipboard.writeText(account || "")
    }

    return <Box position="relative" width="-webkit-fill-available" zIndex="20" style={{top: 0, left: 0, position: 'absolute'}}>
        <Box
            display="flex"
            alignItems="center"
            py="7px"
            px={5}
            height="100%"
            bgcolor="transparent"
            width="-webkit-fill-available"
            color="#FCF686"
            justifyContent={'space-between'}
            zIndex="20"
        >
            <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '-webkit-fill-available'}}>
                    <MobileMenu>
                        <Typography onClick={() => setMobileMenu(!mobileMenu)} style={{cursor: 'pointer', fontWeight: 800}}>|||</Typography>
                        {mobileMenu && <MobileMenuBox>
                            <Logo style={{justifyContent: 'flex-end', width: '-webkit-fill-available'}}>
                                <MobileLogo>
                                    <Box style={{width: '-webkit-fill-available', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography style={{color: 'blue', fontSize: 40, fontWeight: 500}}>Deri</Typography>
                                        <Typography style={{color: 'white', fontSize: 40, fontWeight: 500}}>Dex</Typography>
                                    </Box>
                                    <img src="img/exit.png" onClick={() => {setMobileMenu(false)}} />
                                </MobileLogo>
                            </Logo>
                            <Box style={{display: 'flex', width: '-webkit-fill-available', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Box style={{marginLeft: 50}}>
                                    <Typography style={{color: 'white', marginLeft: 30, fontSize: 20, marginTop: 20, fontWeight: 600, cursor: 'pointer'}}>Exchange</Typography>
                                    <Typography style={{color: 'white', marginLeft: 30, fontSize: 20, marginTop: 20, fontWeight: 600, cursor: 'pointer'}}>Liquidity</Typography>
                                    <Typography style={{color: 'white', marginLeft: 30, fontSize: 20, marginTop: 20, fontWeight: 600, cursor: 'pointer'}}>Mining</Typography>
                                    <Typography style={{color: 'white', marginLeft: 30, fontSize: 20, marginTop: 20, fontWeight: 600, cursor: 'pointer'}}>Developer</Typography>
                                </Box>
                            </Box>
                        </MobileMenuBox>}
                    </MobileMenu>
                    <Logo>
                        <Typography style={{color: 'blue', fontSize: 20, fontWeight: 500}}>Deri</Typography>
                        <Typography style={{color: 'white', fontSize: 20, fontWeight: 500}}>Dex</Typography>
                    </Logo>
                </Box>
                <DesktopMenu>
                    <Typography style={{color: 'white', marginLeft: 30, fontSize: 14, fontWeight: 600, cursor: 'pointer'}}>Exchange</Typography>
                    <Typography style={{color: 'white', marginLeft: 30, fontSize: 14, fontWeight: 600, cursor: 'pointer'}}>Liquidity</Typography>
                    <Typography style={{color: 'white', marginLeft: 30, fontSize: 14, fontWeight: 600, cursor: 'pointer'}}>Mining</Typography>
                    <Typography style={{color: 'white', marginLeft: 30, fontSize: 14, fontWeight: 600, cursor: 'pointer'}}>Developer</Typography>
                </DesktopMenu>
            </Box>
            <Box style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '-webkit-fill-available'}}>
                <img src="img/deri.png" style={{height: 35, marginRight: 20, cursor: 'pointer'}} alt="logo" />
                <WalletInfo style={{marginRight: 20, cursor: 'pointer'}}>
                    <DotComponent style={{marginLeft: 15}}></DotComponent>
                    <Typography style={{padding: '0 15px 0 5px'}}>BSC</Typography>
                    <WalletInfo style={{background: 'rgb(59, 60, 78)', padding: '5px 20px'}}>0x1234...5678</WalletInfo>
                </WalletInfo>
                <img src="img/button.png" alt="button" style={{background: 'rgb(59, 60, 78)', borderRadius: 7, width: 24, padding: 3, cursor: 'pointer'}} />
            </Box>
            {/* <ConnectWallet>
                {props.mode === "staking" && !account &&
                    <Button style={{ fontWeight: 'bold', color: 'black', background: 'yellow' }} onClick={login}>Connect Wallet</Button>
                }
                {props.mode === "staking" && account &&
                    <Box display="flex" fontSize="15px" alignItems="center" style={{ cursor: 'pointer' }} position="relative" onClick={() => { setOpen(!open) }}>
                        <Box >{shortAddr(account || "")}</Box>
                        <Box position="absolute" color="#FCF686" display={open ? "flex" : "none"} alignItems="flex-start" flexDirection="column" borderRadius="6px" p="1vw" pr="1.5vw" left="-40%" width="150%" boxShadow="5px 4px 13px 7px #000000" top="calc(100% + 1vw)" bgcolor="#202020" zIndex={10}>
                            <Box component={MuiButton} color="#FCF686" style={{ textTransform: 'none' }} onClick={copyAddress} startIcon={<ContentCopyIcon />}>Copy Address</Box>
                            <MuiButton
                                color="inherit"
                                style={{ textTransform: 'none' }}
                                startIcon={<OpenInNewIcon />}
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                            >
                                View on Explorer
                            </MuiButton>
                            <Box component={MuiButton} color="#FCF686" style={{ textTransform: 'none' }} startIcon={<LogoutIcon />} onClick={logout} >Disconnect</Box>
                        </Box>
                    </Box>
                }
            </ConnectWallet> */}
        </Box>
    </Box>
}

const DotComponent = styled(Box)`
    border-radius: 50%;
    background: rgb(83, 243, 195);
    width: 5px;
    height: 5px;
`;
const WalletInfo = styled(Box)`
    display: flex;
    align-items: center;
    border-radius: 20px;
    background: rgb(44, 45, 58);
    color: white;
`;
const MobileLogo = styled(Box)`
    position: relative;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    >img:last-child {
        position: absolute;
        top: 30px;
        left: calc(100% - 20px);
    }
`;
const MobileMenuBox = styled(Box)`
    background: #212121fa;
    padding: 20px;
    position: absolute;
    width: calc(70vw);
    height: 100vh;
    top: -15px;
    left: -40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    >p:hover {
        color: yellow !important;
    }
`;
const Logo = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    >p {
        @media (max-width: 450px) {
            display: none;
        }
    }
`;
const ConnectWallet = styled(Box)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 30px;
    @media (max-width: 450px) {
        display: none;
    }
`;

const DesktopMenu = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    white-space: nowrap;
	@media (max-width: 888px) {
		display: none;
	}
    >p:hover {
        color: yellow !important;
    }
`

const MobileMenu = styled(Box)`
    padding-bottom: 4px;
    position: relative;
    margin-right: 30px;
	@media (min-width: 888px) {
		display: none;
	}
`

export default Topbar;