import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';
import { ScrollView, SafeAreaView } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Login",
            headerTitleAlign: 'center',
            // headerStyle: { backgroundColor: "#fff"},
            headerTitleStyle: { color: "white"},
            headerTintColor: "black",
            headerLeft: null
        })
    }, [navigation])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            // console.log(authUser.uid)
            if(authUser) {
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const signIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .catch(error => alert(error))
    }

    return (
        <SafeAreaView behavior='padding'  style={styles.container}>
            <ScrollView>
                <StatusBar style='light' />
                <Text h1 style={{ fontSize: 40, color: "#2C6BED", fontWeight: 'bold', marginBottom: 20, alignSelf: 'center', marginTop: 30}}>MyProducts App</Text>
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
                        onSubmitEditing={signIn}
                    />
                </View>
                <Button containerStyle={styles.button} onPress={signIn}  title='Login'  />
                <Button onPress={ () => navigation.navigate('Register') } containerStyle={styles.button} type='outline' title='Register'  />
                {/* <View style={{ height: 30 }} /> */}
            </ScrollView>
        </SafeAreaView>
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
        alignSelf: 'center'
    },
})
