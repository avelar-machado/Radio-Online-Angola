import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import styles from './HowlerStyles';

const stationsData = [
    {
      freq: '99.1',
      title: "Radio Mais",
      src: 'https://radios.justweb.pt/8050/stream/?1685627470876',
    },
    {
      freq: '88.5',
      title: "Radio Escola",
      src: 'https://radios.vpn.sapo.pt/AO/radio1.mp3',
    },
    {
      freq: '95.5',
      title: "Radio Lac",
      src: 'https://radios.vpn.sapo.pt/AO/radio14.mp3?1685629053605',
    },
    {
      freq: '98.4',
      title: "Radio Kairos",
      src: 'http://radios.vpn.sapo.pt/AO/radio9.mp3',
    },
    {
      freq: '99.9',
      title: "Radio Luanda",
      src: 'http://radios.vpn.sapo.pt/AO/radio11.mp3',
    },
    {
      freq: '93.5',
      title: "Radio NA",
      src: 'http://radios.vpn.sapo.pt/AO/radio3.mp3',
    },
    {
      freq: '91',
      title: "Radio Despertar",
      src: 'http://radios.vpn.sapo.pt/AO/radio15.mp3',
    },
    {
      freq: '97.9',
      title: "Radio Romantica",
      src: 'http://radios.vpn.sapo.pt/AO/radio4.mp3',
    },
    {
      freq: '94.5',
      title: "Radio 5",
      src: 'http://radios.vpn.sapo.pt/AO/radio5.mp3',
    }
  ];

  const Radio = () => {
    const [currentStation, setCurrentStation] = useState(null);
    const sound = useRef(null);
  
    const play = async (i) => {
      const station = stationsData[i];
      if (station.src) {
        if (sound.current) {
          await sound.current.unloadAsync(); // Descarregar o som atual
        }
        const { sound: newSound } = await Audio.Sound.createAsync({ uri: station.src });
        sound.current = newSound;
        setCurrentStation(i);
        await sound.current.playAsync();
      }
    };
  
    const stop = async () => {
      if (sound.current) {
        await sound.current.stopAsync();
        setCurrentStation(null);
      }
    };
  
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#001F3F" barStyle="light-content" />
        <Text style={styles.header}>Rádio Al Hilal</Text>
        {stationsData.map((station, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.station, { backgroundColor: currentStation === i ? 'rgba(255, 255, 255, 0.1)' : '' }]}
            onPress={() => {
              if (currentStation === i) {
                stop();
              } else {
                play(i);
              }
            }}
          >
            <View style={styles.title}>
              <Text style={styles.subtitle}><Text style={styles.freq}>{station.freq}</Text> {station.title}</Text>
              {currentStation === i && (
                <View style={styles.liveContainer}>
                  <Ionicons name="play-circle" size={24} color="white" style={styles.playIcon} />
                  <Text style={styles.live}>LIVE</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  export default Radio;