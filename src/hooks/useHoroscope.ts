import * as React from 'react';
import { ZODIAC_SIGNS, ZodiacSign } from '../constants/app.constants';

export const useHoroscope = () => {
  const [selectedSign, setSelectedSign] = React.useState<ZodiacSign>(ZODIAC_SIGNS[0]);
  const [horoscope, setHoroscope] = React.useState<string>('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const fetchHoroscope = React.useCallback(async (sign: ZodiacSign) => {
    try {
      setLoading(true);
      const day = 'today'; 
      const response = await fetch(
        `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign.value.toLowerCase()}&day=${day}`
      );
      const data = await response.json();

      if (data?.success) {
        setHoroscope(data.data.horoscope_data);
      } else {
        setHoroscope("The stars are quiet today. Try again later!");
      }
    } catch (error) {
      console.error('Horoscope fetch error:', error);
      setHoroscope("Unable to fetch horoscope. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  const loadHoroscope = React.useCallback((sign: ZodiacSign = selectedSign) => {
    fetchHoroscope(sign);
  }, [fetchHoroscope, selectedSign]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadHoroscope();
    setTimeout(() => setRefreshing(false), 1000);
  }, [loadHoroscope]);

  const selectSign = (sign: ZodiacSign) => {
    setSelectedSign(sign);
    loadHoroscope(sign);
  };

  React.useEffect(() => {
    loadHoroscope(selectedSign);
  }, []);

  return {
    selectedSign,
    horoscope,
    refreshing,
    loading,
    onRefresh,
    selectSign,
  };
};

export { ZODIAC_SIGNS as zodiacSigns };
