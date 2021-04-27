import React, { Component } from 'react';
import { StyleSheet, Button, SafeAreaView } from 'react-native';
import TotalData from '../components/TotalData'
import colors from '../config/colors'
import Loading from '../components/Loading'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  }
})


export default class Home extends Component {
    constructor(props) {
      super(props)
  
      this.state = { 
        countryData: [],
        countryName: null,
        isLoading: false,
      }
    }

  /*
   *componentDidMount() {
   * this.getFromStorage() 
   *};
   */

  onDropdownPickerSelect = ({ label, value }) => {
    //console.log({ value });
    this.fetchDataByCountry(label, value)
  }
  
  getLastValue = (currentData = [], key) => {
    const lastValue = currentData.slice(-1)

    if (lastValue.length) {
      return lastValue[0][key]
    }
    return 0
  }

  render() {
    const { navigation } = this.props
    const { countries, countryName, countryData, isLoading } = this.state
    //console.log({ countries });
    const lastValueConfirmed = this.getLastValue(countryData, 'Confirmed');
    const lastValueActive = this.getLastValue(countryData, 'Active');
    const lastValueRecovered = this.getLastValue(countryData, 'Recovered');
    const lastValueDeaths = this.getLastValue(countryData, 'Deaths');

    const lineChartConfirmed = countryData.map(({ Confirmed }) => Confirmed);
    const lineChartActive = countryData.map(data => data.Active);
    const lineChartRecovered = countryData.map(data => data.Recovered);
    const lineChartDeaths = countryData.map(data => data.Deaths);

    return (
      <SafeAreaView style={styles.container}>
        <Button 
          color={colors.yellow}
          title="Abrir menú lateral"
          onPress={() => navigation.openDrawer()}
        />
        <Loading isLoading={isLoading}>
          <TotalData 
            countryName={countryName} 
            totalConfirmed={lastValueConfirmed}
            totalRecovered={lastValueRecovered}
            totalActive={lastValueActive}
            totalDeaths={lastValueDeaths}
          />
        </Loading>
        <Button 
          title="Navegar a Gráficos"
          onPress={() => navigation.navigate('Charts', { 
            lineChartConfirmed,
            lineChartActive,
            lineChartRecovered,
            lineChartDeaths, 
          })}
        /> 
      </SafeAreaView>
    )
  }
}
