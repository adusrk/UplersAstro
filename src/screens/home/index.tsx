import * as React from 'react';
import { View, ScrollView, RefreshControl, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import { useHomeAnimations } from '../../hooks/useHomeAnimations';
import { useHoroscope, zodiacSigns } from '../../hooks/useHoroscope';
import styles from './styles';

import Header from './components/header';
import ZodiacSelector from './components/zodiacSelector';
import HoroscopeCard from './components/horoscopeCard';
import JournalButton from './components/journalButton';
import ZodiacWheel from './components/zodiacWheel';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = { navigation: HomeScreenNavigationProp };

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const {
    fadeAnim,
    slideAnim,
    scaleAnim,
    movingStars,
    wheelRotation,
    startAnimations,
    startStarAnimations,
    toggleWheel,
    bounceScale
  } = useHomeAnimations();

  const {
    selectedSign,
    horoscope,
    refreshing,
    onRefresh,
    selectSign,
      loading,  
  } = useHoroscope();

  const [showWheel, setShowWheel] = React.useState(false);

  React.useEffect(() => {
    startAnimations();
    startStarAnimations();
  }, []);

  const toggleWheelHandler = () => {
    setShowWheel(!showWheel);
    toggleWheel(showWheel);
  };

  const selectSignHandler = (sign: typeof zodiacSigns[0]) => {
    selectSign(sign);
    setShowWheel(false);
    bounceScale(scaleAnim);
  };

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0b0b18ff', '#1A1A4B', '#2D1A4B']}
        style={styles.backgroundGradient}
      />

      {movingStars.map((star, i) => (
        <Animated.View
          key={i}
          style={[
            styles.star,
            { opacity: star.opacity, transform: [{ translateX: star.x }, { translateY: star.y }] }
          ]}
        />
      ))}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[selectedSign.color]}
            tintColor={selectedSign.color}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        <Header
          fadeAnim={fadeAnim}
          slideAnim={slideAnim}
          scaleAnim={scaleAnim}
          today={today}
        />

        <ZodiacSelector
          fadeAnim={fadeAnim}
          slideAnim={slideAnim}
          showWheel={showWheel}
          toggleWheelHandler={toggleWheelHandler}
          selectedSign={selectedSign}
        >
         <ZodiacWheel
  showWheel={showWheel}
  wheelRotation={wheelRotation}
  selectedSign={selectedSign}
  onSelectSign={selectSignHandler}
/>

        </ZodiacSelector>

  <HoroscopeCard
  fadeAnim={fadeAnim}
  slideAnim={slideAnim}
  selectedSign={selectedSign}
  horoscope={horoscope}
  loading={loading}
/>


        <JournalButton
          fadeAnim={fadeAnim}
          slideAnim={slideAnim}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
