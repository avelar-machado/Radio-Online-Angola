import { StyleSheet } from 'react-native';

const HowlerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001F3F',
    paddingHorizontal: 10, // Adiciona espaçamento horizontal
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    marginTop: 20,
  },
  station: {
    height: 80, // Altura suficiente para exibir uma estação de rádio
    marginBottom: 10, // Espaçamento entre as estações
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.33)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  freq: {
    marginRight: 5,
  },
  liveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  live: {
    backgroundColor: '#cc1919',
    borderRadius: 3,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  playIcon: {
    marginRight: 5,
  },
});

export default HowlerStyles;
