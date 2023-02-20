import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import './addStaff.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import LoadingButton from '@mui/lab/LoadingButton'
import axios from 'axios'
import { CAFE_EXOTIQUE_API_URL } from '../constants'
import Alert from '@mui/material/Alert'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { FormControl, MenuItem } from '@mui/material'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


function AddStaff() {

    const [firstname, setFirstname] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [role, setRole] = useState("")
    const [createStaffFailed, setCreateStaffFailed] = useState(false)
    const [staffCreated, setStaffCreated] = useState(false)
    const [loading, setLoading] = useState(false)


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
    const handleFirstnameChange = (e) => {
        setFirstname(e.target.value)
    }
    const handleLastnameChange = (e) => {
        setLastName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleRoleChange = (e) => {
        console.log(e.target.value)
        setRole(e.target.value)
    }

    const createStaff = () => {

        if (firstname && lastName && email && phoneNumber && role) {
            const request = {
                "phoneNumber": phoneNumber,
                "email": email,
                "firstName": firstname,
                "lastName": lastName,
                "role": role
            }

            axios.post(`${CAFE_EXOTIQUE_API_URL}/staff/addStaff`, request)
                .then(async res => {
                    setCreateStaffFailed(false)
                    console.log("Success", res.data)
                    setStaffCreated(true)
                    setFirstname(null)
                    setLastName(null)
                    setEmail(null)
                    setPhoneNumber(null)
                    setRole('')
                })
                .catch(err => {
                    console.log(err)
                    setCreateStaffFailed(true)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    return (
        <Grid container align="center" className='content loginGrid'>
            <Paper className='loginCard' elevation={10}>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4">
                            Add new staff
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={12} className={staffCreated ? "paddingTop10" : "paddingTop40"}>
                        <Grid item alignContent={'center'}>
                            {staffCreated && <Alert severity="success">Staff created !!</Alert>}
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }} component="form" autoComplete='off' autoCapitalize='off'>
                                <div >
                                    <TextField xs={10} sm={6}
                                        label="First Name"
                                        id="firstname"
                                        variant="standard"
                                        placeholder='First Name'
                                        style={{ paddingRight: "20px" }}
                                        onChange={handleFirstnameChange}

                                    />
                                    <TextField xs={10} sm={6}
                                        label="Last Name"
                                        id="lastname"
                                        variant="standard"
                                        placeholder='Last Name'
                                        onChange={handleLastnameChange}
                                    />
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={10} sm={10} className="paddingTop10">
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
                                component="form" autoComplete='off' autoCapitalize='off'>
                                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Email" variant="standard" fullWidth
                                    onChange={handleEmailChange}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={10} sm={10} className="paddingTop10">
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
                                component="form" autoComplete='off' autoCapitalize='off'>
                                <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Phone Number" variant="standard" fullWidth
                                    onChange={handlePhoneNumberChange}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={10} sm={10} className="paddingTop10">
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
                                component="form" autoComplete='off' autoCapitalize='off'>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-select-small">Select Role</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={role}
                                        label="Select Role"
                                        variant='standard'
                                        fullWidth
                                        onChange={handleRoleChange}
                                    >
                                        {roleList.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item alignContent={'center'} className="paddingTop40 paddingBottom20">
                            <LoadingButton variant="contained" loading={loading} onClick={createStaff}>Create</LoadingButton>
                        </Grid>
                        <Grid item alignContent={'center'}>
                            {createStaffFailed && <Alert severity="error">Login failed !  Check username / password</Alert>}
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default AddStaff