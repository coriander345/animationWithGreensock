import React, { useRef, useEffect, useState } from 'react';

import './App.css';

import { TweenMax, Power3 } from 'gsap';

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setState(true);
  };
  const handleShirnk = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setState(false);
  };

  useEffect(() => {
    TweenMax.to(app, 0.8, { css: { visibility: 'visible' } }, 0.2);
    // TweenMax.from(circle, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    // });
    // TweenMax.from(circleRed, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.5,
    // });
    // TweenMax.from(circleBlue, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.8,
    // });
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue],
      0.8,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.5
    );
  }, []);

  return (
    <div className='App' ref={(el) => (app = el)}>
      <header className='App-header'>
        <div className='circle-container'>
          <div className='circle' ref={(el) => (circle = el)}></div>
          <div
            onClick={state !== true ? handleExpand : handleShirnk}
            ref={(el) => (circleRed = el)}
            className='circle red'
          ></div>
          <div ref={(el) => (circleBlue = el)} className='circle blue'></div>
        </div>
      </header>
    </div>
  );
}

export default App;
