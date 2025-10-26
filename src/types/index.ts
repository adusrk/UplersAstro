import { Animated } from 'react-native';
import { JournalEntry } from '../constants/app.constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export type HeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  fadeAnim: Animated.Value;
  slideAnim: Animated.Value;
  today: string;
};

export type EntryCardProps = {
  entry: JournalEntry;
  deleteEntry: (timestamp: number) => void;
  formatEntryDate: (timestamp: number) => string;
};

export type EntryListProps = {
  entries: JournalEntry[];
  fadeAnim: Animated.Value;
  slideAnim: Animated.Value;
  deleteEntry: (timestamp: number) => void;
  formatEntryDate: (timestamp: number) => string;
};

export type JournalInputProps = {
  fadeAnim: Animated.Value;
  slideAnim: Animated.Value;
  inputBorderColor: Animated.AnimatedInterpolation;
  journalText: string;
  setJournalText: (text: string) => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  characterCount: number;
  handleTextFocus: () => void;
  handleTextBlur: () => void;
};

export type SaveButtonProps = {
  saveButtonAnim: Animated.Value;
  journalText: string;
  entries: JournalEntry[];
  saveEntry: (animateSaveButton: () => void) => void;
  animateSaveButton: () => void;
};
