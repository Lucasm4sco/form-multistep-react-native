import { StatusBar as SettingStatusBar } from 'expo-status-bar';
import { ScrollView, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Form from './src/components/Form/Form';

export default function App() {
  return (
    <ScrollView contentContainerStyle={{
      minHeight: '100%',
    }}>
      <SettingStatusBar style='light' translucent={true} />
      <LinearGradient
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          paddingTop: StatusBar.currentHeight + 30
        }}
        start={{ x: 1, y: 1 }}
	      end={{ x: 0, y: 0 }}
	      colors={['#2e00ff','#6b0979']}
      >
        <Form />
      </LinearGradient>
    </ScrollView>
  );
}
