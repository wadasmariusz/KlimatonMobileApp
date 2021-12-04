import React, {useRef, useState} from 'react'
import {Pressable, StyleSheet, Text, TextInput, View,} from 'react-native'
import myStyles from '../../constants/myStyles'
import colors from '../../constants/colors'

const TextField = ({ title, value, setValue, style, inputProps, IconFamily, icon, containerStyles, light}) => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);

  return (
    <Pressable onPress={() => {
      ref.current?.focus()
    }}>
      <View style={styles.container}>
        {title && <Text style={[styles.label, light ? styles.labelLight : styles.labelDark]}>{title}</Text>}
        <View style={[styles.inputWrapper, isFocused ? styles.inputFocus : '', containerStyles]}>
          {!!icon && <IconFamily name={icon} style={[
            styles.inputIcon,
            light ? styles.iconLight : styles.iconDark,
            isFocused ? styles.iconFocus : ''
          ]} />}
          <TextInput
            ref={ref}
            {...{
              autoCapitalize: 'none',
              ...inputProps,
            }}
            value={value}
            style={{
              ...styles.text,
              color: light ? colors.textWhite : colors.textBlack,
              ...style
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              console.log('Blur');
              setIsFocused(false);
            }}
            //caretHidden={Platform.OS === 'android' ? true : false}
            placeholderTextColor={light ? colors.lightGray : colors.gray}
            onChangeText={text => { setValue && setValue(text) }}
          />
        </View>
        
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    ...myStyles.text,
    fontSize: 17,
    color: colors.textBlack,
    flexGrow: 1,
    flexShrink: 0,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: colors.darkGray,
    backgroundColor: colors.darkGray,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    marginRight: 10,
    fontSize: 24,
  },
  iconLight: {
    color: colors.lightGray,
  },
  iconDark: {
    color: colors.darkGray,
  },
  label: {
    ...myStyles.label,
    fontSize: 16,
    marginBottom: 5,
  },
  labelLight: {
    color: colors.lightGray,
  },
  labelDark: {
    color: colors.textBlack,
  },
  inputFocus: {
    borderColor: colors.secondary,
    backgroundColor: colors.inputWhite,
  },
  iconFocus: {
    color: colors.secondary,
  },
  container: {
    borderRadius: myStyles.borderRadiusSmall,
    backgroundColor: colors.inputWhite,
    paddingTop: 3,
    paddingBottom: 3,
  },
})

export default TextField