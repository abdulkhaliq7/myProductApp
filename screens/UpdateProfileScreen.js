import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { auth } from '../firebase'
import { Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from "@expo/vector-icons"


const UpdateProfileScreen = ({navigation }) => {
    const [username, setUsername] = useState(auth?.currentUser?.displayName)
    const [image, setImage] = useState(auth?.currentUser?.photoURL)
    const [birth, setBirth] = useState(auth?.currentUser?.phoneNumber)

    
    {console.log(auth?.currentUser)}






    {console.log(username)}

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "MyProfile",
            headerStyle: { backgroundColor: "#fff"},
            headerTitleStyle: { color: "black"},
            headerTintColor: "black",
            headerRight: () => (
                <View style={{
                    width: 50,
                }}>
                     <TouchableOpacity onPress={ signOutUser} activeOpacity={0.5}>
                        <AntDesign name="logout" size={24} color= "black" />
                     </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

    const signOutUser = () => {
        auth.signOut().then( () => {
            navigation.replace('Login')
        })
    }

    const update = async () => {
        await auth?.currentUser?.updateProfile({
            displayName: username,
            photoURL: image,
        }).then(() => {
            navigation.goBack()
        })
        .catch((error) => alert(error))
    }
    

    return (
        <KeyboardAvoidingView behavior='padding'  style={styles.container}>
            {/* <StatusBar style='light' />  */}
            <Avatar rounded size='xlarge' source={{ uri: auth?.currentUser?.photoURL}} />
            <Text style={{ fontSize: 17 , marginTop: 10, marginBottom: 10 }} >{auth?.currentUser?.displayName}</Text>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Username' 
                    outoFocus 
                    type='text' 
                    value={username} 
                    onChangeText={ (text) => setUsername(text) } 
                /> 
                <Input 
                    placeholder='Enter the year you born ex: 2030' 
                    outoFocus 
                    type='text' 
                    value={birth} 
                    onChangeText={ (text) => setBirth(text) } 
                /> 
                <Input 
                    placeholder='Image'  
                    type='text' 
                    value={ image } 
                    onChangeText={ (text) => setImage(text) } 
                />
            </View>
            <Button containerStyle={styles.button}  onPress={ update }   title='Update Profile'  />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default UpdateProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 10,
        backgroundColor: 'white',
        
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 0,
    },
})