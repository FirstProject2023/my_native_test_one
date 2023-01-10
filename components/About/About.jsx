import { Text, View, Button } from 'react-native'
import React from 'react'

export default function About({navigation})   {
    return (
<View style={{backgroundColor:'#aac'}}>
      
      <View>
    <Text>about page </Text>
      </View>
      <View  style={{height:630, justifyContent:"center"}}>
      
         <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
        />

         <Button
          color='green' title='Card' onPress={()=> navigation.navigate('Card')}
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