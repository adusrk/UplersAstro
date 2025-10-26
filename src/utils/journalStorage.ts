import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS, JournalEntry } from '../constants/app.constants';

export const loadJournalEntries = async (): Promise<JournalEntry[]> => {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEYS.journalEntries);
    if (!stored) return [];
    const parsed: JournalEntry[] = JSON.parse(stored);
    return parsed.sort((a, b) => b.timestamp - a.timestamp);
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const saveJournalEntries = async (entries: JournalEntry[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.journalEntries, JSON.stringify(entries));
  } catch (err) {
    console.log('Storage save error:', err);
    throw err;
  }
};
