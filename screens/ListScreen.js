import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import ViewStation from '../exercices/ViewStation';

export default function ListScreen() {
  return (
    <FlatList
      style={styles.container}
      renderItem={({ item }) => {
        return <Text>{item.title}</Text>
      }}
      data={[
        { id: "1", title: "Station 1", position: "1", distance: "10m", nb_bornes: "50" },
        { id: "2", title: "Station 2", position: "6", distance: "100m", nb_bornes: "45" },
        { id: "3", title: "Station 3", position: "3", distance: "5m", nb_bornes: "30" },
        { id: "4", title: "Station 4", position: "4", distance: "50m", nb_bornes: "60" },
      ]}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ViewStation station={item}/>}
    />
  );
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
