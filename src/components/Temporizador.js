import React from "react";
import {View, Text} from "react-native";
import styles from "../styles/Temporizador.js"
 
export default function Temporizador(props){
    return <View>
        <Text style={styles.tempoContagem}> {props.tempo}</Text>
        <Text style={styles.tempoUnidade}>Segundos</Text>
 
    </View>
}