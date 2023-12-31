import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
//   import { FontAwesome5 } from "@expo/vector-icons";
//   import { MaterialCommunityIcons } from "@expo/vector-icons";
//   import { MaterialIcons } from "@expo/vector-icons";
//   import { FontAwesome } from "@expo/vector-icons";

// import { MaterialCommunityIcons } from '@expo/vector-icons';

const Signup = ({navigation}) => {
  // useEffect(()=> {
  //   GoogleSignin.configure()
  // },[])

  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('user info',userInfo)
  //     navigation.navigate('Home')
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       console.log(error)
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //       console.log(error)
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //       console.log(error)
  //     } else {
  //       // some other error happened
  //       console.log(error)
  //     }
  //   }
  // };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const storeToken = async token => {
    try {
      if (token) {
        await AsyncStorage.setItem('token', token);
        console.log('Token stored successfully.');
      } else {
        console.log('Token is null or undefined. Unable to store.');
      }
    } catch (error) {
      console.log('Failed to store token:', error);
    }
  };

  const handlePostRequest = () => {
    if (!name) {
      Alert.alert('Invalid Name', 'Please enter a valid Name.');
      return;
    }

    if (!email || !email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!mobileNumber || mobileNumber.length !== 10) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid Phone Number.');
    }

    if (!password) {
      Alert.alert('Invalid Passward', 'Please enter a valid Password');
      return;
    }
    const data = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      password: password,
    };

    fetch(
      'https://tripprapis-gw5rn.ondigitalocean.app/api/v1/auth/customer/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
      .then(response => response.json())
      .then(responseData => {
        // Handle the response data here
        console.log('yrwewetuyerwqrwe', responseData);
        const {email, password} = data
        fetch(
          'https://tripprapis-gw5rn.ondigitalocean.app/api/v1/auth/customer/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
          },
        )
          .then(response => response.json())
          .then(responseData => {
            // Handle the response data here
            console.log(responseData);
            if (responseData.statusCode === 200) {
              storeToken(responseData.data.token);
              navigation.navigate('Home');
            } else {
              console.warn('Invalid email or password');
              setIsLoading(true);
            }
          })
          .catch(error => {
            // Handle any errors here
            console.error(error);
            setIsLoading(true);
          });
      })
      .catch(error => {
        // Handle any errors here
        console.error(error);
      });
  };

  // const [inputText5, setInputText5] = useState("");
  // const handleInput5 = (e) => {
  //   setInputText5(e);
  // };
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.first}>
          <Image
            source={require('../assets/signup-logo-new.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.second}>
          <View style={styles.inputcontainer}>
            <Image
              source={require('../assets/user-logo.png')}
              style={{width: '10%', height: '50%'}}
            />
            <TextInput
              style={{
                width: '90%',
                fontSize: 18,
                textAlignVertical: 'center',
                fontFamily: 'Montserrat-Medium',
                color: '#000',
              }}
              placeholder="Full Name"
              placeholderTextColor="#7F7F73"
              value={name}
              onChangeText={e => setName(e)}
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>

          <View style={styles.inputcontainer}>
            <Image
              source={require('../assets/gmail-logo.png')}
              style={{width: '10%', height: '50%'}}
            />
            <TextInput
              style={{
                width: '90%',
                fontSize: 18,
                textAlignVertical: 'center',
                fontFamily: 'Montserrat-Medium',
                color: '#000',
              }}
              placeholder="Email"
              placeholderTextColor="#7F7F73"
              value={email}
              onChangeText={e => setEmail(e)}
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>

          <View style={styles.inputcontainer}>
            <Image
              source={require('../assets/lock-logo.png')}
              style={{width: '10%', height: '65%'}}
            />
            <TextInput
              style={{
                width: '90%',
                fontSize: 18,
                textAlignVertical: 'center',
                fontFamily: 'Montserrat-Medium',
                color: '#000',
              }}
              placeholder="Password"
              placeholderTextColor="#7F7F73"
              value={password}
              onChangeText={e => setPassword(e)}
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>

          <View style={styles.inputcontainer}>
            <Image
              source={require('../assets/call-logo.png')}
              style={{width: '10%', height: '50%'}}
            />
            <TextInput
              style={{
                width: '90%',
                fontSize: 18,
                textAlignVertical: 'center',
                fontFamily: 'Montserrat-Medium',
                color: '#000',
              }}
              placeholder="Phone Number"
              placeholderTextColor="#7F7F73"
              value={mobileNumber}
              onChangeText={e => setMobileNumber(e)}
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>

          <TouchableOpacity style={styles.loginbtn} onPress={handlePostRequest}>
            <Text style={styles.signuptext}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footertext}>Already have an account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logintext}>Login</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={signIn}>
          <Text style={styles.logintext}>Google Login</Text>
        </TouchableOpacity> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // justifyContent:'center',
    // alignItems:'center'
  },
  first: {
    flex: 0.5,
    // backgroundColor:'red',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: 12,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: '100%',
  },
  second: {
    flex: 0.4,
    // backgroundColor: 'aqua',
    width: '100%',
    // justifyContent: "center",
    alignItems: 'center',
    paddingTop: 5,
    marginVertical: 16,
  },
  // input1: {
  //   width: "90%",
  //   height: "10%",

  //   borderColor: "gray",
  //   borderWidth: 1,
  //   paddingHorizontal: 10,
  //   // marginBottom: 20,
  //   borderRadius: 10,
  //   borderColor: "#A17FE0",
  // },
  loginbtn: {
    backgroundColor: '#0056FB',
    width: '75%',

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 12,
  },

  footer: {
    // backgroundColor:'green',
    // justifyContent: "center",
    alignItems: 'center',
    height: '100%',
    flex: 0.1,
    // paddingTop: 20,
    marginBottom: 10,
  },
  logintext: {
    color: '#0056FB',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    marginTop: 8,
  },
  signuptext: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
  },
  usernamecontainer: {
    width: '90%',
    height: '15%',

    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#A17FE0',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  usernamecontainer3: {
    width: '90%',
    height: '15%',

    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#A17FE0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // gap: 15,
  },
  uppercontainer: {
    flexDirection: 'row',
    gap: 15,
    backgroundColor: 'aqua',
  },
  footertext: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: 'black',
    fontFamily: 'Montserrat-Medium',
  },
  inpu: {
    width: '82%',
    // backgroundColor:'red',
    fontSize: 18,
    color: 'black',
    width: '90%',
    // height: "20%",

    borderColor: 'gray',
    // borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#A17FE0',
    color: 'black',
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
  },
  inputcontainer: {
    flexDirection: 'row',
    // backgroundColor:'red',
    color: 'black',
    width: '90%',
    // height: "20%",

    borderColor: 'gray',
    // borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#A17FE0',
    color: 'black',
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
    // justifyContent:'center',
    alignItems: 'center',
    gap: 5,
  },
});
