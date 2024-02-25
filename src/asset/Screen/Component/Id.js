import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Add1 from "react-native-vector-icons/MaterialIcons"
import Cross from "react-native-vector-icons/Entypo"

const Id = ({onPress1,onPress2}) => {
  return (
    <View style={{flexDirection:'row'}}>
      <View>
      <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 1, backgroundColor: '#DFE3FF', borderColor: '#DFE3FF' }} onPress={onPress1}>
        <Add1
          name='add'
          size={28}
          color='#4157FF'
        />
      </TouchableOpacity>
    </View>
    <Text>1</Text>
    <View>
      <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 1, backgroundColor: '#4157FF', borderColor: '#4157FF' }} onPress={onPress2}>
        <Cross
          name='minus'
          size={28}
          color='white'
        />
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Id