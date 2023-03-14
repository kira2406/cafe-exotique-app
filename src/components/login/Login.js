import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React, { useEffect, useState } from 'react'
import './login.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import LoadingButton from '@mui/lab/LoadingButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CAFE_EXOTIQUE_API_URL } from '../constants'
import Alert from '@mui/material/Alert'
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails, userLoginRequest } from "../../redux/user/actions"
import { addAppMessage } from "../../redux/app/actions"
import { Button } from '@mui/material'

function Login(props) {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    // const [loginFailed, setLoginFailed] = useState(false)
    // const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const appMessages = useSelector((state) => state.app.appMessages);
    const loginSuccess = useSelector((state) => state.user.loginSuccess)
    const loginFailed = useSelector((state) => state.user.loginFailed)
    const loading = useSelector((state) => state.user.loading)

    const handleUsernameChange = (input) => {
        setUsername(input.target.value)
    }

    const handlePasswordChange = (input) => {
        setPassword(input.target.value)
    }

    const validateUsername = () => {
        var numberRegex = /^[0-9]+$/;

        var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if (username?.match(numberRegex)) {
            if (username.length === 10) {
                console.log("Phone number idhu")
                setPhoneError(false)
                setEmailError(false)
                return true
            } else {
                console.log("Incorrect Phone number!")
                setEmailError(false)
                setPhoneError(true)
            }
        } else {
            if (username?.match(emailRegex)) {
                console.log("email idhu")
                setPhoneError(false)
                setEmailError(false)
                return true
            } else {
                console.log("Incorrect email number!")
                setPhoneError(false)
                setEmailError(true)
            }
        }
        return false
    }

    const validatePassword = () => {
        if (password?.length > 8) {
            setpasswordError(false)
            return true;
        }
        setpasswordError(true)
        return false
    }

    const handleSubmit = async () => {
        // setLoading(true)
        // dispatch(addAppMessage("System Error", "error", false))
        // dispatch(addAppMessage("System Error", "info", true))
        if (validateUsername() && validatePassword()) {
            const request = {
                username: username,
                password: password
            }

            dispatch(userLoginRequest(request))
        } else {
            setpasswordError(true)
        }
        // setLoading(false)
    }

    return (
        <Grid container align="center" className='content loginGrid'>
            <Paper className='loginCard' elevation={10}>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4">
                            Login
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} className="paddingTop40">
                        <Grid item xs={12} sm={8}>
                            <Box sx={{ display: 'flex', alignItems: (phoneError || emailError) ? 'center' : 'flex-end', justifyContent: 'center', width: '300px' }}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Email / Phone" variant="standard" error={phoneError || emailError} helperText={phoneError ? "Phone number should be 10 digits" : emailError ? "Incorrect Email" : ""} onChange={handleUsernameChange}
                                    onFocus={() => {
                                        setPhoneError(false)
                                        setEmailError(false)
                                    }
                                    }
                                    style={{ width: "300px" }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} align='center'>
                            <Box sx={{ display: 'flex', alignItems: passwordError ? 'center' : 'flex-end', justifyContent: 'center', width: '300px' }} className="paddingTop20">
                                <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Password" variant="standard" error={passwordError}
                                    helperText={passwordError && "Password must be atleast 8 characters"}
                                    onChange={handlePasswordChange} style={{ width: "300px" }}
                                    onFocus={() =>
                                        setpasswordError(false)
                                    } />
                            </Box>
                        </Grid>
                        <Grid item alignContent={'center'} className="paddingTop40 paddingBottom20">
                            {!loginSuccess && <LoadingButton color={loginFailed ? "error" : "primary"} variant="contained" onClick={handleSubmit} disabled={loading} loading={loading}>{loginFailed ? "Login Failed" : "Authenticate"}</LoadingButton>}
                            {loginSuccess && <Typography>Logged in successfully!</Typography>}
                        </Grid>
                        {/* <Grid item alignContent={'center'}>
                            {loginFailed && <Alert severity="error">Login failed !  Check username / password</Alert>}
                        </Grid> */}
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default Login