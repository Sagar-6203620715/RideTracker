// src/screens/RideDetailScreen.tsx
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

      {/* pickup/drop timeline block from Step 9 stays here, unchanged */}

      <Pressable style={styles.sosButton} onPress={handleSOS}>
        <Text style={styles.sosButtonText}>🆘 Emergency SOS</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // ...keep all your existing style keys from Steps 9 & 10, then add:
  sosButton: {
    backgroundColor: '#dc2626',
    marginHorizontal: 16,
    marginBottom: 32,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  sosButtonText: { color: 'white', fontWeight: '700', fontSize: 15 },
});