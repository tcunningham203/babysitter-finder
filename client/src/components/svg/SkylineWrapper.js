import React, { useState, useEffect } from 'react';
import SVGAnimation from './Skyline';
import { useLocation } from 'react-router-dom';

const SkylineWrapper = () => {
  const [animationStyle, setAnimationStyle] = useState({});
  const location = useLocation();

  const pageYValues = {
    map: {
      bld1: '21%',
      bld2: '100%',
      bld3: '25%',
      bld4: '44%',
      bld5: '122%',
      bld6: '15%',
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
    contacts: {
      bld1: '24%',
      bld2: '0%',
      bld3: '10%',
      bld4: '54%',
      bld5: '11%',
      bld6: '77%',
      bld7: '0%',
     
    },
    clients: {
        bld1: '24%',
        bld2: '0%',
        bld3: '10%',
        bld4: '54%',
        bld5: '11%',
        bld6: '77%',
        bld7: '0%',
       
      },
      EditProfile: {
        bld1: '50%',
        bld2: '120%',
        bld3: '50%',
        bld4: '100%',
        bld5: '90%',
        bld6: '90%',
        bld7: '10%',
      
      },
    profile: {
        bld1: '3%',
        bld2: '120%',
        bld3: '3%',
        bld4: '15%',
        bld5: '56%',
        bld6: '45%',
        bld7: '0%',
      
      }
      
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