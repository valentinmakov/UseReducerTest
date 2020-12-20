import React, {
    useMemo,
    useReducer,
} from 'react'
import {
    SafeAreaView,
    StatusBar,
    View,
} from 'react-native'

import Context from './src/context/context'
import reducer, {initialState} from './src/reducer/reducer'
import useLogger from './src/hooks/useLogger'
import {Models} from './src/models/models'

import ContainerCounterMain from './src/containers/ContainerCounterMain'
import ContainerCounterSecondary from './src/containers/ContainerCounterSecondary'

const App: React.FC = (): React.ReactElement => {
    const [state, dispatch] = useReducer(useLogger(reducer), initialState)
    const memoizedContextValues: Models.IContext = useMemo(() => {
        return {state, dispatch}
    }, [state, dispatch])

    return (
        <Context.Provider value={{state: memoizedContextValues.state, dispatch: memoizedContextValues.dispatch}}>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={{backgroundColor: '#000', flex: 1}}>
                <View style={{backgroundColor: '#000', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ContainerCounterMain/>
                    <ContainerCounterSecondary/>
                </View>
            </SafeAreaView>
        </Context.Provider>
    )
}

export default App
