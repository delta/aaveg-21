import React, {useState, useEffect} from 'react';
import Carousel, { consts } from 'react-elastic-carousel'
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@material-ui/core'
import './carouselStyles.css'
import { useStyles } from "./styles";
import bg from '../../assets/bg.mp4'

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
    const classes = useStyles();
    const [questions, setQues] = useState([])
    const [loading, setLoading] = useState(true)

    const carouselSettings = {
        itemPosition: consts.START,
        focusOnSelect: false,
    };

    const setQuestions = () => {
        //TODO: fetch qIds from backend

        // temporary lists
        const qIdList = ["1", "3", "4", "5", "7"]
        
        const ques = []
        qList.forEach(q => {
        if(qIdList.includes(q.qId)){
            ques.push(q)
        }
        })
        setQues(ques)
        console.log(ques, questions)
        setLoading(false)
    }

    useEffect(() => {
        setQuestions()
        // eslint-disable-next-line
    }, [])

    const handleChange = e => {
        const val = e.target.value
        console.log(val)
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
                    <Carousel {...carouselSettings}> 
                        {questions.map((q, index) => {
                            return(
                                <div key={q.qId}>
                                    <div className={classes.cover}>
                                    <FormLabel component="legend">{q.question}</FormLabel>
                                        <RadioGroup aria-label="quiz" value={q.answers[0].ansId} onChange={handleChange} name="quiz">
                                            <FormControlLabel value={q.answers[0].ansId} control={<Radio />} label={q.answers[0].answer}  />
                                            <FormControlLabel value={q.answers[1].ansId} control={<Radio />} label={q.answers[1].answer} />
                                            <FormControlLabel value={q.answers[2].ansId} control={<Radio />} label={q.answers[2].answer} />
                                            <FormControlLabel value={q.answers[3].ansId} control={<Radio />} label={q.answers[3].answer} />
                                    </RadioGroup>
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