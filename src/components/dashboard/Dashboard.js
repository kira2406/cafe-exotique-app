import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'

function Dashboard() {
    return (
        <Grid container align="center" className='content'>
            <Paper className='loginCard'>
                <Typography>
                    Dashboard
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Dashboard