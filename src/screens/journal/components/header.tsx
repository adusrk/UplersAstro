import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from '../styles';
import { HeaderProps } from '../../../types';
import { JOURNAL_TEXTS } from '../../../constants/text';

const Header: React.FC<HeaderProps> = ({ navigation, fadeAnim, slideAnim, today }) => (
  <Animated.View
    style={[
      styles.header,
      { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
    ]}
  >
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.backButtonText}>{JOURNAL_TEXTS.backButton}</Text>
    </TouchableOpacity>
    <Text style={styles.title}>{JOURNAL_TEXTS.headerTitle}</Text>
    <Text style={styles.date}>{today}</Text>
  </Animated.View>
);

export default Header;
