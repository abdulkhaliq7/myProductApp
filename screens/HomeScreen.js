import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { auth, db } from '../firebase'
import { Avatar } from 'react-native-elements'

const HomeScreen = ( { navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "MyProudcts App",
            headerStyle: { backgroundColor: "#fff"},
            headerTitleStyle: { color: "black"},
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft:20 }}>
                    <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                </View>
            )

        })
    }, [])

    return (
        <View>
            <Text>This is the Home Screen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
