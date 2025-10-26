import React from 'react';
import { Animated, View, Text, ActivityIndicator } from 'react-native';
import styles from '../styles';

interface HoroscopeCardProps {
  fadeAnim: any;
  slideAnim: any;
  selectedSign: any;
  horoscope: string;
  loading: boolean;  // add loading prop
}

const HoroscopeCard: React.FC<HoroscopeCardProps> = ({
  fadeAnim,
  slideAnim,
  selectedSign,
  horoscope,
  loading
}) => (
  <Animated.View
    style={[
      styles.horoscopeCard,
      { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
    ]}
  >
    <View style={styles.cardBackground}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Today's Horoscope</Text>
        <View style={[styles.signIndicator, { backgroundColor: selectedSign.color }]}>
          <Text style={styles.signIndicatorText}>{selectedSign.symbol}</Text>
        </View>
      </View>

      {/* Loader or Horoscope Text */}
      {loading ? (
        <ActivityIndicator size="large" color={selectedSign.color} style={{ marginVertical: 20 }} />
      ) : (
        <Text style={styles.horoscopeText}>{horoscope}</Text>
      )}

      <View style={styles.cardFooter}>
        <View style={styles.luckyInfo}>
          <Text style={styles.luckyLabel}>Lucky Color</Text>
          <View style={[styles.colorDot, { backgroundColor: selectedSign.color }]} />
          <Text style={styles.luckyValue}>{selectedSign.color}</Text>
        </View>
        <View style={styles.luckyInfo}>
          <Text style={styles.luckyLabel}>Lucky Number</Text>
          <Text style={styles.luckyValue}>{Math.floor(Math.random() * 9) + 1}</Text>
        </View>
      </View>
    </View>
  </Animated.View>
);

export default HoroscopeCard;
