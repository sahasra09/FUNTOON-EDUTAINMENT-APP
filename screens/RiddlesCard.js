import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
export default class RiddlesCard extends Component {
  riddleAnswer = () => {};
  render() {
    return (
      <View style={styles.bg}>
        <View style={styles.button}>
          <Image
            source={{ uri: this.props.riddle.img }}
            style={{
              width: RFValue(250),
              height: RFValue(200),
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: RFValue(40),
            }}
          />

          <Text
            style={{
              fontSize: RFValue(20),
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
        //      fontFamily: 'Impact',
            }}>
            {this.props.riddle.riddle}
          </Text>
          <Text
            style={{
              fontSize: RFValue(20),
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
        //      fontFamily: 'Impact',
              color: 'white',
            }}>
            {this.props.riddle.answer}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  button: {
    // flex: 0.3,
    //  marginLeft: 50,
    //  marginRight: 50,
    marginTop: RFValue(30),
    borderRadius: RFValue(30),
    backgroundColor: '#932432',
    //  alignItems: 'center',
    borderColor: '#283747',
    borderWidth: RFValue(5),
    marginBottom: RFValue(20),
    //  height: 550,
    //       width: 300,
  },
});
