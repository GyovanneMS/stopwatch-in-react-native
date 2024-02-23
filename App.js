import React, {useState, useEffect} from 'Rreact';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {

  const [tempo, definirTempo] = useState(120)

  useEffect(function() {
    const temporizador = tempo > 0 && setInterval(function(){
      definirTempo(tempo - 1)
    }, 1001)
    return function() {
      clearInterval(temporizador)
    }
  },[tempo])

  return <View>
      <StatusBar barStyle="light-content" backgroundColor="#1C2229"/>
    </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
