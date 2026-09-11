// src/navigation/RootNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import MyRidesScreen from '../screens/MyRidesScreen';   // ← new import

// Keep RideDetailScreen as a placeholder for now — we build it in a later step
function RideDetailScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ride Detail Screen</Text>
    </View>
  );
}

export type RootStackParamList = {
  MyRides: undefined;
  RideDetail: { rideId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyRides">
        <Stack.Screen name="MyRides" component={MyRidesScreen} options={{ title: 'My Rides' }} />
        <Stack.Screen name="RideDetail" component={RideDetailScreen} options={{ title: 'Live Ride Tracking' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}