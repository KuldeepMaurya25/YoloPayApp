import React from 'react'
import { TouchableOpacity, View,Text,StyleSheet } from 'react-native'


const ButtonComponent = (props) => {
    const { text,color } = props;

    return (
        <TouchableOpacity style={[styles.btnContainer,{borderColor:color}]}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40}}>
                <Text style={{color:color,fontWeight:400,fontSize:15}}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnContainer:{
        width:96,
        borderWidth:0.3,
        borderBottomWidth:0,
        marginEnd:12,
        borderRadius:40,
    
        
    },
    
})
export default ButtonComponent