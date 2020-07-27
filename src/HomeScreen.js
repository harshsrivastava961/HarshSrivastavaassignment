import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      page: 1,
      fetchData: true,
    }
  }
  componentDidMount() {
    this.fetchUserData();
  }
  fetchUserData = () => {
    fetch('https://randomuser.me/api/?seed=1&page=' + this.state.page + '&results=10')
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataSource: [...this.state.dataSource, ...res.results], page: this.state.page++, fetchData: false
        });
      })
      .catch(error => {
        console.log("Error in fetching data:" + error);
      });
  }
  logout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      this.props.navigation.navigate('Login');
    }
    catch (exception) {
      console.log(exception);
    }
  }

  flatListItemSeparator = () => {
    return (
      <View
        style={styles.itemSeparator}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => item.uuid}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.flatListItemSeparator}
          renderItem={({ item }) => {
            return (
              <View style={styles.flatListContainer}>
                <Image source={{ uri: item.picture.large }} style={styles.imageView} />
                <View style={styles.textContainer}>
                  <Text style={styles.textView}>{item.name.title} {item.name.first} {item.name.last}</Text>
                  <Text style={styles.textView}>{item.phone}</Text>
                  <Text style={styles.textView}>{item.email}</Text>
                  <Text style={styles.textView}>{item.gender}</Text>
                </View>
              </View>
            )
          }}
          onEndReached={this.fetchUserData}
        />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fffaf0'
  },
  flatListContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fffaf0'

  },
  heading: {
    fontSize: 35,
    marginTop: 10,
    color: '#ffffff',
    marginBottom: 10,
    marginLeft: 50,
  },
  userName: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'column',
    width: '70%'
  },
  itemSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  imageView: {
    width: '30%',
    height: 150,
    margin: 7,
    borderRadius: 50
  },
  textView: {
    fontSize: 18,
    padding: 5,
    color: '#000000'
  },
  btn: {
    marginLeft: '75%',
    width: '25%',
    backgroundColor: 'black',
    padding: 10,
    justifyContent: 'flex-end'
  },
  btnTxt: {
    fontSize: 20,
    color: "#ffffff"
  },
});
export default HomeScreen;

























































/**import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

const dashboard = ({ navigation }) => {
    return (
        <View>
            <Text>dashboard</Text>
            <Button
                title='login'
                onPress={() => navigation.goBack()
                }
            />
            <Button
                title='home'
                onPress={() => navigation.navigate('home')
                }
            />
        </View>);
}
export default dashboard;*/