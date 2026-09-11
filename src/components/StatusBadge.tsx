// src/components/StatusBadge.tsx
import { View, Text, StyleSheet } from 'react-native';
import { RideStatus } from '../types/ride';

interface StatusBadgeProps {
  status: RideStatus;
}

// A lookup object mapping each status to its display color.
// Keeping this OUTSIDE the component means it's created once, not on every render.
const STATUS_COLORS: Record<RideStatus, string> = {
  SCHEDULED: '#f59e0b',    // amber
  IN_PROGRESS: '#3478f6',  // blue
  COMPLETED: '#16a34a',    // green
  CANCELLED: '#dc2626',    // red
};

const STATUS_LABELS: Record<RideStatus, string> = {
  SCHEDULED: 'Scheduled',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <View style={[styles.badge, { backgroundColor: STATUS_COLORS[status] }]}>
      <Text style={styles.text}>{STATUS_LABELS[status]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start', // shrinks badge to fit text, doesn't stretch full width
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});