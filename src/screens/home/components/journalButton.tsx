import React from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import styles from '../styles';

interface JournalButtonProps {
  fadeAnim: any;
  slideAnim: any;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const JournalButton: React.FC<JournalButtonProps> = ({ fadeAnim, slideAnim, navigation }) => (
  <Animated.View
    style={[
      styles.buttonContainer,
      { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
    ]}
  >
    <TouchableOpacity
      style={styles.journalButton}
      onPress={() => navigation.navigate('Journal')}
    >
      <LinearGradient colors={['#6366F1', '#8B5CF6']} style={styles.buttonGradient}>
        <Text style={styles.buttonText}>📖 Write Journal Entry</Text>
        <Text style={styles.buttonSubtext}>Document your cosmic journey</Text>
      </LinearGradient>
    </TouchableOpacity>
  </Animated.View>
);

export default JournalButton;
