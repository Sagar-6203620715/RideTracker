// src/navigation/RootNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

// Temporary placeholder screens — we'll replace these in later steps
function MyRidesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My Rides Screen</Text>
    </View>
  );
}

function RideDetailScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ride Detail Screen</Text>
    </View>
  );
}

// This defines the SHAPE of our navigator: screen names + what params each expects.
// We'll properly type this in Step 2 once our Ride type exists.
export type RootStackParamList = {
  MyRides: undefined;
  RideDetail: { rideId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyRides">
        <Stack.Screen
          name="MyRides"
          component={MyRidesScreen}
          options={{ title: 'My Rides' }}
        />
        <Stack.Screen
          name="RideDetail"
          component={RideDetailScreen}
          options={{ title: 'Live Ride Tracking' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}