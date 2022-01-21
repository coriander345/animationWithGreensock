import React, { useRef, useEffect, useState } from 'react';

import './App.css';

import { TweenMax, Power3 } from 'gsap';

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = (src) => {
    TweenMax.to(src, 0.8, {
      width: 1200,
      height: 1000,
      borderRadius: 0,
      ease: Power3.easeOut,
    });

    const arr = [circle, circleRed, circleBlue];

    for (let el of arr) {
      if (src !== el) {
        TweenMax.to(el, 0.8, {
          width: 100,
          height: 100,
          borderRadius: 100,
          ease: Power3.easeOut,
        });
      }
    }
    setState(true);
  };
  const handleShirnk = (src) => {
    TweenMax.to(src, 0.8, {
      width: 100,
      height: 100,
      borderRadius: 100,
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
          <div
            onClick={
              state !== true
                ? () => handleExpand(circle)
                : () => handleShirnk(circle)
            }
            className='circle'
            ref={(el) => (circle = el)}
          >
            <p>A</p>
          </div>
          <div
            onClick={
              state !== true
                ? () => handleExpand(circleRed)
                : () => handleShirnk(circleRed)
            }
            ref={(el) => (circleRed = el)}
            className='circle red'
          >
            <p>S</p>
          </div>
          <div
            onClick={
              state !== true
                ? () => handleExpand(circleBlue)
                : () => handleShirnk(circleBlue)
            }
            ref={(el) => (circleBlue = el)}
            className='circle blue'
          >
            <p>R</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
