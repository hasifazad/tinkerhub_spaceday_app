import { Grid, Typography } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <>
            <Grid container borderBottom={1} justifyContent='space-between' paddingX={6} paddingY={2}>
                <Grid item >
                    <Typography variant='h5' fontWeight={600}>TinkerSpace Carnival</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h5' fontWeight={600}>Tinker
                        <span style={{ fontWeight: 'lighter' }}>
                            Hub
                        </span>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Header