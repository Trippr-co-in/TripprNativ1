import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const HomestaySample = ({navigation}) => {
  return (
    <View>
      <Text style={{color:"black"}}>HomestaySample</Text>
      <TouchableOpacity onPress={()=> {
        navigation.goBack()
      }}>
        <Text style={{color:'black'}}>
            Press
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomestaySample

const styles = StyleSheet.create({})