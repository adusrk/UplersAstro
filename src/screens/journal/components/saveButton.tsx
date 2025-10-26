import React from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';
import { SaveButtonProps } from '../../../types';
import { JOURNAL_TEXTS } from '../../../constants/text';

const SaveButton: React.FC<SaveButtonProps> = ({
  saveButtonAnim,
  journalText,
  entries,
  saveEntry,
  animateSaveButton,
}) => {
  const isTodayEntrySaved = entries.some(
    entry => new Date(entry.timestamp).toDateString() === new Date().toDateString()
  );

  return (
    <Animated.View style={[styles.saveButtonContainer, { transform: [{ scale: saveButtonAnim }] }]}>
      <TouchableOpacity
        style={[styles.saveButton, !journalText.trim() && styles.saveButtonDisabled]}
        onPress={() => saveEntry(animateSaveButton)}
        disabled={!journalText.trim()}
      >
        <LinearGradient
          colors={
            journalText.trim() ? ['#6366F1', '#8B5CF6'] : ['#6B7280', '#4B5563']
          }
          style={styles.saveButtonGradient}
        >
          <Text style={styles.saveButtonIcon}>{JOURNAL_TEXTS.saveIcon}</Text>
          <Text style={styles.saveButtonText}>
            {isTodayEntrySaved ? JOURNAL_TEXTS.updateEntry : JOURNAL_TEXTS.saveEntry}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SaveButton;
