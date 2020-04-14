import { MaterialIcons } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Linking } from 'expo';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Drawer, Switch, TouchableRipple } from 'react-native-paper';

export default function SideDrawer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.imgHeader}>
        <Image
          source={{ uri: 'https://source.unsplash.com/user/erondu/1600x900' }}
          style={styles.img}
        />
      </View>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <DrawerItemList {...props} />
        </Drawer.Section>
        <Drawer.Section title='Other Countries' style={styles.drawerSection}>
          <Drawer.Item
            label='United States'
            onPress={() => {}}
            icon={({ color, size }) => (
              <MaterialIcons name='place' color={color} size={size} />
            )}
          />
          <Drawer.Item
            label='Canada'
            onPress={() => {}}
            icon={({ color, size }) => (
              <MaterialIcons name='place' color={color} size={size} />
            )}
          />
          <Drawer.Item
            label='Nigeria'
            onPress={() => {}}
            icon={({ color, size }) => (
              <MaterialIcons name='place' color={color} size={size} />
            )}
          />
        </Drawer.Section>
        <Drawer.Section title='Preference' style={styles.drawerSection}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents='none'>
                <Switch value={true} />
              </View>
            </View>
          </TouchableRipple>
          <Drawer.Item
            label='Help'
            onPress={() => Linking.openURL('https://github.com/Josh-Uvi')}
            icon={({ color, size }) => (
              <MaterialIcons name='help' color={color} size={size} />
            )}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sidebarText: {
    marginBottom: 20,
    fontSize: 20,
    color: '#000',
  },
  imgHeader: {
    backgroundColor: '#f08d91',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 60,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 65,
  },
  menuTab: { marginLeft: 20, marginTop: 20, padding: 10 },
  logout: { flexDirection: 'row', marginLeft: 20, marginTop: 20, padding: 10 },
  drawerSection: {
    marginTop: 5,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
