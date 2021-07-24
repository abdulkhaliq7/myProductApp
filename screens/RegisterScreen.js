import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView } from 'react-native';
import { auth } from '../firebase'


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birth, setBirth] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login'
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
            })
        }).catch(error => alert(error.message))
    }

    return (
        <SafeAreaView behavior='padding' style={styles.container} >
            <ScrollView>
                <StatusBar style='light' />
                <Text h3 style={{ marginBottom: 15, alignSelf: 'center', marginTop: 30}}>
                    Create a Signal account
                </Text>
                <View style={styles.inputContainer}>
                    <Input 
                        placeholder="Full Name"
                        autoFocus
                        type='text'
                        value={name}
                        onChangeText={ (text) => setName(text)}
                    />
                    <Input 
                        placeholder="Email"
                        type='email'
                        value={email}
                        onChangeText={ (text) => setEmail(text)}
                    />
                    <Input 
                        placeholder="Password"
                        type='password'
                        secureTextEntry
                        value={password}
                        onChangeText={ (text) => setPassword(text)}
                    />
                    <Input 
                        placeholder="Birth"
                        type='text'
                        value={birth}
                        onChangeText={ (text) => setBirth(text)}
                    />
                    <Input 
                        placeholder="Profile Picture URL"
                        type='text'
                        value={imageUrl}
                        onChangeText={ (text) => setImageUrl(text)}
                        onSubmitEditing={register}
                    />
                </View>
                <Button 
                    containerStyle={styles.button}
                    raised 
                    onPress={ register } 
                    title='Register' 
                />
                <View style={{ height: 80}} />
            </ScrollView>
        </SafeAreaView>
    ) 
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        alignSelf: 'center'
    },
})
