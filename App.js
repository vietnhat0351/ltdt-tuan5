import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

const Stack = createStackNavigator();

function Home({navigation}) {

  const onPressHandlerA = () => {
    navigation.navigate('ScreenA')
  }

  return(
    <View>
      <Text>
        Home
      </Text>
      <Pressable
        style={{backgroundColor: '#000000', alignItems: 'center'}}
        onPress={onPressHandlerA}      
      >
        <Text style={{color: '#ffffff'}}>
          Screen A
        </Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='ScreenA' component={ScreenA}/>
        <Stack.Screen name='ScreenB' component={ScreenB}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
