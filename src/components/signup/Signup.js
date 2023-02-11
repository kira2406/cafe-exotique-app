import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import './signup.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import LoadingButton from '@mui/lab/LoadingButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CAFE_EXOTIQUE_API_URL } from '../constants'
import Alert from '@mui/material/Alert'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { FormControl, InputAdornment, MenuItem, OutlinedInput } from '@mui/material'

function Signup() {

    const [loginFailed, setLoginFailed] = useState(false)

    const navigate = useNavigate()

    const roleList = [
        {
            value: 'admin',
            label: 'Admin',
        },
        {
            value: 'waiter',
            label: 'Waiter',
        },
        {
            value: 'chef',
            label: 'Chef',
        },
        {
            value: 'receptionist',
            label: 'Receptionist',
        },
    ];

    return (
        <Grid container align="center" className='content loginGrid'>
            <Paper className='loginCard' elevation={10}>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4">
                            Add new staff
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} className="paddingTop40">
                        <Grid item xs={12} sm={12}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }} component="form" autoComplete='off' autoCapitalize='off'>
                                <div >
                                    <TextField xs={10} sm={6}
                                        label="First Name"
                                        id="firstname"
                                        variant="standard"
                                        placeholder='First Name'
                                        style={{ paddingRight: "20px" }}

                                    />
                                    <TextField xs={10} sm={6}
                                        label="Last Name"
                                        id="lastname"
                                        variant="standard"
                                        placeholder='Last Name'


                                    />
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={10} sm={10} className="paddingTop10">
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
                                component="form" autoComplete='off' autoCapitalize='off'>
                                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Email" variant="standard" fullWidth
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={10} sm={10} className="paddingTop10">
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
                                component="form" autoComplete='off' autoCapitalize='off'>
                                <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Phone Number" variant="standard" fullWidth
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={10} sm={10} className="paddingTop10">
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
                                component="form" autoComplete='off' autoCapitalize='off'>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField
                                    id="outlined-select-role"
                                    select
                                    label="Select Role"
                                    variant='standard'
                                    fullWidth
                                >
                                    {roleList.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                            </Box>
                        </Grid>
                        <Grid item alignContent={'center'} className="paddingTop40 paddingBottom20">
                            <LoadingButton variant="contained">Create</LoadingButton>
                        </Grid>
                        <Grid item alignContent={'center'}>
                            {loginFailed && <Alert severity="error">Login failed !  Check username / password</Alert>}
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default Signup