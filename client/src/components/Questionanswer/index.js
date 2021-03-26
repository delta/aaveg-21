import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 

export const Questionanswer = () => {

    const [value, setValue] = React.useState('AGATE'); 

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(

        <div className="main"> 
        <h2>Answer the following</h2>
        <Slider {...settings}>
          <div className="qns">
            
                 <div className="item">

                      <div className="qn">
                        Which one of the following hostel was not part of aaveg'19-20 ?
                      </div>

                      <div className="options">
                      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                             <FormControlLabel value="AGATE" control={<Radio />} label="AGATE" />
                             <FormControlLabel value="diamond" control={<Radio />} label="diamond" />
                             <FormControlLabel value="coral" control={<Radio />} label="coral" />
                             <FormControlLabel value="opal" control={<Radio />} label="opal" />
                      </RadioGroup>
                      </div>

                 </div>

          </div>


          <div className="qns">
            
                 <div className="item">

                      <div className="qn">
                        Which one of the following hostel was not part of aaveg'19-20 ?
                      </div>

                      <div className="options">
                      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                             <FormControlLabel value="AGATE" control={<Radio />} label="AGATE" />
                             <FormControlLabel value="diamond" control={<Radio />} label="diamond" />
                             <FormControlLabel value="coral" control={<Radio />} label="coral" />
                             <FormControlLabel value="opal" control={<Radio />} label="opal" />
                      </RadioGroup>
                      </div>

                 </div>

          </div>


          <div className="qns">
            
                 <div className="item">

                      <div className="qn">
                        Which one of the following hostel was not part of aaveg'19-20 ?
                      </div>

                      <div className="options">
                      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                             <FormControlLabel value="AGATE" control={<Radio />} label="AGATE" />
                             <FormControlLabel value="diamond" control={<Radio />} label="diamond" />
                             <FormControlLabel value="coral" control={<Radio />} label="coral" />
                             <FormControlLabel value="opal" control={<Radio />} label="opal" />
                      </RadioGroup>
                      </div>

                 </div>

          </div>



          <div className="qns">
            
                 <div className="item">

                      <div className="qn">
                        Which one of the following hostel was not part of aaveg'19-20 ?
                      </div>

                      <div className="options">
                      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                             <FormControlLabel value="AGATE" control={<Radio />} label="AGATE" />
                             <FormControlLabel value="diamond" control={<Radio />} label="diamond" />
                             <FormControlLabel value="coral" control={<Radio />} label="coral" />
                             <FormControlLabel value="opal" control={<Radio />} label="opal" />
                      </RadioGroup>
                      </div>

                 </div>

          </div>
          
          
          
        </Slider>
      </div>

    )
}

export default Questionanswer;