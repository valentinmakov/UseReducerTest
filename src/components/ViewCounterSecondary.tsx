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
    performCallNetworkRequestMain: () => void,
}

const ViewCounterSecondary: React.FC<IProps> = (props: IProps): React.ReactElement<IProps> => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Counter Secondary: {props.counterSecondary}</Text>
            <TouchableOpacity style={styles.button} onPress={props.performIncrementCounterMain}>
                <Text style={styles.buttonText}>Increment Counter Main</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.performDecrementCounterMain}>
                <Text style={styles.buttonText}>Decrement Counter Main</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.performResetCounterMain}>
                <Text style={styles.buttonText}>Reset Counter Main</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, /* TODO styles for netwtork request states */]} onPress={props.performCallNetworkRequestMain}>
                <Text style={styles.buttonText}>Send Main Network Request</Text>
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
        marginVertical: 4,
    },
    buttonText: {
        color: '#000',
    },
})

export default ViewCounterSecondary
