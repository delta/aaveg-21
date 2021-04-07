import React, {useState, useEffect, useRef} from 'react';
import Carousel, { consts } from 'react-elastic-carousel'
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@material-ui/core'
import './carouselStyles.css'
import { useStyles } from "./styles";
import bg from '../../assets/bg.mp4'
import { BACKEND_API } from "../../config/config";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import axios from "axios";

import {qList} from './utils/qList'

const theme = createMuiTheme({
    palette: {
        primary:{
            main: "#8865b1"
        },
        secondary:{
            main: "#8865b1"
        },
        type: "dark"
    }
});

export const QnAPage = () => {
    const history = useHistory();
    const classes = useStyles();
    const [questions, setQues] = useState([])
    const [values, setValues] = useState([])
    const [loading, setLoading] = useState(true)
    const ref = useRef()

    const carouselSettings = {
        itemPosition: consts.START,
        focusOnSelect: false,
    };

    useEffect(() => {
        //TODO: fetch qIds from backend

        // temporary lists
        const qIdList = ["1","2", "3", "4", "5", "7"]
        var val = new Array(qIdList.length).fill(null)
        setValues(val)
        const ques = []
        qList.forEach(q => {
            if(qIdList.includes(q.qId)){
                ques.push(q)
            }
        })
        setQues(ques)
        setLoading(false)
    }, [])

    const handleChange = e => {
        const val = e.target.value
        var value = values
        var quesId = questions.findIndex((q)=>q.qId===String(parseInt(val.substr(0,2))))
        value[quesId] = questions[quesId].answers[parseInt(val.substr(2,1))-1].ansId
        setValues([...value])
    }

    const submitHandler = () => {
        console.log(values)
        
        axios
        .post(BACKEND_API + "/api/quiz/saveAnswers", JSON.stringify({questions:values}))
        .then((res) => {
            if (res.status_code === 200) {
            toast.success("logged in/ get from res", {
                position: "bottom-center",
            });
            history.push("/submitted");
            } else {
            toast.error("error/get from res", { position: "bottom-center" });
            }
        })
        .catch((err) => {
            console.log(err);
            toast.error(err.message, { position: "bottom-center" });
        });
    }

    if(loading) return(
        <div>
            Loading
        </div>
    ) 
    else return(
        <div className={classes.main}>
            <video autoPlay muted loop className={classes.bgVideo}>
                <source src={bg} type="video/mp4" />
            </video>
            <ThemeProvider theme={theme}>
                <div className={classes.container}>
                    <Typography variant="h3" component="h3" color="primary" className={classes.title}>
                        Teams Sorting 
                    </Typography>
                    <Carousel {...carouselSettings} ref={ref}> 
                        {questions.map((q, index) => {
                            return(
                                <div key={q.qId}>
                                    <div className={classes.cover}>
                                    <FormLabel component="legend">{q.question}</FormLabel>
                                        <RadioGroup aria-label="quiz" value={values[index]} onChange={handleChange} name="quiz">
                                            <FormControlLabel value={q.answers[0].ansId} control={<Radio />} label={q.answers[0].answer}  />
                                            <FormControlLabel value={q.answers[1].ansId} control={<Radio />} label={q.answers[1].answer} />
                                            <FormControlLabel value={q.answers[2].ansId} control={<Radio />} label={q.answers[2].answer} />
                                            <FormControlLabel value={q.answers[3].ansId} control={<Radio />} label={q.answers[3].answer} />
                                    </RadioGroup>
                                    {index===questions.length-1?<Button disabled={values.findIndex(v=>v===null)!==-1} onClick={submitHandler}>Submit</Button>:<Button onClick={()=>ref.current.slideNext()}>Next</Button>}
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>  
                </div>
            </ThemeProvider>
        </div>
    )
}