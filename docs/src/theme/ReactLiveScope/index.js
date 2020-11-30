import React from 'react';
import { O, R, A, pipe } from '../../../../src';

const ReactLiveScope = {
  React,
  O,
  R,
  A,
  pipe,
  ...React,
};

export default ReactLiveScope;
