import React from "react";
import {View, TextInput, Pressable, Image} from "react-native";
import styles from "../styles/Temporizador.js"

export default function CaixaTempo(props) {
    return <View style={styles.tempoCAixa}>
        <TextInput
        keyboardType="number-pad"
        maxLength={20}
        placeholder="300s"
        value={props.entrada}
        onChangeText={props.definirEntrada}
        style={styles.tempoEntrada}
        />
        <Pressable
            onPress={ () => props.definirTempo(
            props.entrada > 0?props.entrada: 60)}>
            <View
            style={styles.tempoBotao}>
                <Image
                source={{uri: "https://i.ibb.co/LtggQ4L/icone.png"}}
                style={{height: 32, width: 32}}/>
            </View>
        </Pressable>
    </View>
}