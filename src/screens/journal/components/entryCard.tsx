import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from '../styles';
import { EntryCardProps } from '../../../types';
import { JOURNAL_TEXTS } from '../../../constants/text';

const EntryCard: React.FC<EntryCardProps> = ({ entry, deleteEntry, formatEntryDate }) => (
  <Animated.View style={styles.entryCard}>
    <View style={styles.entryBackground}>
      <View style={styles.entryHeader}>
        <View style={styles.entryMeta}>
          <Text style={styles.entryDate}>{entry.date}</Text>
          <Text style={styles.entryTime}>{formatEntryDate(entry.timestamp)}</Text>
        </View>
        <View style={styles.entryActions}>
          <Text style={styles.entryMood}>{entry.mood}</Text>
          <TouchableOpacity style={styles.deleteButton} onPress={() => deleteEntry(entry.timestamp)}>
            <Text style={styles.deleteButtonText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.entryText} numberOfLines={4}>
        {entry.text}
      </Text>

      {entry.text.length > 150 && <Text style={styles.readMore}>{JOURNAL_TEXTS.readMore}</Text>}
    </View>
  </Animated.View>
);

export default EntryCard;
