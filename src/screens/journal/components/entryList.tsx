import React from 'react';
import { Text, Animated } from 'react-native';
import EntryCard from './entryCard';
import styles from '../styles';
import { EntryListProps } from '../../../types';
import { JOURNAL_TEXTS } from '../../../constants/text';

const EntryList: React.FC<EntryListProps> = ({
  entries,
  fadeAnim,
  slideAnim,
  deleteEntry,
  editEntry,
  formatEntryDate,
  editingEntry,
}) => {
  if (!entries.length) return null;

  return (
    <Animated.View
      style={[
        styles.entriesSection,
        { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
      ]}
    >
      <Text style={styles.entriesTitle}>{JOURNAL_TEXTS.previousEntries}</Text>
      {entries.map(entry => (
        <EntryCard
          key={entry.timestamp}
          entry={entry}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
          formatEntryDate={formatEntryDate}
          isEditing={editingEntry?.timestamp === entry.timestamp}
        />
      ))}
    </Animated.View>
  );
};

export default EntryList;