import React, { createRef, RefObject, useCallback, useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const GsapScrollTrigger = () => {
  const labels = ['elo', '3', '2', '0'];
  const sections = useRef<RefObject<HTMLDivElement>[]>(labels.map(() => createRef()));

  const hideAllLabels = useCallback(() => {
    sections.current.forEach(section => {
      gsap.set(section.current, {
        autoAlpha: 0,
        x: -60,
      });
    });
  }, []);

  useEffect(() => {
    hideAllLabels();

    gsap.registerPlugin(ScrollTrigger);
    sections.current.forEach(section => {
      gsap.to(section.current, {
        scrollTrigger: {
          trigger: section.current,
          markers: true,
          start: '50% 50%', // % of element    % of window,
          end: '60% 50%', // % of element    % of window,
          scrub: 1,
        },
        autoAlpha: 1,
        x: 0,
      });
    });
  }, [hideAllLabels]);

  return (
    <div className={'st'} style={{
      display: 'flex',
      padding: '150px 0',
      flexDirection: 'column',
      width: '100%',
    }}>
      {labels.map((text, index) => (
        <div
          key={text}
          className={'st__section'}
          ref={sections.current[index]}
          style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 50,
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};
