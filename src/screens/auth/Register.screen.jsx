import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import { useSelector } from 'react-redux'

const RegisterScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const darkMode = useSelector(state => state.theme.theme);

  const register = async () => {
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
      <Header back light/>
      <KeyboardAvoidingView behavior='height' style={styles.flex}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
            <View style={styles.content}>
              {/* <View
                style={styles.iconView}>
                  <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                  />
              </View> */}
              <View style={styles.inputsView}>
                <View style={styles.input}>
                  <TextField
                    title='Imię'
                    value={email}
                    setValue={setEmail}
                    inputProps={{
                      placeholder: 'Podaj imię',
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
                    title='Nazwisko'
                    value={email}
                    setValue={setEmail}
                    inputProps={{
                      placeholder: 'Podaj nazwisko',
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
                <View style={styles.input}>
                  <TextField
                    title='Powtórz hasło'
                    value={password}
                    setValue={setPassword}
                    inputProps={{
                      placeholder: 'Podaj hasło ponownie',
                      secureTextEntry: true,
                      autoCompleteType: 'off',
                      autoCorrect: false,
                    }}
                    IconFamily={Feather}
                    icon="lock"
                    light
                  />
                </View>
                {!!(error || message) && <Text style={error ? styles.errorText : styles.successMessage}>{error || message}</Text>}
                <View style={styles.buttonView}>
                  <Button
                    text='Zarejestruj'
                    isLoading={isLoading}
                    onPress={register}
                    style={styles.submitBtn}
                  />
                </View>
              </View>
              <AuthFormSeparator>lub zarejestruj przez</AuthFormSeparator>
              <View style={styles.socialButtons}>
                <SocialButton image={require('../../../assets/social-icons/google.png')}/>
                <SocialButton image={require('../../../assets/social-icons/apple.png')}/>
                <SocialButton image={require('../../../assets/social-icons/facebook.png')}/>
              </View>
              <View style={[styles.loginLink]}>
                <Text style={{color: darkMode ? colors.lightGray : colors.textBlack}}>Masz już konto? </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={styles.link}>Zaloguj się</Text>
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
    backgroundColor: colors.primary,
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
  textCenter: {
    justifyContent: 'center',
  },
  loginLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  }
})

export default RegisterScreen