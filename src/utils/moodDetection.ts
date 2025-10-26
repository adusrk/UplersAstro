import { JOURNAL_CONSTANTS } from '../constants/app.constants';

export const getMoodFromText = (text: string): string => {
  const { positiveWords, negativeWords } = JOURNAL_CONSTANTS.moodDetection;
  const lowerText = text.toLowerCase();

  const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
  const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;

  if (positiveCount > negativeCount) return '😊';
  if (negativeCount > positiveCount) return '😔';
  return '😐';
};
