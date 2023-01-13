import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {BlueColor, fullHeight, fullWidth} from '../constants';
import welcomeImage from '../media/11.png';
import {useNavigation} from '@react-navigation/native';
import {Input, Stack, FormControl, useToast} from 'native-base';
import {useState} from 'react';

const LoginPage = () => {
  const navigation = useNavigation();
  const toast = useToast();

  const [formDetails, setFormDetails] = useState({
    userName: '',
    password: '',
  });
  const [show, setShow] = useState(false);

  const formChangeHandler = (text, value) => {
    setFormDetails(obj => {
      obj[value] = text;
      return obj;
    });
  };
  const loginHandler = () => {
    const trimmedPass = formDetails.password.trim().length;
    const trimmedUser = formDetails.userName.trim().length;
    if (trimmedPass && trimmedUser) {
      navigation.navigate('home');
    } else {
      if (!toast.isActive('err')) {
        toast.show({
          id: 'err',
          description: 'Enter username and password',
        });
      }
    }
  };
  const toggleValue = () => {
    setShow(val => !val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pinkBubble}></View>
      <View style={styles.smallCircle1}></View>
      <View style={styles.smallCircle2}></View>
      <View style={{marginTop: 51, alignSelf: 'center'}}>
        <Text style={styles.welcomeText}>Welcome back</Text>
      </View>
      <View style={styles.formContainer}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#000',
            marginBottom: 10,
          }}>
          Login
        </Text>
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                variant="underlined"
                onChangeText={text => formChangeHandler(text, 'userName')}
                p={2}
                placeholder="Username"
              />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                variant="underlined"
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <TouchableOpacity onPress={toggleValue}>
                    <Text style={{color: BlueColor}}>
                      {show ? 'Hide' : 'Show'}
                    </Text>
                  </TouchableOpacity>
                }
                onChangeText={text => formChangeHandler(text, 'password')}
                p={2}
                placeholder="Password"
              />
            </Stack>
            <Text style={{color: BlueColor, fontSize: 15, fontWeight: 600}}>
              Forget Password?
            </Text>
          </Stack>
        </FormControl>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20%',
            backgroundColor: '#fff',
          }}>
          <TouchableWithoutFeedback onPress={loginHandler}>
            <View style={styles.button}>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 700}}>
                Login
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Text
          style={{
            color: BlueColor,
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 600,
          }}>
          Create account
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5956E9',
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 55,
    color: '#ffffff',
    // textAlign:"center",
    // marginTop:51,
  },
  smallCircle1: {
    position: 'absolute',
    top: 10,
    left: fullWidth * 0.25,
    width: 27,
    height: 27,
    //  backgroundColor: '#FAB8C3',
    borderRadius: 13.5,
    borderWidth: 5,
    borderColor: '#706EFD',
  },
  smallCircle2: {
    position: 'absolute',
    // top:10,
    right: 50,
    width: 35,
    height: 35,
    top: fullHeight * 0.25,
    //  backgroundColor: '#FAB8C3',
    borderRadius: 17.5,
    borderWidth: 5,
    borderColor: '#706EFD',
  },
  pinkBubble: {
    position: 'absolute',
    top: -fullWidth * 0.16,
    right: 24,
    width: fullWidth * 0.35,
    height: fullWidth * 0.35,
    backgroundColor: '#FAB8C3',
    borderRadius: fullWidth * 0.175,
  },
  formContainer: {
    position: 'absolute',
    height: '65%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    // alignSelf:'',
    bottom: 0,
    padding: 30,
  },
  button: {
    width: '80%',
    height: '75%',
    borderRadius: 7,
    backgroundColor: BlueColor,
    alignItems: 'center',
    justifyContent: 'center',
    // color:'#ffffff'
  },
});
