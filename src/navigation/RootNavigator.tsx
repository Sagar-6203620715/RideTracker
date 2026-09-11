// src/navigation/RootNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyRidesScreen from '../screens/MyRidesScreen';
import RideDetailScreen from '../screens/RideDetailScreen';
import { Ride } from '../types/ride';
import { colors } from '../theme/color';

export type RootStackParamList = {
  MyRides: undefined;
  RideDetail: { ride: Ride };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyRides"
        screenOptions={{
            headerStyle: { backgroundColor: colors.card },
            headerTitleStyle: { fontWeight: '700' },
        }}
        >
        <Stack.Screen name="MyRides" component={MyRidesScreen} options={{ title: 'My Rides' }} />
        <Stack.Screen name="RideDetail" component={RideDetailScreen} options={{ title: 'Live Ride Tracking' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}