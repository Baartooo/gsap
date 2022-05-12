import React, { useEffect, useRef } from 'react';

import gsap from 'gsap/all';
import { Draggable } from 'gsap/Draggable';

import { Squares } from '../squares/Squares';

gsap.registerPlugin(Draggable);

export const GsapDraggable = () => {
  const red = useRef<HTMLDivElement>(null);
  const green = useRef<HTMLDivElement>(null);
  const blue = useRef<HTMLDivElement>(null);

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
      gsap.set(_green, {
        x: 0,
        y: 0,
        rotate: 0,
      });
    }
  };

  useEffect(() => {
    const _red = red.current;
    const _green = green.current;
    const _blue = blue.current;

    if (_red && _green && _blue) {

      const draggable = Draggable.create([_red, _green, _blue], {
        type: 'rotation', // also rotation is possible
      });

      return () => {
        draggable[0].kill();
      };
    }
  }, []);

  return (
    <Squares red={red} green={green} blue={blue} resetAnimation={resetAnimation} triggerAnimation={() => null} />
  );
};
