import { useState, useEffect } from 'react';

import myPic from "./image/homebg.png";

function SizeUpdate() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div>
    <h1>Hi, welcome to my website!!!</h1>
    <p>My name is Weiming Quan</p>
    <img width = {windowWidth} src = {myPic} alt="" />
    
  </div>
  );
}

export default SizeUpdate;