import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../config/colors'
import Box from './Box'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
    textAlign: 'center',
  },
})

const TotalData = ({
  totalConfirmed = 0,
  totalDeaths = 0,
  totalRecevered = 0,
  totalActive = 0,
  countryName = '',
}) => {
  return (
    <>
      <Text style={styles.title}>Total para {countryName}</Text>
      <View style={styles.container}>
        <Box 
          totalName="Confirmados"
          totalValue={totalConfirmed}
          color={colors.blue}
        />
        <Box 
          totalName="Recuperados"
          totalValue={totalRecevered}
          color={colors.green}
        />

        <Box 
          totalName="Fallecidos"
          totalValue={totalDeaths}
          color={colors.red}
        />
        <Box 
          totalName="Activos"
          totalValue={totalActive}
          color={colors.yellow}
        />
      </View>
    </>
  )
}

export default TotalData
