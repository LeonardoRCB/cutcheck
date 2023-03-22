import React ,{ useState } from 'react';
import { VStack,Box} from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import { Button } from '../components/Button';
import { Header } from '../components/Header';

export function UserType(navigate) {

    const [userType,setUserType] = useState();

    function handleUserType(typerUser){
        navigate.navigation.navigate('signup',{usertype: typerUser,})
    }

  return (
    <VStack flex={1} bg="gray.700">
      <Box bg="gray.600" px={6}>
        <Header title="Voce é?" />
      </Box>
      <VStack flex={1} px={4} bg='gray.600' justifyContent='center' pb={50}>
        <Button
          w='full'
          title='Cliente'
          mb={2} 
          onPress={()=>handleUserType('cliente')}  
        />
        <Button
          w='full'
          title='Barbearia'
          mb={2} 
          onPress={()=>handleUserType('barbearia')}   
        />
        <Button
          w='full'
          title='Barbeiro Autonomo'
          mb={2} 
          onPress={()=>handleUserType('barbeiro')}  
        />
      </VStack>
    </VStack>
  );
}