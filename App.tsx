import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import R from 'res/R';
import Home from './src/views/Home';
import Login from './src/views/Login';
import AsyncStorage from '@react-native-community/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';

class App extends React.Component {

  state = {
    hasUser: null
  }

  async componentDidMount() {
    crashlytics().log('App mounted.');

    const hasUser = JSON.parse(await AsyncStorage.getItem('@hasUser') || "false");
    this.setState({ hasUser });
  }

  login = () => {
    AsyncStorage.setItem('@hasUser', JSON.stringify(true));
    this.setState({ hasUser: true });
  }

  logout = () => {
    AsyncStorage.setItem('@hasUser', JSON.stringify(false));
    this.setState({ hasUser: false });
  }
  render() {
    const { hasUser } = this.state;    

    if (hasUser === null) {
      return <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    }

    return (
      <View style={styles.container}>
        {hasUser === true && <Home logout={crashlytics().crash} />}
        {hasUser === false && <Login login={this.login} />}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.blue
  }
});

export default App;
