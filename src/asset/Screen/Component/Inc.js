import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Cross from "react-native-vector-icons/Entypo"
import Add1 from "react-native-vector-icons/MaterialIcons"

const Inc = ({onPress1}) => {

  return (
    <View>
      <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 1, backgroundColor: '#DFE3FF', borderColor: '#DFE3FF' }} onPress={onPress1}>
        <Add1
          name='add'
          size={28}
          color='#4157FF'
        />
      </TouchableOpacity>
    </View>
  )
}

export default Inc