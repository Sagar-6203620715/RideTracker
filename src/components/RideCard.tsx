// src/components/RideCard.tsx
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ride } from '../types/ride';
import StatusBadge from './StatusBadge';

interface RideCardProps {
  ride: Ride;
  onPress: () => void;
}

function formatScheduledTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function RideCard({ ride, onPress }: RideCardProps) {

  const isTappable = ride.status === 'IN_PROGRESS' || ride.status === 'SCHEDULED';

  return (
    <Pressable
        onPress={isTappable ? onPress : undefined}
        style={({ pressed }) => [
            styles.card,
            pressed && isTappable && styles.cardPressed,
            !isTappable && styles.cardDisabled,
        ]}
    >
      <View style={styles.topRow}>
        <Text style={styles.time}>{formatScheduledTime(ride.scheduledTime)}</Text>
        <StatusBadge status={ride.status} />
      </View>

      <View style={styles.routeRow}>
        <Text style={styles.location} numberOfLines={1}>{ride.pickup}</Text>
        <Text style={styles.arrow}>→</Text>
        <Text style={styles.location} numberOfLines={1}>{ride.drop}</Text>
      </View>

      <View style={styles.driverRow}>
        <Text style={styles.driverText}>{ride.driver.name}</Text>
        <Text style={styles.driverText}>{ride.driver.vehicleNumber}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // Android shadow equivalent
  },
  cardDisabled: { opacity: 0.6 },
  cardPressed: {
    opacity: 0.85,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  time: { fontSize: 13, color: '#666' },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: { fontSize: 14, fontWeight: '600', flexShrink: 1 },
  arrow: { marginHorizontal: 6, color: '#999' },
  driverRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  driverText: { fontSize: 12, color: '#666' },
});