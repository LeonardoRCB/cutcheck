import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';//

import { AuthRoutes } from '../routes/auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {

     //anota se esta carregando
    //const [loading, setIsLoading] = useState(true);
    //anota se o usuario esta autenticado
    //const [user, setUser] = useState();

    
 // useEffect(() => {
    //const subscriber = auth()
     // .onAuthStateChanged(response => {
     //   setUser(response);
      //  setIsLoading(false);
     // });
    
     //return subscriber;
 //}, []);

// if (loading) {
  // return <Loading />
 // }

  //return (
   // <NavigationContainer>
    //  {/* se usuario existe exibe as rotas autenticadas , se nao matem user na tela de login*/}
     // {user ? <AppRoutes /> : <SignIn/>}
  //  </NavigationContainer>
 // )
//}

  return (
    <NavigationContainer>
      {<AuthRoutes/>}
    </NavigationContainer>
  )
}
