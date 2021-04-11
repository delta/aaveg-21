import React from "react";
import style from "./style.module.css";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { useHistory } from "react-router";
import bgimg  from '../../assets/images/bgImg.png'

export const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <section className={style.section}>
      <main role="main" className={style.main_content}>
        <div className={style.vignette}/>
        <img src={bgimg} className={style.bgimg} alt='bgimg'/>
        <div className={style.titleCont}>
          <h1 className={style.main_title}>
            Aaveg, is not just a fest,
            <br />
            <span>but a war</span>
            <br />
            <span>between hostels.</span>
          </h1>
          <Button
            variant="contained"
            className={classes.Button}
            color="primary"
            onClick={() => history.push("/login")}
          >
            Login To Fill Questionaire
          </Button>
        </div>
      </main>
    </section>
  );
};
