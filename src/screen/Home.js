import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Button, View, Text } from 'react-native';
import { showMessage } from 'react-native-flash-message'

const styles = StyleSheet.create({
  container: {},
})

export default class Home extends Component {
    constructor(props) {
      super(props)
  
      this.state = { 
        countries: [],
      }
    }

  fetchCountries = async () => {
    const { data, status } = await axios.get(
    'https://api.covid19api.com/countries',
  );
    console.log({ status });
    if (status === 200) {
      showMessage({
        message: "Países obtenidos",
        type: 'success',
      })
      this.setState({ countries: data })
    }
  }

  render() {
    const { countries } = this.state

    const CountriesComponents = countries.map(({ Country, Slug }, index) => (
      <View key={`Country-${index}`}>
        <Text>{Country} - {Slug}</Text>
      </View>
    ))
    return (
      <>
        <Button title="Obtener países" onPress={this.fetchCountries}/>
        {CountriesComponents}
      </>
    )
  }
}
