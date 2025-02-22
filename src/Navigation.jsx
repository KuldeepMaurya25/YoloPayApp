import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './screens/Home';
import YoloPay from './screens/YoloPay';
import Ginie from './screens/Ginie';
import { Image } from 'react-native';
import styles from './styles/Navigation'

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="YoloPay"
            style={styles.mainContainer}
            activeColor="white"
            // inactiveColor='white'

            activeIndicatorStyle={styles.activeContainer}
            //   shifting={true}
            barStyle={styles.container}

            labeled={true}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                //    style={{padding:12}}
                options={{
                    tabBarLabel: 'Home',

                    tabBarColor: 'white',
                    //   tabbar
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../assets/images/home.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="YoloPay"
                component={YoloPay}
                options={{
                    tabBarLabel: 'Yolo Pay',
                    //   tabBarColor:'black',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../assets/images/pay.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="Ginie"
                component={Ginie}
                options={{
                    tabBarLabel: 'Ginie',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../assets/images/ginie.png')} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;