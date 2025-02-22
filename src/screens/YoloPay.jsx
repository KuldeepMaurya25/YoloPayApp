import React from 'react'
import { SafeAreaView, Text, View, Image, Dimensions } from 'react-native'
import styles from '../styles/YoloPay'
import DebitCard from '../components/DebitCard'
import ButtonComponent from '../components/ButtonComponenet'
const YoloPay = () => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.mainText}>select payment mode</Text>
                <Text style={styles.secondaryText}>choose your preferred payment method to make payment. </Text>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <ButtonComponent text={'pay'} color={'white'} />
                    <ButtonComponent text={'card'} color={'red'} />
                </View>
                <View style={styles.cardContainer}>
                    <Text style={styles.secondaryText}>
                        YOUR DIGITAL DEBIT CARD
                    </Text>
                    <View style={{ marginTop: 20 }}>
                        <DebitCard></DebitCard>

                    </View>
                </View>

            </View>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Image source={require('../../assets/images/rectangle.png')} style={{ minWidth: windowWidth - 2 }} />
            </View>
        </SafeAreaView>
    )
}

export default YoloPay