import React, { RefObject } from 'react';

import s from './Squares.module.css';

export type SquaresProps = {
  red: RefObject<HTMLDivElement>;
  green: RefObject<HTMLDivElement>;
  blue: RefObject<HTMLDivElement>;
  triggerAnimation: () => void;
  resetAnimation: () => void;
}

export const Squares = ({ red, green, blue, triggerAnimation, resetAnimation }: SquaresProps) => {
  return (
    <div>
      <div className={s.controls}>
        <div className={s.trigger} onClick={triggerAnimation}>trigger</div>
        <div className={s.reset} onClick={resetAnimation}>reset</div>
      </div>
      <div ref={red} className={`${s.square} ${s.red}`} />
      <div ref={green} className={`${s.square} ${s.green}`} />
      <div ref={blue} className={`${s.square} ${s.blue}`} />
    </div>
  );
};
