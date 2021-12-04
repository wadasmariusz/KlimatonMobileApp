import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {MaterialIcons, Feather} from '@expo/vector-icons'

import TextField from '../../components/form/TextField.component'
import Button from '../../components/general/Button.component'
import colors from '../../constants/colors'
import myStyles from '../../constants/myStyles'
import { SocialButton } from '../../components/general/SocialButton.component'
import { AuthFormSeparator } from '../../components/auth/AuthFormSeparator.component'
import { useNavigation } from '@react-navigation/core'
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import * as authActions from '../../store/actions/auth';
import ActivityIndicator from '../../components/general/ActivityIndicator.component'

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const darkMode = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const logIn = async () => {
    try {
      setIsLoading(true)
      setError(null)
      await dispatch(authActions.logIn(email, password))
    } catch (e) {
      setError(e.toString())
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={[styles.background, {backgroundColor: darkMode ? colors.primary : colors.background}]}>
      <SafeAreaView style={styles.flex}>
      <Header light/>
      <KeyboardAvoidingView behavior='height' style={styles.flex}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
            <View style={styles.content}>
              <View
                style={styles.iconView}>
                  <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                  />
              </View>
              <View style={styles.inputsView}>
                <View style={styles.input}>
                  <TextField
                    title='Email'
                    value={email}
                    setValue={setEmail}
                    inputProps={{
                      placeholder: 'Podaj email',
                      autoCompleteType: 'off',
                      autoCorrect: false,
                      keyboardType: 'email-address',
                    }}
                    IconFamily={MaterialIcons}
                    icon="mail-outline"
                    light
                  />
                </View>
                <View style={styles.input}>
                  <TextField
                    title='Hasło'
                    value={password}
                    setValue={setPassword}
                    inputProps={{
                      placeholder: 'Podaj hasło',
                      secureTextEntry: true,
                      autoCompleteType: 'off',
                      autoCorrect: false,
                    }}
                    IconFamily={Feather}
                    icon="lock"
                    light
                  />
                </View>
                <TouchableOpacity>
                  <Text style={styles.forgotPasswordText}>Zapomniałeś hasła?</Text>
                </TouchableOpacity>
                {!!(error || message) && <Text style={error ? styles.errorText : styles.successMessage}>{error || message}</Text>}
                <View style={styles.buttonView}>
                  <Button
                    text='Zaloguj'
                    isLoading={isLoading}
                    onPress={logIn}
                    style={styles.submitBtn}
                  />
                </View>
              </View>
              <AuthFormSeparator>lub zaloguj przez</AuthFormSeparator>
              <View style={styles.socialButtons}>
                <SocialButton image={require('../../../assets/social-icons/google.png')}/>
                <SocialButton image={require('../../../assets/social-icons/apple.png')}/>
                <SocialButton image={require('../../../assets/social-icons/facebook.png')}/>
              </View>
              <View style={styles.registerLink}>
                <Text style={{color: darkMode ? colors.lightGray : colors.textBlack}}>Nie masz konta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.link}>Zarejestruj się</Text>
                </TouchableOpacity>
              </View>
              
            </View>
            {isLoading && <ActivityIndicator />}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  errorText: {
    ...myStyles.errorText,
    marginVertical: 10
  },
  successMessage: {
    color: colors.green,
    marginVertical: 10
  },
  input: {
    marginVertical: 10,
  },
  logo: {
    height: myStyles.screenWidth * 0.4,
    width: myStyles.screenWidth * 0.65,
    resizeMode: 'contain',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    paddingBottom: 10,
  },
  flex: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: 2*myStyles.marginHorizontal,
    justifyContent: 'space-evenly',
  },
  submitBtn: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: colors.secondary,
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
  },
  link: {
    color: colors.secondary,
  },
  textLight: {
    color: colors.lightGray,
  },
  registerLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  }
})

export default LoginScreen