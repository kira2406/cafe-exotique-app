import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import React from 'react'
import ConstructionIcon from '@mui/icons-material/Construction';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Homepage() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    console.log(user)
    function redirectToAddStaff() {
        navigate('/addStaff');
    }

    function getData() {
        console.log("KP", user)
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
                HI <button onClick={getData}>Click me</button>
            </Paper>
        </Grid>
    )
}

export default Homepage