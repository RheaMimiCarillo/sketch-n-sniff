import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import DrawingPad from './components/DrawingPad/DrawingPad';
import AppBar from './components/AppBar/AppBar';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <AppBar />
        <DrawingPad />
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
