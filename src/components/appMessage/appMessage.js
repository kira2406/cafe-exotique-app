import Alert from '@mui/material/Alert'
import React, { useEffect, useState } from 'react'
import './appMessage.css'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { clearAppMessages } from "../../redux/app/actions"

function AppMessage() {
    const [appMessages, setAppMessage] = useState([])
    const appMessagesState = useSelector((state) => state.app.appMessages);

    useEffect(() => {
        setAppMessage(appMessagesState)
    }, [appMessagesState])

    const dispatch = useDispatch()

    const clearMessage = (id) => {
        dispatch(clearAppMessages(id))
    }

    return (
        <div className='appMessage'>
            {
                appMessages.map((notification, index) => {
                    if (notification.timeout) {
                        setTimeout(function () { return dispatch(clearAppMessages(notification.id)) }, 4000)
                    }
                    return <Alert key={index} variant="filled" severity={notification.type}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    clearMessage(notification.id)
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }>
                        {notification.message}
                    </Alert>
                })
            }
        </div>
    )
}

export default AppMessage