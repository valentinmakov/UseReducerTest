import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

export interface IProps {
    counterSecondary: number,
    performIncrementCounterMain: () => void,
    performDecrementCounterMain: () => void,
    performResetCounterMain: () => void,
}

const ViewCounterSecondary: React.FC<IProps> = (props: IProps): React.ReactElement<IProps> => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Counter Main: {props.counterSecondary}</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.performIncrementCounterMain()}>
                <Text style={styles.buttonText}>Increment Counter Main</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.performDecrementCounterMain()}>
                <Text style={styles.buttonText}>Decrement Counter Main</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.performResetCounterMain()}>
                <Text style={styles.buttonText}>Reset Counter Main</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    text: {
        color: '#FFF',
    },
    button: {
        padding: 5,
        borderRadius: 3,
        backgroundColor: '#FFF',
    },
    buttonText: {
        color: '#000',
    },
})

export default ViewCounterSecondary
