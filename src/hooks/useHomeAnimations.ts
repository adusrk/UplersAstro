import React from 'react';
import { Animated, Dimensions } from 'react-native';
import {
  ANIMATION_CONFIGS,
  ANIMATION_DEFAULTS,
  EASING,
  AnimatedStar,
} from '../constants/animation.constants';

const { width, height } = Dimensions.get('window');

export const useHomeAnimations = (starCount = ANIMATION_DEFAULTS.starCount) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(ANIMATION_DEFAULTS.initialSlideY)).current;
  const scaleAnim = React.useRef(new Animated.Value(ANIMATION_DEFAULTS.initialScale)).current;

  const starOpacity = React.useRef(new Animated.Value(0)).current;

  const movingStars = React.useRef<AnimatedStar[]>(
    Array.from({ length: starCount }).map(() => ({
      x: new Animated.Value(Math.random() * width),
      y: new Animated.Value(Math.random() * height * ANIMATION_DEFAULTS.starFieldHeightRatio),
      opacity: new Animated.Value(
        Math.random() * (ANIMATION_DEFAULTS.starOpacityRange.max - ANIMATION_DEFAULTS.starOpacityRange.min) +
          ANIMATION_DEFAULTS.starOpacityRange.min
      ),
    }))
  ).current;

  const wheelRotation = React.useRef(new Animated.Value(0)).current;

  const startAnimations = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: ANIMATION_CONFIGS.fadeInDuration,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: ANIMATION_CONFIGS.slideDuration,
          easing: EASING.slideOut,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: ANIMATION_CONFIGS.scaleDuration,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(starOpacity, {
        toValue: 1,
        duration: ANIMATION_CONFIGS.starFadeDuration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startStarAnimations = () => {
    movingStars.forEach((star) => {
      const move = () => {
        Animated.parallel([
          Animated.timing(star.x, {
            toValue: Math.random() * width,
            duration:
              ANIMATION_CONFIGS.starMoveMinDuration +
              Math.random() * (ANIMATION_CONFIGS.starMoveMaxDuration - ANIMATION_CONFIGS.starMoveMinDuration),
            easing: EASING.linear,
            useNativeDriver: true,
          }),
          Animated.timing(star.y, {
            toValue: Math.random() * height * ANIMATION_DEFAULTS.starFieldHeightRatio,
            duration:
              ANIMATION_CONFIGS.starMoveMinDuration +
              Math.random() * (ANIMATION_CONFIGS.starMoveMaxDuration - ANIMATION_CONFIGS.starMoveMinDuration),
            easing: EASING.linear,
            useNativeDriver: true,
          }),
          Animated.sequence([
            Animated.timing(star.opacity, {
              toValue: 0.2 + Math.random() * 0.5,
              duration: 2000,
              useNativeDriver: true,
            }),
            Animated.timing(star.opacity, {
              toValue: 0.6 + Math.random() * 0.4,
              duration: 2000,
              useNativeDriver: true,
            }),
          ]),
        ]).start(() => move());
      };
      move();
    });
  };

  const toggleWheel = (showWheel: boolean) => {
    Animated.timing(wheelRotation, {
      toValue: showWheel ? 0 : 1,
      duration: ANIMATION_CONFIGS.wheelToggleDuration,
      useNativeDriver: true,
    }).start();
  };

  const bounceScale = (scale: Animated.Value) => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.1,
        duration: ANIMATION_CONFIGS.bounceDuration,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: ANIMATION_CONFIGS.bounceDuration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return {
    fadeAnim,
    slideAnim,
    scaleAnim,
    starOpacity,
    movingStars,
    wheelRotation,
    startAnimations,
    startStarAnimations,
    toggleWheel,
    bounceScale,
  };
};
