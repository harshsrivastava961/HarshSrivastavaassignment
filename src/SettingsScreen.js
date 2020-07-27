import React from 'react';
import { View, Text } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}>Welcome</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        to
      </Text>
      <Text style={{ fontSize: 23, marginTop: 10 }}>Setting Screen</Text>
    </View>
  );
};
export default SettingsScreen;