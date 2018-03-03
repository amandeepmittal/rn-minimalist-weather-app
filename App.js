import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  state = {
    isLoading: false
  }

  render() {
    const {isLoading} = this.state
    return (
      <View style={styles.container}>
        {isLoading ? null : <View>
          <Text>Minimalist Weather App</Text>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
