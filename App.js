import { StatusBar as SettingStatusBar } from 'expo-status-bar';
import { ScrollView, StatusBar, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Form from './src/components/Form/Form';

export default function App() {
  return (
    <LinearGradient
      style={{
        height: '100%',
        padding: 10,
        paddingTop: StatusBar.currentHeight
      }}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={['#2e00ff', '#6b0979']}
    >
      <SettingStatusBar style='light' />
      <ScrollView contentContainerStyle={{
        minHeight: '100%',
        paddingVertical: 40,
      }}
        showsVerticalScrollIndicator={false}
      >
        <Form />
      </ScrollView>
    </LinearGradient>
  );
}
