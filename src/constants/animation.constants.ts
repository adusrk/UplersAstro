import { Easing } from 'react-native';

export const ANIMATION_CONFIGS = {
  fadeInDuration: 800,
  slideDuration: 800,
  scaleDuration: 800,
  starFadeDuration: 1000,
  starMoveMinDuration: 6000,
  starMoveMaxDuration: 10000,
  bounceDuration: 150,
  wheelToggleDuration: 500,
};


export const ANIMATION_DEFAULTS = {
  initialSlideY: 50,
  initialScale: 0.8,
  starOpacityRange: { min: 0.3, max: 1 },
  starFieldHeightRatio: 0.6,
  starCount: 20,
};


export const EASING = {
  slideOut: Easing.out(Easing.cubic),
  linear: Easing.linear,
};


export type AnimatedStar = {
  x: any; 
  y: any;
  opacity: any;
};
