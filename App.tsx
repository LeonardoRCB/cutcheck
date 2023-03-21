import { NativeBaseProvider, StatusBar } from 'native-base';

import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { UserType } from './src/screens/UserType';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes/index';
import { Preload } from './src/screens/Preload';

export default function App() {
  const [fontsLoaded]= useFonts({Roboto_400Regular,Roboto_700Bold});
  
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes/> : <Loading/>}
      
    </NativeBaseProvider>
     
  );
}

