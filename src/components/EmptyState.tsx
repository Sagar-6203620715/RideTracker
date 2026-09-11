// src/components/EmptyState.tsx
import { View, Text, StyleSheet } from 'react-native';

interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🚗</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40, marginTop: 60 },
  icon: { fontSize: 40, marginBottom: 12 },
  message: { fontSize: 14, color: '#888', textAlign: 'center' },
});