import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dropdown from 'react-native-dropdown-picker';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  innerContainer: {
    height: 40,
  },
})

const DropdownPicker = ({ 
  countries = [], 
  onSelect = () => {},
}) => {
  return (
    <Dropdown 
      items={countries}
      containerStyle={styles.innerContainer}
      placeholder="Selecciona un país"
      style={styles.container}    
      onChangeItem={onSelect}
      searchable
    />
  )
}

export default DropdownPicker
