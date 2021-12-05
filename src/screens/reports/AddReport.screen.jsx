import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Entypo, FontAwesome5  } from '@expo/vector-icons';
import TextField from '../../components/form/TextField.component'
import Button from '../../components/general/Button.component'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import colors from '../../constants/colors'
import Header from '../../components/Header'
import myStyles from '../../constants/myStyles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Picker from '../../components/form/Picker.component'

const options = [
  {label: 'Zalanie', value: 0}
]

export const AddReportScreen = () => {
  const darkMode = useSelector(state => state.theme.theme);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState(0);

  return (
    <View style={{backgroundColor: darkMode ? colors.primary : colors.background, flex: 1}}>
      <SafeAreaView>
        <Header title="Dodaj zgłoszenie"/>
          <View style={styles.content}>
          <View style={styles.input}>
            <TextField
              title='Tytuł'
              value={title}
              setValue={setTitle}
              inputProps={{
                placeholder: 'Co się dzieje?',
                autoCompleteType: 'off',
              }}
            />
          </View>
          <View style={styles.input}>
            <TextField
              title='Opis'
              value={description}
              setValue={setDescription}
              inputProps={{
                placeholder: 'Opisz zagrożenie',
                autoCompleteType: 'off',
                multiline: true,
                numberOfLines: 4
              }}
            />
          </View>
          <View style={styles.input}>
            <Picker
              title="Rodzaj zagrożenia"
              options={options}
              value={type}
              onValueChange={(val) => setType(val)}
            />
          </View>
          <View style={styles.photoButtons}>
            <TouchableOpacity style={[styles.takePhoto, styles.photoButton]}>
              <Entypo name="camera" style={styles.photoIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.selectFromGallery, styles.photoButton]}>
              <FontAwesome5 name="photo-video" style={styles.photoIcon} />
            </TouchableOpacity>
          </View>
          <Button>Dodaj</Button>
          </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: myStyles.marginHorizontal,
  },
  photoButton: {
    borderColor: colors.gray,
    borderWidth: 3,
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoIcon: {
    fontSize: 40,
    color: colors.gray,
  },
  photoButtons: {
    flexDirection: 'row',
    marginVertical: 40,
    justifyContent: 'space-evenly',
  },
  input: {
    marginVertical: 10,
  }
});