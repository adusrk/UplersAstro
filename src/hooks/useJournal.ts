import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { JournalEntry, JOURNAL_CONSTANTS } from '../constants/app.constants';
import { loadJournalEntries, saveJournalEntries } from '../utils/journalStorage';
import { getMoodFromText } from '../utils/moodDetection';
import { formatEntryDate } from '../utils/journalDate';

export const useJournal = () => {
  const [journalText, setJournalText] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null);

  useEffect(() => {
    (async () => {
      const loaded = await loadJournalEntries();
      setEntries(loaded);

      const todayEntry = loaded.find(
        entry => new Date(entry.timestamp).toDateString() === new Date().toDateString()
      );
      if (todayEntry) setJournalText(todayEntry.text);
    })();
  }, []);

  useEffect(() => {
    setCharacterCount(journalText.length);

    const timer = setTimeout(() => {
      if (journalText.trim() && isEditing) autoSaveEntry();
    }, JOURNAL_CONSTANTS.autoSaveDelay);

    return () => clearTimeout(timer);
  }, [journalText]);

  const saveEntry = async (animateSaveButton: () => void) => {
    if (!journalText.trim()) {
      Alert.alert(
        JOURNAL_CONSTANTS.alerts.emptyEntry.title,
        JOURNAL_CONSTANTS.alerts.emptyEntry.message
      );
      return;
    }

    animateSaveButton();

    const newEntry: JournalEntry = {
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      text: journalText,
      timestamp: editingEntry ? editingEntry.timestamp : Date.now(),
      mood: getMoodFromText(journalText),
    };

    let updatedEntries;
    if (editingEntry) {
      // Update existing entry
      updatedEntries = entries.map(entry => 
        entry.timestamp === editingEntry.timestamp ? newEntry : entry
      );
    } else {
      // Create new entry
      updatedEntries = [
        newEntry,
        ...entries.filter(
          entry => new Date(entry.timestamp).toDateString() !== new Date().toDateString()
        ),
      ];
    }

    await saveJournalEntries(updatedEntries);
    setEntries(updatedEntries);
    setIsEditing(false);
    setEditingEntry(null);

    Alert.alert(
      editingEntry ? JOURNAL_CONSTANTS.alerts.updateSuccess.title : JOURNAL_CONSTANTS.alerts.saveSuccess.title,
      editingEntry ? JOURNAL_CONSTANTS.alerts.updateSuccess.message : JOURNAL_CONSTANTS.alerts.saveSuccess.message,
      [{ text: 'Continue Writing', style: 'cancel' }]
    );
  };

  const autoSaveEntry = async () => {
    if (!journalText.trim()) return;

    const newEntry: JournalEntry = {
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      text: journalText,
      timestamp: Date.now(),
      mood: getMoodFromText(journalText),
    };

    const updatedEntries = [
      newEntry,
      ...entries.filter(
        entry => new Date(entry.timestamp).toDateString() !== new Date().toDateString()
      ),
    ];

    await saveJournalEntries(updatedEntries);
    setEntries(updatedEntries);
  };

  const deleteEntry = async (timestamp: number) => {
    Alert.alert(
      JOURNAL_CONSTANTS.alerts.deleteConfirm.title,
      JOURNAL_CONSTANTS.alerts.deleteConfirm.message,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const updatedEntries = entries.filter(entry => entry.timestamp !== timestamp);
            await saveJournalEntries(updatedEntries);
            setEntries(updatedEntries);

            // If we're editing this entry, clear the editing state
            if (editingEntry && editingEntry.timestamp === timestamp) {
              setEditingEntry(null);
              setJournalText('');
            }

            Alert.alert(
              JOURNAL_CONSTANTS.alerts.deleteSuccess.title,
              JOURNAL_CONSTANTS.alerts.deleteSuccess.message
            );
          },
        },
      ]
    );
  };

  const editEntry = (timestamp: number) => {
    const entryToEdit = entries.find(entry => entry.timestamp === timestamp);
    if (entryToEdit) {
      setEditingEntry(entryToEdit);
      setJournalText(entryToEdit.text);
      setIsEditing(true);
    }
  };

  return {
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
  };
};