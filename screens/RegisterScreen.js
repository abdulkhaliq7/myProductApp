import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const register = () => {

    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container} >
            <StatusBar style='light' />
            <Text h3 style={{ marginBottom: 50}}>
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
        </KeyboardAvoidingView>
    ) 
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {},
    button: {},
})
