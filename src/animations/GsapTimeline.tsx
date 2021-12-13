import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';

import { Squares } from '../squares/Squares';

export const GsapTimeline = () => {
  const red = useRef<HTMLDivElement>(null);
  const green = useRef<HTMLDivElement>(null);
  const blue = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline>(gsap.timeline());

  const triggerAnimation = () => {
    const _red = red.current;
    const _blue = blue.current;

    tl.current.kill();
    tl.current = gsap.timeline();

    tl.current
      .to(_red, {
        y: 0,
        autoAlpha: 1,
        duration: .4,
      })
      .to(_blue, {
        y: 0,
        autoAlpha: 1,
        duration: .4,
      }, '<')
      .to(_red, {
        x: 0,
        rotate: '-=90',
        duration: .4,
      }, '+=0.2')
      .to(_blue, {
        x: 0,
        rotate: '+=90',
        duration: .4,
      }, '<');
  };

  const resetAnimation = () => {
    const _red = red.current;
    const _green = green.current;
    const _blue = blue.current;
    gsap.killTweensOf([_red, _green, _blue]);

    if (_red && _green && _blue) {
      gsap.set([_red, _blue], {
        y: (index) => {
          return index === 1 ? -175 : 175;
        },
        x: (index) => {
          return index === 1 ? 175 : -175;
        },
        rotate: 0,
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
