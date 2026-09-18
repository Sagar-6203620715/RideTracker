import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';
import { Driver } from '../types/ride';

interface DriverCardProps {
  driver: Driver;
}

export default function DriverCard({ driver }: DriverCardProps) {
  const handleCall = () => {
    Alert.alert('Call Driver', `Calling ${driver.name}... (dummy action)`);
  };

  const handleMessage = () => {
    Alert.alert('Message Driver', `Opening chat with ${driver.name}... (dummy action)`);
  };

  return (
    <View style={styles.card}>
      <View style={styles.infoRow}>
        <View>
          <Text style={styles.name}>{driver.name}</Text>
          <Text style={styles.rating}>⭐ {driver.rating.toFixed(1)}</Text>
          <Text style={styles.vehicle}>{driver.vehicleNumber}</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <Pressable style={[styles.actionButton, styles.callButton]} onPress={handleCall}>
          <Text style={styles.actionText}>📞 Call</Text>
        </Pressable>
        <Pressable style={[styles.actionButton, styles.messageButton]} onPress={handleMessage}>
          <Text style={styles.actionText}>💬 Message</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  infoRow: { marginBottom: 14 },
  name: { fontSize: 18, fontWeight: '700', marginBottom: 4 },
  rating: { fontSize: 14, color: '#555', marginBottom: 2 },
  vehicle: { fontSize: 13, color: '#888' },
  actionRow: { flexDirection: 'row', gap: 10 },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  callButton: { backgroundColor: '#e8f5e9' },
  messageButton: { backgroundColor: '#e3f2fd' },
  actionText: { fontWeight: '600', fontSize: 14 },
});