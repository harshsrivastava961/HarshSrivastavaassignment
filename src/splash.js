import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const splash = props => {
  let [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('user_id').then(value =>
        props.navigation.navigate(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        )
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});













































/**import React ,{Component} from 'react';
import {View ,ImageBackground} from 'react-native';

export default class splash extends Component
{
  constructor(props)
  {
    super(props)
    setTimeout(()=>
    {
      this.props.navigation.navigate("login")
    },2000);
  }
  render()
  {
    return(
            <ImageBackground source={require('./src/images/background.png')} 
            style={{height:'100%', width:'100%'}} >
              <View
              style={{flex:1,justifyContent:'center', alignItems:'center'}}
              >

              </View>

            </ImageBackground>
    );
  }
}*/