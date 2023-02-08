import { Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'
import './login.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';

function Login() {
    return (
        <Grid container align="center" className='content'>
            <Paper className='loginCard'>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4">
                            Login
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} className="paddingTop50">
                        <Grid item xs={12} sm={8}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Email / Phone" variant="standard" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} align='center'>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }} className="paddingTop20">
                                <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Password" variant="standard" />
                            </Box>
                        </Grid>
                        <Grid item alignContent={'center'} className="paddingTop40">
                            <Button variant="contained">Authenticate</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default Login