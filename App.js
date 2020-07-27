import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import splash from './src/splash';
import login from './src/login';
import RegisterScreen from './src/RegisterScreen';
import DrawerNavigationRoutes from './src/DrawerNavigationRoutes';

const Auth = createStackNavigator({
login: {
    screen: login,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    },
  },
});

const App = createSwitchNavigator({ 
  splash: {
    screen: splash,
    navigationOptions: {
      headerShown: false,
    },
  },
  Auth: {
    
    screen: Auth,
  },
  DrawerNavigationRoutes: {
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(App);





































/**import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {name as appName} from './app.json';
//import Dashboard from './Screens/Dashboard';
import splash from './src/splash';
import login from './src/login';
//import WebViewScreen from './Screens/WebViewScreen';
//import ImageScreen from './Screens/ImageScreen';
const navigator = createStackNavigator(
  {
    splash: { screen: splash,navigationOptions: {headerShown: false },
    },
    login:{ screen: login,navigationOptions: {headerShown: false },
  },
    /**Dashboard:{ screen: Dashboard,navigationOptions: {title: 'Dashboard' },
  },
    WebViewScreen:{ screen: WebViewScreen,navigationOptions: {title: 'WebViewScreen' },
  },
    ImageScreen:{ screen: ImageScreen,navigationOptions: {title: 'ImageScreen' },
  },
    
  },
  
  {
    initialRouteName: "splash",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#bcd8e1',
      },
      title: appName,
      SplashScreen:{headerShown:false}
    }
  }
);

export default createAppContainer(navigator);*/





























/**import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import login from './src/login';
import dashboard from './src/dashboard';
import home from './src/home';
import notifications from './src/notifications';

const StackNavigator = createStackNavigator({
    login: login,
    dashboard: dashboard
});
const DrawerNavigator = createDrawerNavigator({
    home: {
        screen: home,
    },
    notifications: {
        screen: notifications,
    },
    login: {
        screen: StackNavigator,
    },
});

export default createAppContainer(DrawerNavigator);*/
























/**import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import splash from './src/splash';
import login from './src/login';
import home from './src/home';
import navigate from './src/navigate';


const App=createStackNavigator({
  splash:{screen:splash,navigationOptions:{headerShown:false}},
  login :{screen:login,navigationOptions:{headerShown:false}},
  home :{screen:home,navigationOptions:{headerShown:false}},
  navigate :{screen:navigate,navigationOptions:{headerShown:false}},

});

export default createAppContainer(App)*/



























/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/**import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;*/
