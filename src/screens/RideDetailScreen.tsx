// src/screens/RideDetailScreen.tsx
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'RideDetail'>;

export default function RideDetailScreen({ route }: Props) {
  const { ride } = route.params; // fully typed — TS knows this is a `Ride`

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ride.pickup} → {ride.drop}</Text>
      <Text style={styles.subtitle}>Driver: {ride.driver.name}</Text>
      <Text style={styles.subtitle}>Vehicle: {ride.driver.vehicleNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 4 },
});