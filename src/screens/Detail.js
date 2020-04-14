import { Content } from 'native-base';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewHeight = Dimensions.get('window').height - 56;

export const Detail = ({ route }) => {
  const data = route.params;
  const { url } = data.content;

  if (url !== undefined) {
    return (
      <View style={styles.feed_container}>
        <ScrollView>
          <Content contentContainerStyle={{ height: WebViewHeight }}>
            <WebView
              source={{ uri: url }}
              scalesPageToFit
              startInLoadingState
            />
          </Content>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.feed_container}>
        <Text style={styles.errTxt}>
          Ops! ☹️ Something went wrong, try again later
        </Text>
      </View>
    );
  }
};

export const SourceDetail = ({ route }) => {
  const data = route.params;
  const { url } = data.content;

  if (url !== undefined) {
    return (
      <View style={styles.feed_container}>
        <ScrollView>
          <Content contentContainerStyle={{ height: WebViewHeight }}>
            <WebView
              source={{ uri: url }}
              scalesPageToFit
              startInLoadingState
            />
          </Content>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.feed_container}>
        <Text style={styles.errTxt}>
          Ops! ☹️ Something went wrong, try again later
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  feed_container: { flex: 1 },
  errTxt: { textAlign: 'center', justifyContent: 'center', flex: 1 },
});
