import React, { useState } from 'react';
import { BACKEND_API } from '../../config'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { online, offline } from '../../redux/offline'


export const Waste = () => {
    const dispatch = useDispatch()
    const [msg, setmsg] = useState('')
    const check = () => {
        const route = '/check'
        axios.get(`${BACKEND_API}${route}`)
            .then(res => {
                if (res.status === 200) {
                    dispatch(online())
                    setmsg(res.data)
                }
                else {
                    console.log(res.status)
                    //debug
                }
            })
            .catch((err) => {
                dispatch(offline())
                console.error(1, err)
                setmsg("Connect to internet")
            })
    }
    return (<>
        <h1>Aaveg</h1><br />
        <button onClick={check}>Check server</button>
        {msg ? <div>{msg}</div> : null}
    </>
    )
}