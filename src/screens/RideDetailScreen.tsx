import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, Alert, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { TRIP_STEPS } from '../types/ride';
import DriverCard from '../components/DriverCard';
import StatusStepper from '../components/StatusStepper';

type Props = NativeStackScreenProps<RootStackParamList, 'RideDetail'>;

export default function RideDetailScreen({ route }: Props) {
  const { ride } = route.params;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const isComplete = currentStepIndex === TRIP_STEPS.length - 1;

  useEffect(() => {
    if (isComplete) return;
    const timer = setTimeout(() => {
      setCurrentStepIndex((prev) => prev + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentStepIndex, isComplete]);

  const handleManualAdvance = () => {
    if (!isComplete) setCurrentStepIndex((prev) => prev + 1);
  };

  const handleSOS = () => {
    Alert.alert(
      'Emergency SOS',
      'Are you sure you want to trigger SOS?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Trigger SOS',
          style: 'destructive',
          onPress: () => Alert.alert('SOS Triggered', 'Emergency services have been notified. (dummy action)'),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <DriverCard driver={ride.driver} />

      <View style={styles.stepperCard}>
        <Text style={styles.sectionTitle}>Trip Status</Text>
        <StatusStepper currentStepIndex={currentStepIndex} />
        {!isComplete && (
          <Pressable style={styles.advanceButton} onPress={handleManualAdvance}>
            <Text style={styles.advanceButtonText}>Simulate Next Step</Text>
          </Pressable>
        )}
      </View>

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
      <Pressable style={styles.sosButton} onPress={handleSOS}>
        <Text style={styles.sosButtonText}>🆘 Emergency SOS</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  stepperCard: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 15, fontWeight: '700', marginBottom: 12 },
  advanceButton: {
    marginTop: 16,
    backgroundColor: '#3478f6',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  advanceButtonText: { color: 'white', fontWeight: '600' },
  sosButton: {
    backgroundColor: '#dc2626',
    marginHorizontal: 16,
    marginBottom: 32,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  sosButtonText: { color: 'white', fontWeight: '700', fontSize: 15 },
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