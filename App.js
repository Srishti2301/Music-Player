import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import MusicPlayer from './component/MusicPlayer';
const App =()=>{
  return(
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <MusicPlayer/>
    </View>
  );

};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
