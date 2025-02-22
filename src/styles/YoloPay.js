import { StyleSheet} from 'react-native';
import colors from './Colors';
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'#0D0D0D'
  },
  container:{
      paddingVertical:20,
      paddingHorizontal:15
  },
  mainText:{
    color:colors.white,
    fontWeight:600,
    fontSize:24,
    // lineHeight:21,
    letterSpacing:1

  },
  secondaryText:{
    color:colors.white,
    fontWeight:400,
    fontSize:15,
    opacity:0.5,
    marginTop:5,
    lineHeight:21,
    letterSpacing:1

  },
  cardContainer:{
    marginTop:40
  }
  
});