import React from 'react';
import { Animated, TouchableOpacity, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';

interface ZodiacSelectorProps {
  fadeAnim: any;
  slideAnim: any;
  showWheel: boolean;
  toggleWheelHandler: () => void;
  selectedSign: any;
  children: React.ReactNode;
}

const ZodiacSelector: React.FC<ZodiacSelectorProps> = ({
  fadeAnim, slideAnim, showWheel, toggleWheelHandler, selectedSign, children
}) => (
  <Animated.View
    style={[styles.selectorContainer, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
  >
    <TouchableOpacity
      style={[styles.selectorButton, { backgroundColor: selectedSign.color }]}
      onPress={toggleWheelHandler}
    >
      <LinearGradient colors={['transparent', 'transparent']} style={styles.selectorGradient}>
        <Text style={styles.currentSymbol}>{selectedSign.symbol}</Text>
        <View style={styles.selectorText}>
          <Text style={styles.selectorLabel}>{selectedSign.label}</Text>
          <Text style={styles.selectorDates}>{selectedSign.dates}</Text>
        </View>
        <Text style={styles.selectorArrow}>{showWheel ? '▲' : '▼'}</Text>
      </LinearGradient>
    </TouchableOpacity>

    {children}
  </Animated.View>
);

export default ZodiacSelector;
