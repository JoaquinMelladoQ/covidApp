import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import { showMessage } from 'react-native-flash-message'
import DropdownPicker from '../components/DropdownPicker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TotalData from '../components/TotalData'

const countryAsyncStorageKey = 'countries'

export default class Home extends Component {
    constructor(props) {
      super(props)
  
      this.state = { 
        countries: [],
        countryData: [],
        countryName: null,
      }
    }

  componentDidMount() {
   this.getFromStorage() 
  };

  getFromStorage = async () => {
    const savedData = JSON.parse(await AsyncStorage.getItem(countryAsyncStorageKey))
    if (savedData) {
      this.setState({ countries: savedData })
    }
    //console.log({ savedData: JSON.parse(savedData) });
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

  onDropdownPickerSelect = ({ label, value }) => {
    //console.log({ value });
    this.fetchDataByCountry(label, value)
  }

  fetchDataByCountry = async (countryName, countrySlug) => {
    try {
        const { data, status } = await axios.get(
          `https://api.covid19api.com/country/${countrySlug}`)
        if (status === 200) {
          this.setState({ 
            countryData: data,
            countryName,
          })
          return
        }

        this.setState({ 
          countryData: [],
          countryName: null,
        })

      } catch {
      this.setState({ 
        countryData: [],
        countryName: null,
      })
    }
    //console.log({ response });
  }


  render() {
    const { countries, countryName, countryData } = this.state
    //console.log({ countries });
    return (
      <>
        <Button title="Obtener países" onPress={this.fetchCountries}/>
        <DropdownPicker 
          countries={countries} 
          onSelect={this.onDropdownPickerSelect}
        />
        <TotalData />
        <Text>{countryName} - {countryData.length}</Text>
      </>
    )
  }
}
