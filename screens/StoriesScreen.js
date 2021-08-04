import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity,SafeAreaView,Platform,StatusBar} from 'react-native'
import StoryCard from './StoryCard'
import {FlatList} from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';
let stories=require('../stories.json')


export default class StoriesScreen extends Component{
  renderItem=({item:story})=>{
    return <StoryCard story={story} navigation={this.props.navigation}/>
  }
  keyExtractor=(item,index)=>index.toString()
  render(){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor: '#3C1874'}}>
        <SafeAreaView style={{marginTop: Platform.OS === "android" ? StatusBar.currentHeight :0}} />
       <View style={{ flex: 0.15, flexDirection: 'row'}}>
            <View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
             <Image
                source={require('../assets/FunToon.png')}
                style={{ width: RFValue(75), height: RFValue(75),borderRadius:RFValue(100)}}
              />
            </TouchableOpacity>
             
            </View>
            <View>
              <Text style={{color: '#F3F3F3',fontSize: RFValue(70),marginLeft: RFValue(10),alignSelf: 'center',textAlign: 'center'}}>Funtoon</Text>
            </View>
          </View>
        <View style = {{flex:0.85}}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={stories}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}