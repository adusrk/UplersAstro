import * as React from 'react';
import { 
  ScrollView, 
  KeyboardAvoidingView,
  Platform,
  Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import { useJournal } from '../../hooks/useJournal';
import { useAnimation } from '../../hooks/useAnimation';
import Header from './components/header';
import JournalInput from './components/journalInput';
import SaveButton from './components/saveButton';
import EntryList from './components/entryList';
import styles from './styles';

type JournalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Journal'>;

type Props = {
  navigation: JournalScreenNavigationProp;
};

const JournalScreen: React.FC<Props> = ({ navigation }) => {
  const {
    journalText,
    setJournalText,
    entries,
    isEditing,
    setIsEditing,
    characterCount,
    saveEntry,
    deleteEntry,
    editEntry,
    formatEntryDate,
    editingEntry,
    setEditingEntry,
  } = useJournal();

  const {
    fadeAnim,
    slideAnim,
    saveButtonAnim,
    inputBorderColor,
    startAnimations,
    animateSaveButton,
    handleTextFocus,
    handleTextBlur,
  } = useAnimation();

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  React.useEffect(() => {
    startAnimations();
  }, []);

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <LinearGradient
        colors={['#0F0F2D', '#1A1A4B', '#2D1A4B']}
        style={styles.backgroundGradient}
      />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Header 
          navigation={navigation} 
          fadeAnim={fadeAnim} 
          slideAnim={slideAnim} 
          today={today} 
        />

        <JournalInput 
          fadeAnim={fadeAnim}
          slideAnim={slideAnim}
          inputBorderColor={inputBorderColor}
          journalText={journalText}
          setJournalText={setJournalText}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          characterCount={characterCount}
          handleTextFocus={handleTextFocus}
          handleTextBlur={handleTextBlur}
          editingEntry={editingEntry}
          setEditingEntry={setEditingEntry}
        />

        <SaveButton
          saveButtonAnim={saveButtonAnim}
          journalText={journalText}
          entries={entries}
          saveEntry={saveEntry}
          animateSaveButton={animateSaveButton}
          editingEntry={editingEntry}
        />

        <EntryList
          entries={entries}
          fadeAnim={fadeAnim}
          slideAnim={slideAnim}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
          formatEntryDate={formatEntryDate}
          editingEntry={editingEntry}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default JournalScreen;