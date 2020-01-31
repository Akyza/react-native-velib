import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  Button,
  View
} from 'react-native';
import ViewStation from '../exercices/ViewStation';
import { getVelibFromApi } from '../API/Velib';

export default class ListScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      stations: []
    }
  }
  componentDidMount(){
    getVelibFromApi().then(data => {
      this.setState({
        stations: data.records
      });
    });
  }

  render(){
    return (
        <FlatList
          style={styles.container}
          renderItem={({ item }) => {
            return <Text>{item.title}</Text>
          }}
          data={this.state.stations}
          keyExtractor={item => item.recordid}
          renderItem={({item}) => <ViewStation station={item}/>}
        />
    );
  }
}

ListScreen.navigationOptions = {
  title: "Vélibs",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
