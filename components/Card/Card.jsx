import { Text, View , Button} from 'react-native'
import React from 'react'

export default function Card({navigation})   {

    return (
        <View style={{backgroundColor:'#cfc'}}>
      
        <View>
      <Text>Card page </Text>
        </View>
        <View  style={{height:630, justifyContent:"center"}}>
        
           <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
          />
           <Button
          title="About"
          color= 'blue'
          onPress={() => navigation.navigate('About')}
          />
          
       <Button         
            title="Go back"
            color="red"
            onPress={() => navigation.goBack()}       
          /> 
                     
          </View>
             
        </View>
  
    )
  
}