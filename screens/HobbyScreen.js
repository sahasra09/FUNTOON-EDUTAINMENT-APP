import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class StoryCard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Image
                source={require('../assets/FunToon.png')}
                style={{ width: 75, height: 75 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Funtoon</Text>
          </View>
        </View>
        <View style={styles.storyContainer}>
          <ScrollView style={styles.storyCard}>
            <Image
              source={{ uri: this.props.route.params.hobby.img }}
              style={styles.image}
            />
            <View style={styles.titleTextContainer}>
                <Text style={styles.storyTitleText}>
                {this.props.route.params.hobby.name}
              </Text>

            </View>
            <View style={styles.storyTextContainer}>
              <Text style={styles.storyText}>
                {this.props.route.params.hobby.description}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C1874"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
  },
  storyContainer: {
    flex: 1
  },
  storyCard: {
    margin: RFValue(20),
    backgroundColor: "#932432",
    borderRadius: RFValue(20)
  },
  image: {
    width: "100%",
    alignSelf: "center",
    height: RFValue(200),
    borderRadius: RFValue(20),
    resizeMode: "contain"
  },
  dataContainer: {
    flexDirection: "row",
    padding: RFValue(20)
  },
  titleTextContainer: {
    flex: 0.8
  },
  storyTitleText: {
    fontSize: RFValue(25),
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    color: "white"
  },
  iconContainer: {
    flex: 0.2
  },
  storyTextContainer: {
    padding: RFValue(20)
  },
  storyText: {
    fontSize: RFValue(15),
    color: "white"
  },
});
