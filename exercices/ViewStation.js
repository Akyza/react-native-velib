import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ViewStation extends React.Component{
  render(){
    const station = this.props.station;
    return(
      <View style={styles.main_container}>
        <View style={styles.header_container}>
          <Text style={styles.title_text}>{station.title}</Text>
          <Text>Position : {station.position}</Text>
        </View>
        <Text>Distance : {station.distance}</Text>
        <Text>Nombre de bornes : {station.nb_bornes}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: 'column',
    borderWidth : 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
})

export default ViewStation;