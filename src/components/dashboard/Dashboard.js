import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import React from 'react'
import ConstructionIcon from '@mui/icons-material/Construction';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    function redirectToAddStaff() {
        navigate('/addStaff');
    }

    return (
        <Grid container align="center" className='content'>
            <Paper className='loginCard'>
                <Typography variant='h3'>
                    Welcome to Cafe Exotique!!! - KP
                </Typography>
                <Typography variant='h5'>
                    Site still under construction <ConstructionIcon />
                </Typography>
                <Button onClick={redirectToAddStaff} variant="contained">Add Staff</Button>
            </Paper>
        </Grid>
    )
}

export default Dashboard