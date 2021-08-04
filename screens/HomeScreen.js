import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#3C1874' }}>
          <View style={{ flex: 0.15, flexDirection: 'row' }}>
            <View>
              <Image
                source={require('../assets/FunToon.png')}
                style={{ width: RFValue(75), height: RFValue(75) }}
              />
            </View>
            <View>
              <Text
                style={{
                  color: '#F3F3F3',
                  fontSize: RFValue(70),
                  marginLeft: RFValue(10),
         //         fontFamily: 'Mistral',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Funtoon
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.85 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Stories')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: RFValue(20),
              //    fontFamily: 'ink free',
                }}>
                Stories
              </Text>
              <Image
                source={require('../assets/S1.jpg')}
                style={{
                  width: RFValue(150),
                  height: RFValue(100),
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: RFValue(30),
                  backgroundColor: 'white',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Facts')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: RFValue(20),
              //    fontFamily: 'ink free',
                }}>
                Facts
              </Text>
              <Image
                source={require('../assets/facts.jpg')}
                style={{
                  width: RFValue(150),
                  height: RFValue(100),
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: RFValue(30),
                  backgroundColor: 'white',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Riddles')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: RFValue(20),
                 // fontFamily: 'ink free',
                }}>
                Riddles
              </Text>
              <Image
                source={require('../assets/r1.jpg')}
                style={{
                  width: RFValue(150),
                  height: RFValue(100),
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: RFValue(30),
                  backgroundColor: 'white',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Hobbies')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: RFValue(20),
                  //fontFamily: 'ink free',
                }}>
                What it says?
              </Text>
              <Image
                source={require('../assets/h1.jpg')}
                style={{
                  width: RFValue(150),
                  height: RFValue(100),
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: RFValue(30),
                  backgroundColor: 'white',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 0.3,
    marginLeft: RFValue(50),
    marginRight: RFValue(50),
    marginTop: RFValue(30),
    borderRadius: RFValue(30),
    backgroundColor: '#932432',
    alignItems: 'center',
    borderColor: '#283747',
    borderWidth: RFValue(5),
  },
});
