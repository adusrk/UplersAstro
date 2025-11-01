import { StyleSheet } from 'react-native';
import { JOURNAL_COLORS } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: JOURNAL_COLORS.background,
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 30,
  },
  backButtonText: {
    fontSize: 24,
    color: JOURNAL_COLORS.blue,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: JOURNAL_COLORS.white,
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: JOURNAL_COLORS.blue,
    fontWeight: '500',
  },
  inputContainer: {
    borderRadius: 20,
    borderWidth: 2,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: JOURNAL_COLORS.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  inputBackground: {
    padding: 20,
    backgroundColor: JOURNAL_COLORS.whiteTransparent05,
  },
  textInput: {
    minHeight: 200,
    fontSize: 16,
    lineHeight: 24,
    color: JOURNAL_COLORS.white,
    textAlignVertical: 'top',
  },
  inputFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  characterCount: {
    fontSize: 12,
    color: JOURNAL_COLORS.whiteTransparent05_2,
  },
  autoSaveText: {
    fontSize: 12,
    color: JOURNAL_COLORS.green,
    fontStyle: 'italic',
  },
  saveButtonContainer: {
    marginBottom: 30,
  },
  saveButton: {
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: JOURNAL_COLORS.blue,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
    height: 60,
  },
  saveButtonDisabled: {
    shadowColor: JOURNAL_COLORS.gray,
    shadowOpacity: 0.2,
  },
  saveButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  saveButtonIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: JOURNAL_COLORS.white,
  },
  entriesSection: {
    marginTop: 10,
  },
  entriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: JOURNAL_COLORS.white,
    marginBottom: 20,
  },
  entryCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
    shadowColor: JOURNAL_COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  entryBackground: {
    padding: 20,
    backgroundColor: JOURNAL_COLORS.whiteTransparent08,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  entryMeta: {
    flex: 1,
  },
  entryDate: {
    fontSize: 16,
    fontWeight: '600',
    color: JOURNAL_COLORS.white,
    marginBottom: 4,
  },
  entryTime: {
    fontSize: 12,
    color: JOURNAL_COLORS.whiteTransparent06,
  },
  entryActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryMood: {
    fontSize: 16,
    marginRight: 12,
  },
  deleteButton: {
    padding: 4,
  },
  deleteButtonText: {
    fontSize: 16,
  },
  entryText: {
    fontSize: 14,
    lineHeight: 20,
    color: JOURNAL_COLORS.whiteTransparent05_2,
  },
  readMore: {
    fontSize: 12,
    color: JOURNAL_COLORS.blue,
    marginTop: 8,
    fontWeight: '500',
  },
editingIndicator: {
  backgroundColor: 'rgba(99, 102, 241, 0.2)',
  padding: 8,
  borderRadius: 8,
  marginBottom: 8,
  borderLeftWidth: 3,
  borderLeftColor: '#6366F1',
},
editingText: {
  color: '#6366F1',
  fontSize: 12,
  fontWeight: '600',
},
editButton: {
  padding: 6,
  borderRadius: 6,
  marginRight: 8,
},
editButtonText: {
  fontSize: 14,
},
editingEntryCard: {
  borderWidth: 2,
  borderColor: '#6366F1',
  borderRadius: 12,
},
});

export default styles;
