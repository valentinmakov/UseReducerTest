import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

export interface IProps {
    counterMain: number,
    performIncrementCounterSecondary: () => void,
    performDecrementCounterSecondary: () => void,
    performResetCounterSecondary: () => void,
}

const ViewCounterMain: React.FC<IProps> = (props: IProps): React.ReactElement<IProps> => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Counter Main: {props.counterMain}</Text>
            <TouchableOpacity style={styles.button} onPress={props.performIncrementCounterSecondary}>
                <Text style={styles.buttonText}>Increment Counter Secondary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.performDecrementCounterSecondary}>
                <Text style={styles.buttonText}>Decrement Counter Secondary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.performResetCounterSecondary}>
                <Text style={styles.buttonText}>Reset Counter Secondary</Text>
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

export default ViewCounterMain
