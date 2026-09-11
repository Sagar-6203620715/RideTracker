// src/screens/MyRidesScreen.tsx
import { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { Ride } from '../types/ride';
import { fetchRides } from '../services/rideService';

export default function MyRidesScreen() {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadRides = () => {
    setLoading(true);
    setError(null);

    fetchRides()
      .then((data) => setRides(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadRides();
  }, []); // empty array = run once, when the screen first mounts

  // --- Loading state ---
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3478f6" />
        <Text style={styles.centerText}>Loading rides...</Text>
      </View>
    );
  }

  // --- Error state ---
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <Pressable style={styles.retryButton} onPress={loadRides}>
          <Text style={styles.retryText}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  // --- Success state ---
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={rides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.pickup} → {item.drop}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  centerText: { marginTop: 8, color: '#666' },
  errorText: { color: '#d32f2f', marginBottom: 12, textAlign: 'center' },
  retryButton: { backgroundColor: '#3478f6', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  retryText: { color: 'white', fontWeight: '600' },
  row: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee' },
});