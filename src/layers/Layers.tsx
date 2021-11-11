import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';

export const Layers = () => {
  const top = useRef<SVGPathElement>(null);
  const middle = useRef<SVGPathElement>(null);
  const bottom = useRef<SVGPathElement>(null);

  useEffect(() => {
    const _top = top.current;
    const _middle = middle.current;
    const _bottom = bottom.current;

    if (_top && _middle && _bottom) {
      gsap.set([_top, _bottom], {
        autoAlpha: 0,
        x: -100
      });

      gsap.set(_middle, {
        autoAlpha: 0,
        x: 100
      });

      gsap.to([_top, _middle, _bottom], {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 1,
        // stagger: 1
      });

    }
  }, []);

  return (
    <svg
      width={580}
      height={580}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={top}
        d="M290.38 292.018l99.396 28.604-99.386 26.859-101.493-28.96 101.483-26.503z"
        fill="#D77"
        stroke="#3C3C3C"
      />
      <path
        ref={middle}
        d="M292.38 264.018l99.396 28.604-99.386 26.859-101.493-28.96 101.483-26.503z"
        fill="#7781DD"
        stroke="#3C3C3C"
      />
      <path
        ref={bottom}
        d="M291.38 232.768l99.396 28.604-99.386 26.859-101.493-28.96 101.483-26.503z"
        fill="#77B8DD"
        stroke="#3C3C3C"
      />
    </svg>
  );
};
