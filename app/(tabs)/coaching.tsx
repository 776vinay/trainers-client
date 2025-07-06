import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme, getColors } from '@/hooks/useColorScheme';
import { useUserRole } from '@/contexts/UserContext';

// Import the dynamic coaching trainer view
import CoachingTrainerViewDynamic from '@/components/coaching/CoachingTrainerViewDynamic';

export default function CoachingScreen() {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  const styles = createStyles(colors);
  const { userRole } = useUserRole();

  // For now, we'll only show the trainer view since that's what we've implemented
  // In the future, you can add other role views here
  if (userRole === 'trainer') {
    return <CoachingTrainerViewDynamic />;
  }

  // Default fallback for other roles
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Add other role views here in the future */}
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});