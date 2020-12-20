import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import {
    Enums,
    Models
} from '../models/models'

export interface IProps {
    counterSecondary: number,
    networkCallPhase: Enums.NetworkPhase,
    networkCallResult: string | null,
    netwokCallError: Models.IError | null,
    performIncrementCounterMain: () => void,
    performDecrementCounterMain: () => void,
    performResetCounterMain: () => void,
    performCallNetworkRequestMain: () => void,
}

const getNetworkButtonText = (networkCallPhase: Enums.NetworkPhase): string => {
    return networkCallPhase === 'InProgress'
        ? 'Sending...'
        : 'Send Main Network Request'
}

const getNetworkResultText = (
    networkCallResult: string | null,
    networkCallPhase: Enums.NetworkPhase,
    netwokCallError: Models.IError | null,
): string => {
    if (networkCallPhase === 'Idle') {
        return 'No data'
    }

    if (networkCallPhase === 'Failure') {
        return netwokCallError && netwokCallError.message ? netwokCallError.message : 'Error'
    }

    if (networkCallPhase === 'InProgress') {
        return 'Fetching data'
    }

    if (networkCallPhase === 'Success' && networkCallResult) {
        return networkCallResult
    }

    return ''
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
            <TouchableOpacity
                style={[
                    styles.button,
                    props.networkCallPhase === 'InProgress' ? styles.buttonInProgress : undefined
                ]}
                disabled={props.networkCallPhase === 'InProgress'}
                onPress={props.performCallNetworkRequestMain}
            >
                <Text style={styles.buttonText}>{getNetworkButtonText(props.networkCallPhase)}</Text>
            </TouchableOpacity>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{`Network result: ${getNetworkResultText(props.networkCallResult, props.networkCallPhase, props.netwokCallError)}`}</Text>
            </View>
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
    buttonInProgress: {
        backgroundColor: 'grey',
    },
    buttonText: {
        color: '#000',
    },
    resultContainer: {
        padding: 5,
        backgroundColor: '#FFF',
        marginVertical: 4,
    },
    resultText: {
        color: '#000',
    },
})

export default ViewCounterSecondary
