import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import store from './src/store';
import { fetchUser } from './src/users';

export default class App extends React.Component {
  render() {
    const { users } = store.getState();
    const user = users['tdewangan'] || '';
    console.log('app.js', users);
    return (
      <View style={styles.container}>
        <Button
          raised
          title="getUser"
          onPress={() => store.dispatch(fetchUser('tdewangan'))}
        />
        <Text>hi {user.name}</Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
