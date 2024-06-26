import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Cross from "react-native-vector-icons/Entypo"
import Add1 from "react-native-vector-icons/MaterialIcons"

const Dec = ({onPress2}) => {
  return (
    <View>
      <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 1, backgroundColor: '#4157FF', borderColor: '#4157FF' }} onPress={onPress2}>
        <Cross
          name='minus'
          size={28}
          color='white'
        />
      </TouchableOpacity>
    </View>
  )
}

export default Dec