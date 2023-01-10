import { useState, useEffect } from 'react';

import myPic from "./homebg.png";

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
  const temp = windowWidth;
  return (
    <div >
      <h1>Hi, welcome to my website!!!</h1>
      <p>Current window width: {windowWidth}</p>
      <p>Hello Test</p>
      <p>My name is Weiming Quan</p>
      <div style = {{
          backgroundImage: `url(${myPic})`,
          width: temp,
          height: 500
      }}>
        <p>Test</p>
      </div>
      <img width = {windowWidth} src = {myPic} alt="" />
    
    </div>
  );
}

export default SizeUpdate;