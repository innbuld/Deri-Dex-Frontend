import React from "react";
import { Box } from "@mui/material";

interface LPTokenProps {
    token1: string,
    token2: string
}

const LPToken = (props: LPTokenProps) => {
    return (
        <Box style={{position: 'relative', width: 70, height: 40}}>
            <img src={'img/' + props.token2 + '.png'} style={{width: 40, height: 40, position: 'absolute', top: 0, left: 30}} alt="token2" />
            <img src={'img/' + props.token1 + '.png'} style={{width: 40, height: 40, position: 'absolute', top: 0, left: 0}} alt="token1" />
        </Box>
    )
}

export default LPToken;
