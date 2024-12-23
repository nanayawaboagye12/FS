import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function Signup() {
  // State to manage form inputs
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    retypePassword: '',
    ageGroup: '',
    smartWatch: '',
    chronicDisease: '',
    diseaseDetails: '',
  });

  // Handle input changes
  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    const {
      firstname,
      lastname,
      email,
      password,
      retypePassword,
      ageGroup,
      smartWatch,
      chronicDisease,
     
    } = form;

   

    if (password !== retypePassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // On successful submission
    Alert.alert('Success', 'Account created successfully!', [
      { text: 'OK', onPress: () => console.log('Form Data:', form) },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Create Account</Text>

      {/* Form */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        
        <TextInput
            style={styles.inputSingle}
            placeholder="Firstname"
            placeholderTextColor="#aaa"
            value={form.firstname}
            onChangeText={(text) => handleChange('firstname', text)}
        />
         
        <TextInput
          style={styles.inputSingle}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => handleChange('email', text)}
        />
        <TextInput
          style={styles.inputSingle}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={form.password}
          onChangeText={(text) => handleChange('password', text)}
        />
        <TextInput
          style={styles.inputSingle}
          placeholder="Re-type password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={form.retypePassword}
          onChangeText={(text) => handleChange('retypePassword', text)}
        />
        <TextInput
          style={styles.inputSingle}
          placeholder="Age group"
          placeholderTextColor="#aaa"
          value={form.ageGroup}
          onChangeText={(text) => handleChange('ageGroup', text)}
        />
        <TextInput
          style={styles.inputSingle}
          placeholder="What smart watch do you use?"
          placeholderTextColor="#aaa"
          value={form.smartWatch}
          onChangeText={(text) => handleChange('smartWatch', text)}
        />
        <TextInput
          style={styles.inputSingle}
          placeholder="Have any chronic disease?"
          placeholderTextColor="#aaa"
          value={form.chronicDisease}
          onChangeText={(text) => handleChange('chronicDisease', text)}
        />
        
        {/* Sign Up Button */}
        <View style={styles.buttonviews}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.
          buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000', // Black background
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
    },
    formContainer: {
      width: '90%',
      paddingBottom: 30,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      
    },
    input: {
      flex: 1,
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: 5,
      margin: 5,
      padding: 10,
      fontSize: 14,
     
      
    },
    inputSingle: {
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: 5,
      marginVertical: 5,
      padding: 10,
      fontSize: 14,
      width: '300',
      height: 40,
    },
    button: {
      backgroundColor: 'rgba(80, 78, 78, 1)',
      borderRadius: 10,
      alignItems: 'center',
      padding: 10,
      marginTop: 20,
      
      
      
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