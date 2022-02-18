import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Icons} from '../assets/svg';
import {CommonColor} from '../constance/color';
import CreatePubScreen from '../screens/CreatePubScreen';
import HomeScreen from '../screens/HomeScreen';
import {responsiveHeight} from '../utils/scallingUtils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      backBehavior={'none'}
      initialRouteName="home"
      safeAreaInsets={{top: 0, bottom: 0, left: 0, right: 0}}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: CommonColor.COMP_BG_COLOR,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.labelFocusedContainer(focused)}>
                <SvgXml
                  fill={
                    focused ? CommonColor.PURPLE_BOR : CommonColor.PLACEHOLDER
                  }
                  xml={Icons.CARDS_TAB}
                />
              </View>
            );
          },
        }}
        name={'cardTab'}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.labelFocusedContainer(focused)}>
                <SvgXml
                  fill={
                    focused ? CommonColor.PURPLE_BOR : CommonColor.PLACEHOLDER
                  }
                  xml={Icons.ACTIVITY_TAB}
                />
              </View>
            );
          },
        }}
        name={'activityTab'}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.labelFocusedContainer(focused)}>
                <SvgXml
                  stroke={
                    focused ? CommonColor.PURPLE_BOR : CommonColor.PLACEHOLDER
                  }
                  xml={Icons.HOME_TAB}
                />
              </View>
            );
          },
        }}
        name={'home'}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.labelFocusedContainer(focused)}>
                <SvgXml
                  fill={
                    focused ? CommonColor.PURPLE_BOR : CommonColor.PLACEHOLDER
                  }
                  stroke={
                    focused ? CommonColor.PURPLE_BOR : CommonColor.PLACEHOLDER
                  }
                  xml={Icons.LIVE_TAB}
                />
              </View>
            );
          },
        }}
        name={'liveTab'}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.labelFocusedContainer(focused)}>
                <SvgXml
                  stroke={
                    focused ? CommonColor.PURPLE_BOR : CommonColor.PLACEHOLDER
                  }
                  xml={Icons.MORE_TAB}
                />
              </View>
            );
          },
        }}
        name={'more'}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export const InitialStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="Publication" component={CreatePubScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  labelFocusedContainer: focused => ({
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderTopWidth: focused ? 3 : null,
    borderTopColor: CommonColor.PURPLE_BOR,
    justifyContent: 'center',
  }),
});
