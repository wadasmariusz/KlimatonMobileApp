import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncStorage } from 'react-native'

import * as authActions from '../../store/actions/auth'

const StartupScreen = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('loginData')
      if (!userData) {
        dispatch(authActions.setTriedLogin())
        return
      }
      const data = JSON.parse(userData)
      if ((data?.tokenExpires * 1000 < Date.now()) || !data?.token) {
        dispatch(authActions.setTriedLogin())
        return
      }
      await dispatch(authActions.authenticate(data))
    }
    tryLogin()
  }, [])

  return null
}

export default StartupScreen