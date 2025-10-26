import React from 'react';
import { Animated, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { zodiacSigns } from '../../../hooks/useHoroscope';
import styles from '../styles';

interface ZodiacWheelProps {
  showWheel: boolean;
  wheelRotation: any;
  selectedSign: any;
  onSelectSign: (sign: typeof zodiacSigns[0]) => void;
}

const ZodiacWheel: React.FC<ZodiacWheelProps> = ({
  showWheel,
  wheelRotation,
  selectedSign,
  onSelectSign
}) => {
  if (!showWheel) return null;

  return (
    <Animated.View
      style={[
        styles.wheelContainer,
        {
          opacity: wheelRotation,
          transform: [{
            scale: wheelRotation.interpolate({
              inputRange: [0, 1],
              outputRange: [0.8, 1],
            })
          }]
        }
      ]}
    >
      <View style={styles.wheelBackground}>
        <ScrollView contentContainerStyle={styles.wheelScroll}>
          {zodiacSigns.map((sign) => (
            <TouchableOpacity
              key={sign.value}
              style={[styles.zodiacOption, { borderLeftColor: sign.color }]}
              onPress={() => onSelectSign(sign)}
            >
              <Text style={styles.zodiacSymbol}>{sign.symbol}</Text>
              <View style={styles.zodiacTextContainer}>
                <Text style={styles.zodiacLabel}>{sign.label}</Text>
                <Text style={styles.zodiacDates}>{sign.dates}</Text>
              </View>
              {selectedSign.value === sign.value && (
                <View style={[styles.selectedDot, { backgroundColor: sign.color }]} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Animated.View>
  );
};

export default ZodiacWheel;
