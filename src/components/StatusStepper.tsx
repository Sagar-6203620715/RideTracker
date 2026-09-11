// src/components/StatusStepper.tsx
import { View, Text, StyleSheet } from 'react-native';
import { TRIP_STEPS } from '../types/ride';

interface StatusStepperProps {
  currentStepIndex: number; // 0 to TRIP_STEPS.length - 1
}

export default function StatusStepper({ currentStepIndex }: StatusStepperProps) {
  return (
    <View style={styles.container}>
      {TRIP_STEPS.map((step, index) => {
        const isDone = index <= currentStepIndex;
        const isLast = index === TRIP_STEPS.length - 1;

        return (
          <View key={step} style={styles.stepRow}>
            <View style={styles.stepIndicatorColumn}>
              <View style={[styles.circle, isDone && styles.circleDone]}>
                {isDone && <Text style={styles.checkmark}>✓</Text>}
              </View>
              {!isLast && <View style={[styles.line, isDone && styles.lineDone]} />}
            </View>

            <Text style={[styles.stepLabel, isDone && styles.stepLabelDone]}>
              {step}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 4 },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start' },
  stepIndicatorColumn: { alignItems: 'center', width: 30 },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  circleDone: { backgroundColor: '#16a34a', borderColor: '#16a34a' },
  checkmark: { color: 'white', fontSize: 12, fontWeight: '700' },
  line: { width: 2, height: 30, backgroundColor: '#ccc' },
  lineDone: { backgroundColor: '#16a34a' },
  stepLabel: { fontSize: 15, color: '#999', marginLeft: 10, marginTop: 2 },
  stepLabelDone: { color: '#111', fontWeight: '600' },
});