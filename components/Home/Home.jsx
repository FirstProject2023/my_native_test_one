import { Text, View, Button} from 'react-native'
import React from 'react'

export default function Home({navigation})   {
    return (
<View style={{backgroundColor:'#cac'}}>
      
      <View>
    <Text>Home page </Text>
      </View>
      <View  style={{height:630, justifyContent:"center"}}>
      
         <Button
        title="About"
        onPress={() => navigation.navigate('About')}
        />

        <Button title='Card' onPress={()=> navigation.navigate('Card')}/>

           
        </View>
           
      </View>

    )
}