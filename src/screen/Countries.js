import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import { showMessage } from 'react-native-flash-message'

const styles = StyleSheet.create({
  container: {},
})

const countryAsyncStorageKey = 'countries'

const Countries = () => {
  const [countries, updateCountries] = useState([]);
  const [countryData, updateCountryData] = useState([]);
  const [countryName, updateCountryName] = useState('');
  const [isLoading, updateIsLoading] = useState(false);
  
  
  
  const getFromStorage = async () => {
    const savedData = JSON.parse(await AsyncStorage.getItem(countryAsyncStorageKey))
    if (savedData) {
      updateCountries(savedData)
      //this.setState({ countries: savedData })
    }
    //console.log({ savedData: JSON.parse(savedData) });
  }

  const fetchCountries = async () => {
    const { data, status } = await axios.get('https://api.covid19api.com/countries');
    console.log({ data, status });
    if (status === 200) {
      updateCountryData(data);
      updateCountryName(countryName);
      updateIsLoading(false);
    /*
     *      this.setState({
     *        countryData: data,
     *        countryName,
     *        isLoading: false,
     *      })
     *
     */
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

      updateCountries(formattedCountries)
      //this.setState({ countries: formattedCountries })
    }
  } 

  const fetchDataByCountry = async (countryName, countrySlug) => {
    updateIsLoading(true)
    //this.setState({ isLoading: true })
    try {
        const { data, status } = await axios.get(
          `https://api.covid19api.com/country/${countrySlug}`)
        if (status === 200) {
          updateCountryData(data);
          updateCountryName(countryName);
          updateIsLoading(false);
          return;
        }
          updateCountryData([]);
          updateCountryName(null)
          updateIsLoading(false);
        /*
         *this.setState({ 
         *  countryData: [],
         *  countryName: null,
         *  isLoading: false,
         *})
         */
      } catch {
          updateCountryData([]);
          updateCountryName(null)
          updateIsLoading(false);
      /*
       *this.setState({ 
       *  countryData: [],
       *  countryName: null,
       *  isLoading: false,
       *})
       */
    }
    //console.log({ response });
  }

  useEffect(() => {
    
  });
  

  return (
    <SafeAreaView>
      <></>
    </SafeAreaView>
  )
}

export default Countries
