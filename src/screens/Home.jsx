import React from 'react'
import { Text, View, Dimensions, Image } from 'react-native'

const Home = () => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#0D0D0D',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 20 }}>Welcome Home</Text>
            <View>
                <Image source={require('../../assets/images/rectangle.png')} style={{ minWidth: windowWidth - 2 }} />
            </View>

        </View>)
}

export default Home