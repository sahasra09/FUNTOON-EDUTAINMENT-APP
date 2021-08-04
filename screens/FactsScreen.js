import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import FactsCard from './FactsCard'
import {FlatList} from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';
let facts=require('../facts.json')


export default class RiddlesScreen extends Component{
  renderItem=({item:fact})=>{
    return <FactsCard fact={fact} navigation={this.props.navigation}/>
  }
  keyExtractor=(item,index)=>index.toString()
  render(){
    return(
      <View style={{flex:5,backgroundColor: '#3C1874',}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
        <Image source={require('../assets/home.png')}
          style={{width:RFValue(50),height:RFValue(50),marginLeft:RFValue(10),marginTop:RFValue(20)}}
        />

        </TouchableOpacity>

        <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={facts}
            renderItem={this.renderItem}
   //         horizontal={true}
          />
        </View>
      </View>
    )
  }
}
 