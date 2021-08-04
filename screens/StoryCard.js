import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
export default class StoryCard extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('StoryScreen', {
              story: this.props.story,
            })
          }
          style={styles.button}>
          <View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
              {this.props.story.title}
            </Text>
            <Image
              source={{ uri: this.props.story.img }}
              style={{
                width: RFValue(140),
                height: RFValue(140),
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: RFValue(40),
              }}
            />
            <Text style={{ textAlign: 'center' }}>
              Author: {this.props.story.author}
            </Text>
            <Text style={{ textAlign: 'center' }}>
              {this.props.story.description}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 0.85,
  },
  button: {
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
