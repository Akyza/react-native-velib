import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import ViewStation from '../exercices/ViewStation';

export default function StationScreen(){
    return(
        <FlatList
            style={styles.container}
            data={[
                { id: "1", title: "Station 1", position: "1", distance: "10m" },
                { id: "2", title: "Station 2", position: "6", distance: "100m" },
                { id: "3", title: "Station 3", position: "3", distance: "5m" },
                { id: "4", title: "Station 4", position: "4", distance: "50m" },
            ]}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ViewStation station={item}/>}
        />
    )
}


StationScreen.navigationOptions = {
    title: "Station",
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
})