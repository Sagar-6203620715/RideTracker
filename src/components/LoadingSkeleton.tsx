// src/components/LoadingSkeleton.tsx
import { View, StyleSheet } from 'react-native';

// One fake card shape, mimicking RideCard's layout
function SkeletonCard() {
  return (
    <View style={styles.card}>
      <View style={styles.lineShort} />
      <View style={styles.lineLong} />
      <View style={styles.lineMedium} />
    </View>
  );
}

export default function LoadingSkeleton() {
  // Render 4 fake cards — roughly matches a typical first screen of real data
  return (
    <View>
      {[1, 2, 3, 4].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 6,
  },
  lineShort: { width: '30%', height: 12, backgroundColor: '#e5e5e5', borderRadius: 4, marginBottom: 10 },
  lineLong: { width: '90%', height: 14, backgroundColor: '#e5e5e5', borderRadius: 4, marginBottom: 10 },
  lineMedium: { width: '60%', height: 12, backgroundColor: '#e5e5e5', borderRadius: 4 },
});