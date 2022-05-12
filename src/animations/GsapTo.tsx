import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';

import { Squares } from '../squares/Squares';

export const GsapTo = () => {
  const red = useRef<HTMLDivElement>(null);
  const green = useRef<HTMLDivElement>(null);
  const blue = useRef<HTMLDivElement>(null);

  const triggerAnimation = () => {
    const _red = red.current;
    const _green = green.current;
    const _blue = blue.current;

    if (_red && _green && _blue) {
      gsap.to([_red, _green, _blue], {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        // stagger: 1, // seconds between elements animation trigger
      });
    }
  };

  const resetAnimation = () => {
    const _red = red.current;
    const _green = green.current;
    const _blue = blue.current;
    gsap.killTweensOf([_red, _green, _blue]);

    if (_red && _green && _blue) {
      gsap.set([_red, _blue], {
        autoAlpha: 0,
        x: -100,
      });
      gsap.set(_green, {
        autoAlpha: 0,
        x: 100,
      });
    }
  };

  useEffect(() => {
    resetAnimation();
  }, []);

  return (
    <Squares red={red} green={green} blue={blue} resetAnimation={resetAnimation} triggerAnimation={triggerAnimation} />
  );
};
