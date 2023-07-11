import React, { useState, useEffect } from 'react';
import SVGAnimation from './Skyline';
import { useLocation } from 'react-router-dom';

const SkylineWrapper = () => {
  const [animationStyle, setAnimationStyle] = useState({});
  const location = useLocation();

  const pageYValues = {
    mapB: {
      bld1: '21%',
      bld2: '100%',
      bld3: '25%',
      bld4: '44%',
      bld5: '122%',
      bld6: '21%',
      bld7: '0%',
     
    },
    homeB: {
      bld1: '0%',
      bld2: '0%',
      bld3: '0%',
      bld4: '0%',
      bld5: '0%',
      bld6: '0%',
      bld7: '0%',
     
    },

    clientsB: {
        bld1: '24%',
        bld2: '0%',
        bld3: '10%',
        bld4: '54%',
        bld5: '11%',
        bld6: '77%',
        bld7: '0%',
       
      },
      EditProfileB: {
        bld1: '50%',
        bld2: '120%',
        bld3: '50%',
        bld4: '100%',
        bld5: '90%',
        bld6: '90%',
        bld7: '10%',
      
      },
    profileB: {
        bld1: '50%',
        bld2: '120%',
        bld3: '50%',
        bld4: '100%',
        bld5: '90%',
        bld6: '90%',
        bld7: '10%',
      
      },
      "signuppq/0": {
        bld1: '50%',
        bld2: '120%',
        bld3: '50%',
        bld4: '80%',
        bld5: '140%',
        bld6: '90%',
        bld7: '10%',
      
      },
      "signuppq/1": {
        bld1: '50%',
        bld2: '120%',
        bld3: '50%',
        bld4: '80%',
        bld5: '140%',
        bld6: '90%',
        bld7: '10%',
      
      },
      "signuppq/2": {
        bld1: '20%',
        bld2: '120%',
        bld3: '20%',
        bld4: '60%',
        bld5: '70%',
        bld6: '50%',
        bld7: '0%',
      
      },
      "signuppq/3": {
        bld1: '17%',
        bld2: '50%',
        bld3: '15%',
        bld4: '50%',
        bld5: '60%',
        bld6: '25%',
        bld7: '0%',
      
      },
      "signuppq/4": {
        bld1: '0%',
        bld2: '44%',
        bld3: '12%',
        bld4: '44%',
        bld5: '55%',
        bld6: '21%',
        bld7: '0%',
      
      },
      "signuppq/5": {
        bld1: '0%',
        bld2: '30%',
        bld3: '0%',
        bld4: '18%',
        bld5: '45%',
        bld6: '17%',
        bld7: '0%',
      
      },
      "signuppq/6": {
        bld1: '0%',
        bld2: '7%',
        bld3: '0%',
        bld4: '4%',
        bld5: '35%',
        bld6: '15%',
        bld7: '0%',
      
      },
      "signuppq/7": {
        bld1: '0%',
        bld2: '4%',
        bld3: '0%',
        bld4: '2%',
        bld5: '25%',
        bld6: '0%',
        bld7: '0%',
      
      },
  
      "signuppq/8": {
        bld1: '0%',
        bld2: '0%',
        bld3: '0%',
        bld4: '0%',
        bld5: '0%',
        bld6: '0%',
        bld7: '0%',
      
      },
      "signupbsq/0": {
        bld1: '50%',
        bld2: '120%',
        bld3: '50%',
        bld4: '80%',
        bld5: '140%',
        bld6: '90%',
        bld7: '10%',
      
      },
      "signupbsq/1": {
        bld1: '50%',
        bld2: '120%',
        bld3: '50%',
        bld4: '80%',
        bld5: '140%',
        bld6: '90%',
        bld7: '10%',
      
      },
      "signupbsq/2": {
        bld1: '20%',
        bld2: '120%',
        bld3: '20%',
        bld4: '60%',
        bld5: '70%',
        bld6: '50%',
        bld7: '0%',
      
      },
      "signupbsq/3": {
        bld1: '17%',
        bld2: '50%',
        bld3: '15%',
        bld4: '50%',
        bld5: '60%',
        bld6: '25%',
        bld7: '0%',
      
      },
      "signupbsq/4": {
        bld1: '0%',
        bld2: '44%',
        bld3: '12%',
        bld4: '44%',
        bld5: '55%',
        bld6: '21%',
        bld7: '0%',
      
      },
      "signupbsq/5": {
        bld1: '0%',
        bld2: '30%',
        bld3: '0%',
        bld4: '18%',
        bld5: '45%',
        bld6: '17%',
        bld7: '0%',
      
      },
      "signupbsq/6": {
        bld1: '0%',
        bld2: '7%',
        bld3: '0%',
        bld4: '4%',
        bld5: '35%',
        bld6: '15%',
        bld7: '0%',
      
      },
      "signupbsq/7": {
        bld1: '0%',
        bld2: '4%',
        bld3: '0%',
        bld4: '2%',
        bld5: '25%',
        bld6: '0%',
        bld7: '0%',
      
      },
      "signupbsq/8": {
        bld1: '0%',
        bld2: '2%',
        bld3: '0%',
        bld4: '0%',
        bld5: '12%',
        bld6: '4%',
        bld7: '0%',
      
      },
      "signupbsq/9": {
        bld1: '0%',
        bld2: '0%',
        bld3: '0%',
        bld4: '0%',
        bld5: '0%',
        bld6: '0%',
        bld7: '0%',
      
      },
      
  };

  useEffect(() => {
    const currentPage = location.pathname.replace('/', '');
    const pathYValues = pageYValues[currentPage];
    const style = {};

    if (pathYValues) {
      for (const path in pathYValues) {
        style[`--${path}-Y`] = pathYValues[path];
      }
    }

    setAnimationStyle(style);
  }, [location.pathname]);

  return (
    <div>
      <SVGAnimation style={animationStyle} />
    </div>
  );
};

export default SkylineWrapper;