import { Container, Tab, Tabs } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Tab1 from '../screens/tabs/tab1';
import Tab2 from '../screens/tabs/tab2';
import Tab3 from '../screens/tabs/tab3';
import Tab4 from '../screens/tabs/tab4';

export default function TabScreen({ navigation }) {
  return (
    <Container>
      <Tabs>
        <Tab
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
          heading='General'
        >
          <Tab1 navigation={navigation} />
        </Tab>
        <Tab
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
          heading='Health'
        >
          <Tab2 navigation={navigation} />
        </Tab>
        <Tab
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
          heading='Sports'
        >
          <Tab3 navigation={navigation} />
        </Tab>
        <Tab
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
          heading='Technology'
        >
          <Tab4 navigation={navigation} />
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = StyleSheet.create({
  tabStyle: { backgroundColor: '#f08d91' },
  activeTabStyle: { backgroundColor: '#f08d91' },
  textStyle: { color: 'white' },
  activeTextStyle: { color: 'white' },
});
