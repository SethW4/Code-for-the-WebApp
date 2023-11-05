import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import Math from './pages/math';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Math" component={Math}/>
                <Stack.Screen name = "Home" component={Home}/>
                <Stack.Screen name = "Login" component={Login}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}