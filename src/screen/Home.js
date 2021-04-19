import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import { showMessage } from 'react-native-flash-message'
import DropdownPicker from '../components/DropdownPicker'
import AsyncStorage from '@react-native-async-storage/async-storage'

const countryAsyncStorageKey = 'countries'

export default class Home extends Component {
    constructor(props) {
      super(props)
  
      this.state = { 
        countries: [],
      }
    }

  componentDidMount() {
   this.getFromStorage() 
  };

  getFromStorage = async () => {
    const savedData = await AsyncStorage.getItem(countryAsyncStorageKey)
    console.log({ savedData });
  }

  

  fetchCountries = async () => {
    const { data, status } = await axios.get('https://api.covid19api.com/countries');
    console.log({ data, status });
    if (status === 200) {
      showMessage({
        message: "Países obtenidos",
        type: 'success',
      })
      const formattedCountries = data.map(({ Country, Slug }) => {
        return {
          label: Country,
          value: Slug,
        }
      })

      AsyncStorage.setItem(countryAsyncStorageKey, JSON.stringify(formattedCountries))

      this.setState({ countries: formattedCountries })
    }
  }


  render() {
    const { countries } = this.state
    console.log({ countries });
    return (
      <>
        <Button title="Obtener países" onPress={this.fetchCountries}/>
        <DropdownPicker countries={countries} />
      </>
    )
  }
}
