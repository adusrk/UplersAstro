import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
    paddingTop: 50,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray400,
    marginBottom: 12,
  },
  date: {
    fontSize: 14,
    color: COLORS.gray600,
    fontWeight: '500',
  },
  selectorContainer: {
    marginBottom: 25,
  },
  selectorButton: {
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: COLORS.pink,
    padding: 8,
  },
  selectorGradient: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentSymbol: {
    fontSize: 32,
    marginRight: 15,
    color: COLORS.white,
  },
  selectorText: {
    flex: 1,
  },
  selectorLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  selectorDates: {
    fontSize: 12,
    color: COLORS.whiteTransparent07,
  },
  selectorArrow: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  wheelContainer: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  wheelBackground: {
    maxHeight: 300,
    borderRadius: 16,
    backgroundColor: 'rgba(15, 15, 40, 0.98)',
  },
  wheelScroll: {
    padding: 10,
  },
  zodiacOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderLeftWidth: 4,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: COLORS.whiteTransparent05,
  },
  zodiacSymbol: {
    fontSize: 24,
    marginRight: 15,
    color: COLORS.white,
  },
  zodiacTextContainer: {
    flex: 1,
  },
  zodiacLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: 2,
  },
  zodiacDates: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  selectedDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  horoscopeCard: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  cardBackground: {
    padding: 25,
    backgroundColor: COLORS.whiteTransparent08,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  signIndicator: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signIndicatorText: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  horoscopeText: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.gray100,
    marginBottom: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  luckyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  luckyLabel: {
    fontSize: 12,
    color: COLORS.gray400,
    marginRight: 8,
  },
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  luckyValue: {
    fontSize: 12,
    color: COLORS.white,
    fontWeight: '600',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  journalButton: {
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: COLORS.purplePrimary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
    height: 70,
  },
  buttonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  buttonSubtext: {
    fontSize: 12,
    color: COLORS.white,
  },
  star: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    borderRadius: 2,
    width: 3,
    height: 3,
    shadowColor: COLORS.white,
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
});

export default styles;
