import React from 'react';
import { View, Text, TextInput, Animated } from 'react-native';
import styles from '../styles';
import { JournalInputProps } from '../../../types';
import { JOURNAL_TEXTS } from '../../../constants/text';

const JournalInput: React.FC<JournalInputProps> = ({
  fadeAnim,
  slideAnim,
  inputBorderColor,
  journalText,
  setJournalText,
  isEditing,
  setIsEditing,
  characterCount,
  handleTextFocus,
  handleTextBlur,
}) => (
  <Animated.View
    style={[
      styles.inputContainer,
      {
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
        borderColor: inputBorderColor,
      },
    ]}
  >
    <View style={styles.inputBackground}>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder={JOURNAL_TEXTS.placeholder}
        placeholderTextColor="rgba(255, 255, 255, 0.4)"
        value={journalText}
        onChangeText={setJournalText}
        onFocus={() => {
          setIsEditing(true);
          handleTextFocus();
        }}
        onBlur={handleTextBlur}
        textAlignVertical="top"
        maxLength={2000}
      />
      <View style={styles.inputFooter}>
        <Text style={styles.characterCount}>{characterCount}/2000</Text>
        {isEditing && <Text style={styles.autoSaveText}>{JOURNAL_TEXTS.autoSaving}</Text>}
      </View>
    </View>
  </Animated.View>
);

export default JournalInput;
