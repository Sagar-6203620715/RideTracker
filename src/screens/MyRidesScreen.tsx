// src/screens/MyRidesScreen.tsx
import { useEffect, useMemo, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { Ride } from '../types/ride';
import { fetchRides } from '../services/rideService';
import RideCard from '../components/RideCard';
import FilterTabs, { FilterOption } from '../components/FilterTabs';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';

export default function MyRidesScreen() {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterOption>('All');
  
  // add refreshing state alongside your existing state
  const [refreshing, setRefreshing] = useState(false);

  // separate refresh handler — same fetch, different loading flag
  const handleRefresh = () => {
  setRefreshing(true);
  fetchRides()
      .then((data) => {
      setRides(data);
      setError(null); // clear any old error if refresh succeeds
      })
      .catch((err) => setError(err.message))
      .finally(() => setRefreshing(false));
  };

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
  }, []);

  // Derived data — recomputed only when `rides` or `filter` actually change.
  const filteredRides = useMemo(() => {
    if (filter === 'All') return rides;
    if (filter === 'Upcoming') {
      return rides.filter((r) => r.status === 'SCHEDULED' || r.status === 'IN_PROGRESS');
    }
    // filter === 'Completed' — note: intentionally excludes CANCELLED
    return rides.filter((r) => r.status === 'COMPLETED');
  }, [rides, filter]);

  if (loading) {
    return (
      <View style={{ flex: 1, paddingTop: 12 }}>
        <LoadingSkeleton />
      </View>
    );
  }

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

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{rides.length} Total Rides</Text>
      </View>

      <FilterTabs selected={filter} onSelect={setFilter} />

      <FlatList
        data={filteredRides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <RideCard ride={item} onPress={() => console.log('Tapped', item.id)} />
        )}
        contentContainerStyle={filteredRides.length === 0 ? { flex: 1 } : { paddingVertical: 8 }}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListEmptyComponent={
            <EmptyState message={`No ${filter.toLowerCase()} rides found.`} />
        }
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
  header: { paddingHorizontal: 16, paddingTop: 12 },
  headerTitle: { fontSize: 20, fontWeight: '700' },
});