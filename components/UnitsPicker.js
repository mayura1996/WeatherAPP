import React from 'react'
import { View, Text } from 'react-native'
import {Picker} from '@react-native-community/picker'

export default function UnitsPicker({uniitsSystem, setUnitySystem}) {
    return (
        <View>
           <Picker selectedValue={uniitsSystem} onValueChange={(item)=>setUnitySystem(item)  }>
               <Picker.Item label="°C" value="metric"/>
               <Picker.Item label="F" value="imperial"/>
           </Picker>
        </View>
    )
}
