import { Picker as SystemPicker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Button } from 'react-native'

import colors from '../../constants/colors'; 
import myStyles from '../../constants/myStyles'; 
// import MyModal from './MyModal.component';

export default function Picker({options, value, onValueChange, title, IconFamily, icon, required}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      {title && <Text style={styles.label}>{title}</Text>}
      <View style={styles.pickerContainer}>
        {!!icon && <IconFamily name={icon} style={styles.inputIcon} />}
        <View style={styles.pickerWrapper}>
          {/* {Platform.OS === 'ios' ? (
            <TouchableOpacity
              style={styles.picker}
              onPress={() => {
                setIsVisible(true)
              }}
            >
              <Text style={styles.text}>
                {value ? (
                  options?.filter(i => i.value?.toString() === value?.toString())[0]?.label?.toString() || 'Wybierz z listy'
                ) : (
                  'Wybierz z listy'
                )}
              </Text>
                <MyModal 
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                >
                  <View style={styles.modal}>
                    <SystemPicker
                      itemStyle={{ color: '#000000' }}
                      selectedValue={value}
                      onValueChange={(itemValue) => onValueChange(itemValue)}
                    >
                      {[{ label: required ? 'Brak' : 'Wybierz', value: null }, ...options].map(o => {
                        return (
                          <SystemPicker.Item
                            label={o.label}
                            value={o.value || 0}
                            key={o.value || 0}
                          />
                        )
                      })}
                    </SystemPicker>
                    <Button
                      onPress={() => { setIsVisible(false) }}
                      style={{ width: myStyles.viewWidth, alignSelf: 'center' }}
                      color={colors.red} title="Wybierz">
                      Wybierz
                    </Button>
                </View>
            </MyModal>
        </TouchableOpacity> */}
          {/* ) : ( */}
            <SystemPicker
              selectedValue={value}
              onValueChange={onValueChange}
              style={styles.picker}
            >
              {[{ label: required ? 'Brak' : 'Wybierz', value: null }, ...options].map(({label, value}) => <SystemPicker.Item label={label} value={value} key={value}/>)}
            </SystemPicker>
          {/* )} */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: colors.lightGray,
    marginHorizontal: 5,
    // borderColor: colors.gray,
    // borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 5
  },
  pickerWrapper: {
    flexGrow: 1,
  },
  picker: {
    height: 40,
    justifyContent: 'center',
  },
  label: {
    ...myStyles.label,
    fontSize: 16,
    color: colors.textBlack,
    marginBottom: 5,
  },
  inputIcon: {
    marginHorizontal: 10,
    fontSize: 24,
    color: colors.darkGray,
  },
});