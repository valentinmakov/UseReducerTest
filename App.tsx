import React from 'react'
import {
    SafeAreaView,
    StatusBar,
    View,
} from 'react-native'

import ContainerCounterMain from './src/containers/ContainerCounterMain'

const App: React.FC = (): React.ReactElement => {
    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={{backgroundColor: '#000', flex: 1}}>
                <View style={{backgroundColor: '#000', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ContainerCounterMain/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default App
