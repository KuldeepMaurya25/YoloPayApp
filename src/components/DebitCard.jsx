import React, { useState } from 'react'
import { Image, View, StyleSheet, TouchableOpacity, Text, ImageBackground, } from 'react-native'
import { faker } from '@faker-js/faker';

const DebitCard = () => {

    const [isFreeze, setIsFreeze] = useState(true);

    const freezeHandler = () => {
        setIsFreeze(!isFreeze);
    }

    function generateRandomDate() {
        const date = faker.date.anytime(); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0'); 
        return `${month}/${day}`;
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}  >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/yolo.png')} />
                    <Image source={require('../../assets/images/bank.png')} />

                </View>
                <View style={styles.accContainer}>
                    <View>
                        <Text style={styles.accNum}>{faker.number.int({ min: 1000, max: 9999 })}</Text>
                        <Text style={styles.accNum}>{faker.number.int({ min: 1000, max: 9999 })}</Text>
                        <Text style={styles.accNum}>{faker.number.int({ min: 1000, max: 9999 })}</Text>
                        <Text style={styles.accNum}>{faker.number.int({ min: 1000, max: 9999 })}</Text>

                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', }}>
                        <View >
                            <Text style={styles.secondaryText}>expiry</Text>
                            <Text style={styles.accNum}>{generateRandomDate()}</Text>
                        </View>
                        <View >
                            <Text style={styles.secondaryText}>CVV</Text>
                            <View style={{ flexDirection: 'row' }}>
                         
                                <Image source={require('../../assets/images/eye.png')} />
                            </View>
                        </View>
                    </View>


                </View>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <Image source={require('../../assets/images/copy.png')} />
                    <Text style={[styles.secondaryText, { color: '#A90808', marginLeft: 4, opacity: 1 }]}>copy details</Text>

                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1,alignItems:'flex-end'}}>
                <Image source={require('../../assets/images/cardName.png')} />

                </View>
            </View>
            {isFreeze && (
                <Image source={require('../../assets/images/smoke.png')} style={styles.overlay} />
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, isFreeze ? { borderColor: 'red' } : { borderColor: 'white' }]} onPress={freezeHandler}>
                    <Image source={require('../../assets/images/u_snowflake.png')} style={[{ opacity: 2 }, isFreeze ? { tintColor: 'red' } : { tintColor: 'white' }]} />
                </TouchableOpacity>
                <Text style={isFreeze ? { color: 'red' } : { color: 'white' }}>{isFreeze ? 'unfreeze' : 'freeze'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        width: 186,
        height: 296,
        borderRadius: 16,
        padding: 10,
        borderColor: 'white',
        borderWidth: 0.2,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        width: 186,
        height: 296,
        borderRadius: 16,
        borderRadius: 16,
        overflow: 'hidden'
    },
    buttonContainer: {
        marginLeft: 30,
        flexDirection: 'column',
        alignItems: 'center'

    },
    button: {
        width: 58,
        height: 58,
        borderRadius: 29,
        borderColor: 'white',
        borderWidth: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    accNum: {
        color: 'white', fontFamily: 'Arial',
        fontSize: 20
    },
    accContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'

    },
    secondaryText: {
        color: 'white',
        fontWeight: 400,
        fontSize: 15,
        opacity: 0.5,
    }
})
export default DebitCard