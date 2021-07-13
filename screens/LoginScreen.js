import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior='padding'  style={styles.container}>
            <StatusBar style='light' />
            {/* <Image source={{
                uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/b5/d8/50/b5d8502c-76ff-7695-5bc6-40fe1066c45e/source/512x512bb.jpg",
                }} 
                style={{ width: 150, height: 130}}
            /> */}
            <Text h1 style={{ fontSize: 40, color: "#2C6BED", fontWeight: 'bold', marginBottom: 20}}>MyProducts App</Text>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Email' 
                    outoFocus 
                    type='email' 
                    value={email} 
                    onChangeText={ (text) => setEmail(text) } 
                /> 
                <Input 
                    placeholder='Password'  
                    secureTextEntry 
                    type='password' 
                    value={password} 
                    onChangeText={ (text) => setPassword(text) } 
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn}  title='Login'  />
            <Button containerStyle={styles.button} type='outline' title='Register'  />
            <View style={{ height: 50 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

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
        marginTop: 10,
    },
})
