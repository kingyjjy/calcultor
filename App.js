import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, SafeAreaView } from 'react-native';
import { ThemaContex } from './context/ThemaContex';
import MyKeyboard from './components/MyKeyboard';
import { myColor } from './components/styles/Colors';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemaContex.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container,{backgroundColor:'#132043'}]}>
        <StatusBar style='auto'/>
        <Switch value={theme === 'light'} onValueChange={()=>setTheme(theme === 'light' ? 'dark' : 'light')} style={styles.switch}/>
        <MyKeyboard/>
      </SafeAreaView>
    </ThemaContex.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch:{
    marginTop:-620
  }
});
