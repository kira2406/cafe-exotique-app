import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'
import ConstructionIcon from '@mui/icons-material/Construction';

function Dashboard() {
    return (
        <Grid container align="center" className='content'>
            <Paper className='loginCard'>
                <Typography variant='h3'>
                    Welcome to Cafe Exotique!!! - KP
                </Typography>
                <Typography variant='h5'>
                    Site still under construction <ConstructionIcon />
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Dashboard