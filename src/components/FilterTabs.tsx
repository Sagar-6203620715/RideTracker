// src/components/FilterTabs.tsx
import { View, Text, Pressable, StyleSheet } from 'react-native';

export type FilterOption = 'All' | 'Upcoming' | 'Completed';

interface FilterTabsProps {
  selected: FilterOption;
  onSelect: (option: FilterOption) => void;
}

const OPTIONS: FilterOption[] = ['All', 'Upcoming', 'Completed'];

export default function FilterTabs({ selected, onSelect }: FilterTabsProps) {
  return (
    <View style={styles.container}>
      {OPTIONS.map((option) => {
        const isActive = option === selected;
        return (
          <Pressable
            key={option}
            onPress={() => onSelect(option)}
            style={[styles.tab, isActive && styles.tabActive]}
          >
            <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 4,
    marginHorizontal: 16,
    marginTop: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  tabText: { fontSize: 13, color: '#666', fontWeight: '500' },
  tabTextActive: { color: '#111', fontWeight: '700' },
});