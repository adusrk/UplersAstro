import React from 'react';
import { Animated, Text } from 'react-native';
import styles from '../styles';

interface HeaderProps {
  fadeAnim: any;
  slideAnim: any;
  scaleAnim: any;
  today: string;
}

const Header: React.FC<HeaderProps> = ({ fadeAnim, slideAnim, scaleAnim, today }) => (
  <Animated.View
    style={[
      styles.header,
      { opacity: fadeAnim, transform: [{ translateY: slideAnim }, { scale: scaleAnim }] }
    ]}
  >
    <Text style={styles.title}>✨ Astro Journal</Text>
    <Text style={styles.subtitle}>Your Cosmic Daily Guide</Text>
    <Text style={styles.date}>{today}</Text>
  </Animated.View>
);

export default Header;
