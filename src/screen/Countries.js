import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, SafeAreaView, 
  Text, FlatList, TouchableOpacity, 
  View, 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';
import Input from '../components/Input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 20,
    color: colors.darkBlue,
  },
  countryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  countryText: {
    marginVertical: 5,
    fontSize: 15,
    color: colors.darkBlue,
  },
})

const countryAsyncStorageKey = 'countries';

const CountriesComponent = () => {
  const [countries, updateCountries] = useState([]);
  const [searchCountry, updateSearchCountry] = useState([]);
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
  };

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
      /*
       *const formattedCountries = data.map(({ Country, Slug }) => {
       *  return {
       *    label: Country,
       *    value: Slug,
       *  }
       *})
       */

      AsyncStorage.setItem(countryAsyncStorageKey, JSON.stringify(data))

      updateCountries(data);
      updateSearchCountry(data);
      //this.setState({ countries: formattedCountries })
    }
  };

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
  };

  const filterCountries = (searchText) => {
    if(searchText){
      const result = countries.filter(({ Country }) => Country.includes(searchText));
      //console.log({ result });
      updateSearchCountry(result)
    } else {
      updateSearchCountry(countries);
    };
  };

  // Calling api before component is mounted
  useEffect(() => {
    fetchCountries()
  }, []);
  
  //console.log({ countries });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Selecciona un país</Text>
      <View>
        <Input 
          placeholder="Buscar país..."
          placeholderTextColor={colors.darkBlue}
          style={{ color: colors.darkBlue }}
          onChangeText={filterCountries}
        />
      </View>
      <FlatList 
        data={searchCountry}
        keyExtractor={({ Slug }) => Slug}
        renderItem={({ item: { Slug, Country }}) => {
          const fadeIn = {
            0: {
              opacity: 0,
              scale: 0,
            },
            0.5: {
              opacity: 1,
              scale: 0.3,
            },
            1: {
              opacity: 1,
              scale: 1,
            },
          };
        return (
          <TouchableOpacity
            style={styles.countryContainer}
            onPress={() => console.log(Slug)}
          >
            <Animatable.Text 
              animation={fadeIn} 
              style={styles.countryText}
            >
              {Country}
            </Animatable.Text>
          </TouchableOpacity>
        ); 
        }}
      />
    </SafeAreaView>
  );
};

export default CountriesComponent
