import { Text } from 'native-base';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

export default function Landing({ navigation }) {
  return (
    <View>
      <StatusBar barStyle='light-content' />
      <ImageBackground
        source={{ uri: 'https://source.unsplash.com/random' }}
        style={styles.img}
      >
        <SafeAreaView style={styles.settings_container}>
          <View style={styles.body}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.welcome}>Welcome To News App</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  settings_container: { flex: 1 },
  body: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  welcome: { color: '#fff', fontSize: 30, fontWeight: 'bold' },
  img: { width: '100%', height: '100%' }
});
