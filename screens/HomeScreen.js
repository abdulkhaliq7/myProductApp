import React, { useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { auth, db } from '../firebase'
import { Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = ( { navigation }) => {

    const signOutUser = () => {
        auth.signOut().then( () => {
            navigation.replace('Login')
        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "MyProudcts",
            headerStyle: { backgroundColor: "#fff"},
            headerTitleStyle: { color: "black"},
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft:20 }}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                    </TouchableOpacity>
                </View>
            ),


        })
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
