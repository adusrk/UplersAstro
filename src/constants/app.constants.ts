
export interface ZodiacSign {
  label: string;
  value: string;
  symbol: string;
  color: string;
  dates: string;
}

export type HoroscopeData = Record<string, string>;

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { label: 'Aries', value: 'Aries', symbol: '♈', color: '#FF6B6B', dates: 'Mar 21 - Apr 19' },
  { label: 'Taurus', value: 'Taurus', symbol: '♉', color: '#4ECDC4', dates: 'Apr 20 - May 20' },
  { label: 'Gemini', value: 'Gemini', symbol: '♊', color: '#45B7D1', dates: 'May 21 - Jun 20' },
  { label: 'Cancer', value: 'Cancer', symbol: '♋', color: '#96CEB4', dates: 'Jun 21 - Jul 22' },
  { label: 'Leo', value: 'Leo', symbol: '♌', color: '#FFEAA7', dates: 'Jul 23 - Aug 22' },
  { label: 'Virgo', value: 'Virgo', symbol: '♍', color: '#DDA0DD', dates: 'Aug 23 - Sep 22' },
  { label: 'Libra', value: 'Libra', symbol: '♎', color: '#98D8C8', dates: 'Sep 23 - Oct 22' },
  { label: 'Scorpio', value: 'Scorpio', symbol: '♏', color: '#F7DC6F', dates: 'Oct 23 - Nov 21' },
  { label: 'Sagittarius', value: 'Sagittarius', symbol: '♐', color: '#BB8FCE', dates: 'Nov 22 - Dec 21' },
  { label: 'Capricorn', value: 'Capricorn', symbol: '♑', color: '#85C1E9', dates: 'Dec 22 - Jan 19' },
  { label: 'Aquarius', value: 'Aquarius', symbol: '♒', color: '#F8C471', dates: 'Jan 20 - Feb 18' },
  { label: 'Pisces', value: 'Pisces', symbol: '♓', color: '#82E0AA', dates: 'Feb 19 - Mar 20' },
];


export const HOROSCOPE_DATA: HoroscopeData = {
  Aries: "The stars align for new beginnings! Your fiery energy will attract opportunities. Don't hesitate to take the lead today.",
  Taurus: "Focus on stability and comfort. Your practical approach will help you make solid financial decisions. Enjoy the simple pleasures.",
  Gemini: "Communication is your superpower today! Network, share ideas, and let your curiosity guide you to new discoveries.",
  Cancer: "Embrace your emotional intelligence. Your intuition is strong - trust your gut feelings in personal matters.",
  Leo: "All eyes are on you! Your natural charisma shines bright. Creative projects and social gatherings favor you today.",
  Virgo: "Organization leads to success. Your attention to detail will help you solve complex problems efficiently.",
  Libra: "Balance and harmony are key. Your diplomatic skills will help resolve conflicts and strengthen relationships.",
  Scorpio: "Transformation awaits! Embrace change and let go of what no longer serves your highest good.",
  Sagittarius: "Adventure calls! Your optimistic outlook will attract exciting opportunities for growth and learning.",
  Capricorn: "Career matters take center stage. Your ambition and discipline will impress superiors and open doors.",
  Aquarius: "Innovation flows through you. Your unique perspectives will inspire others and lead to breakthroughs.",
  Pisces: "Creativity and intuition merge. Your compassionate nature will bring comfort to those around you."
};


export const APP_COLORS = {
  primary: '#6366F1',
  secondary: '#8B5CF6',
  background: '#0B0B18',
};

export const ANIMATION_CONFIG = {
  duration: 800,
  delay: 300,
};


export type JournalEntry = {
  date: string;
  text: string;
  timestamp: number;
  mood?: string;
};

export const STORAGE_KEYS = {
  journalEntries: '@journal_entries',
};

export const JOURNAL_CONSTANTS = {
  autoSaveDelay: 2000, // ms
  moodDetection: {
    positiveWords: ['happy', 'joy', 'excited', 'great', 'wonderful', 'amazing', 'love', 'good'],
    negativeWords: ['sad', 'angry', 'frustrated', 'bad', 'terrible', 'hate', 'upset'],
  },
  alerts: {
    emptyEntry: {
      title: 'Empty Entry',
      message: 'Please write something before saving.',
    },
    saveSuccess: {
      title: '✨ Entry Saved!',
      message: 'Your cosmic thoughts are now preserved in the stars.',
    },
    deleteConfirm: {
      title: 'Delete Entry',
      message: 'Are you sure you want to delete this journal entry?',
    },
    deleteSuccess: {
      title: 'Deleted',
      message: 'Journal entry has been deleted.',
    },
  },
};
