import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'native-base';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Detail, SourceDetail } from '../screens/Detail';
import Home from '../screens/Home';
import Landing from '../screens/Landing';
import NewsSources from '../screens/Source';
import SideDrawer from './bar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function NavStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName='Landing'
      screenOptions={{
        headerStyle: { backgroundColor: '#f08d91', elevation: 0 },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                type='Ionicons'
                name='md-menu'
                style={{ fontSize: 30, color: 'white', marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerTitle: 'News Feeds',
        }}
      />
      <Stack.Screen
        name='Landing'
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Detail'
        component={Detail}
        options={{ headerTitle: 'News Detail' }}
      />
    </Stack.Navigator>
  );
}

function SourceStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName='Sources'
      screenOptions={{
        headerStyle: { backgroundColor: '#f08d91', elevation: 0 },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name='Sources'
        component={NewsSources}
        options={{
          headerTitle: 'News Sources',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                type='Ionicons'
                name='md-arrow-back'
                style={{ fontSize: 30, color: 'white', marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name='SourceDetail'
        component={SourceDetail}
        options={{ headerTitle: 'Source' }}
      />
    </Stack.Navigator>
  );
}

function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerContent={(props) => <SideDrawer {...props} />}
    >
      <Drawer.Screen
        name='Home'
        component={NavStack}
        options={{
          drawerLabel: 'News Feed',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name='rss-feed' size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Sources'
        component={SourceStack}
        options={{
          drawerLabel: 'News Sources',
          drawerIcon: ({ size, color }) => (
            <Ionicons name='md-globe' size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function AppStack() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}

export default AppStack;
