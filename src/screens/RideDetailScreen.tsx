// src/screens/RideDetailScreen.tsx
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import DriverCard from '../components/DriverCard';

type Props = NativeStackScreenProps<RootStackParamList, 'RideDetail'>;

export default function RideDetailScreen({ route }: Props) {
  const { ride } = route.params;

  return (
    <ScrollView style={styles.container}>
      <DriverCard driver={ride.driver} />

      <View style={styles.addressCard}>
        <View style={styles.addressRow}>
          <View style={styles.dot} />
          <View style={styles.addressText}>
            <Text style={styles.addressLabel}>Pickup</Text>
            <Text style={styles.addressValue}>{ride.pickup}</Text>
          </View>
        </View>

        <View style={styles.connector} />

        <View style={styles.addressRow}>
          <View style={[styles.dot, styles.dotDestination]} />
          <View style={styles.addressText}>
            <Text style={styles.addressLabel}>Drop</Text>
            <Text style={styles.addressValue}>{ride.drop}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  addressCard: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  addressRow: { flexDirection: 'row', alignItems: 'flex-start' },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#3478f6', marginTop: 4, marginRight: 12 },
  dotDestination: { backgroundColor: '#dc2626' },
  connector: { width: 1, height: 24, backgroundColor: '#ddd', marginLeft: 4.5, marginVertical: 2 },
  addressText: { flex: 1 },
  addressLabel: { fontSize: 12, color: '#999', marginBottom: 2 },
  addressValue: { fontSize: 15, fontWeight: '600' },
});