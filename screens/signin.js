import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableOpacity, TextInput, View } from 'react-native';
import { Button } from'react-native-elements';
import { useState } from'react';
import { useNavigation } from '@react-navigation/native';
import * as font from 'expo-font'




export default function Signin() {
  //load font from assets wth font.load async the fon tname is inter-regular
  const loadfonts=async () => {
    await font.loadAsync({
      Inter: require('../assets/InterVariable.ttf'),
    });
  };



  const [form, setForm] = useState({ emailaddress: '', password: '' });
  const handleSignIn = () => {
    // TODO: Implement sign in logic here
    console.log('Sign in with email:', form.emailaddress, 'and password:', form.password);
    alert('Sign in successful');
  };
  
  const handleInputChange = (key, value) => {
    setForm({...form, [key]: value });
  };
  const navigation = useNavigation();
  
  const handleSignUp = () => {
    // TODO: Implement sign in logic here
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in to FS</Text>
      <View style={styles.inputContainer}>
       
        <Text style={styles.header}>Email</Text>
        <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor='gray'
        keyboardType="email-address"
        value={form.emailaddress}
        onChangeText={(text) => handleInputChange('emailaddress',text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.header}>Password</Text>
        <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor='gray'
        keyboardType="email-address"
        value={form.password}
        onChangeText={(text) => handleInputChange('password',text)}
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.
          buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>forgot password?</Text>
      <Text style={styles.footer}>or</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.
          buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Already have an account? Log in </Text>

    </View>
  )};


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'black',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
      
      flexDirection: 'column',
      marginTop:0,
    },
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
    },
    header: {
      fontSize: 17,
      marginBottom: 10,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Inter',
    },
    input: {
      height: 39,
      width:250,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius:5,
      marginBottom: 30,
      
      padding: 10,
      color: 'white',
      backgroundColor: 'rgba(85, 77, 77, 0.507)',
    },
    button: {
      height: 55,
      width: '100%',
      padding: 10,
      marginTop: 0,
    },title: {
        fontSize: 35,
        fontFamily: 'Inter',
        color: 'white',
        marginBottom: 50,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign:'center',
    },footer: {
        fontSize: 15,
        marginTop: 29,
        marginBottom:15,
        color: 'rgba(133, 147, 176, 1)',
      },button: {
        backgroundColor: 'rgba(14, 107, 173, 1)',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        width: 150,
        
        
        
      },
      buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
      },buttonviews: {
          marginTop: 30,
          marginBottom: 20,
          width: 200,
  
          justifyContent: 'center',
          flex: 1,
          alignSelf:'center',
        },
  });
