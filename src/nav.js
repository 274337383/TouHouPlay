import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/accout/login"

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: "#000000"}}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: "#000000"}}>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
        </View>
    );
}

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50,}}
            source={require('../images/reimen.gif')}
        />
    );
}

const Stack = createNativeStackNavigator();

function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"登录"} component={Login} options={{}}/>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Nav;