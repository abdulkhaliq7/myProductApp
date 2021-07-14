import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { auth, db } from '../firebase'
import { Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import { db } from "../firebase"

const HomeScreen = ( { navigation }) => {
    const [products, setProducts] = useState([])

    const signOutUser = () => {
        auth.signOut().then( () => {
            navigation.replace('Login')
        })
    }
    
    useEffect(() => {
        
    }, [])

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

            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent:'space-between',
                    width: 80,
                    marginRight: 20,
                }}>
                     <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color= "black" />
                     </TouchableOpacity>
                     <TouchableOpacity 
                     onPress={() => navigation.navigate('AddProduct')} 
                     activeOpacity={0.5}
                     >
                         <SimpleLineIcons name="plus" size={24} color="black" />
                     </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

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
