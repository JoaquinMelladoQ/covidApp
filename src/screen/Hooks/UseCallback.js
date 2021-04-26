import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const randomColor = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16)

const Button = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ backgroundColor: randomColor(), padding: 5, }}
  >
    <Text style={{ fontSize: 20 }}>{title}</Text>
  </TouchableOpacity>
)

const functions = new Set()

const UseCallback = () => {
  const [delta, setDelta] = useState(1);
  const [incremental, setIncremental] = useState(0);

  const incrementalDelta = () => setDelta((delta) => delta + 1)
  const incremento = () => setIncremental((incremental) => incremental + delta)
  
  functions.add(incrementalDelta)
  functions.add(incremento)

  return (
    <View style={styles.container}>
      <Text>Delta es {delta}</Text>
      <Text>Contador es incremental {incremental}</Text>
      <View style={styles.box}>
        <Button 
          title="Incrementar delta" 
          onPress={incrementalDelta}
        />
        <Button 
          title="Incrementar Counter" 
          onPress={incremento}
        />
      </View>
      <Text>Nuevas funciones agregadas al set: {functions.size - 2}</Text>
    </View>
  )
}

export default UseCallback
