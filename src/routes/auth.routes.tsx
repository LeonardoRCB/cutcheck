
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { UserType } from '../screens/UserType';
import { SignUp } from '../screens/SignUp';


const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() { 
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={SignIn} />
      <Screen name='tipodeusuario' component={UserType}/>
      <Screen name='signup' component={SignUp} options={ {title: 'teste'}}/>
    </Navigator>
  )
} 
