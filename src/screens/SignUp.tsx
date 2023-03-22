import { VStack, Box, Icon, useTheme } from 'native-base'
import { Envelope, Key, User, House, MapPin } from 'phosphor-react-native'
import  React,{ useState } from 'react'
import { Alert } from 'react-native'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Header } from '../components/Header'

import { useRoute } from '@react-navigation/native'

export function SignUp({navigation}) {
    const route = useRoute()
    const  { colors } = useTheme();
    const user = Object.values(route.params).toString()
    


  return (
    <VStack flex={1} bg="gray.700">
    <Box bg="gray.600" px={6}>
      <Header title="Cadastro" />
    </Box>
    <VStack flex={1} px={4} bg='gray.600' pt={8}>
    {user === 'cliente' &&
    <>
      <Input
        placeholder='nome'
        mb={3}
        InputLeftElement={<Icon as={<User color={colors.gray[300]}/>} ml={4}/>}
      /> 
      <Input
        placeholder='E-mail'
        mb={3}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
      /> 
      <Input
        placeholder='Endereço'
        InputLeftElement={<Icon as={<House color={colors.gray[300]}/>} ml={4}/>}
        mb={3}
      />
      <Input
        placeholder='Cidade'
        InputLeftElement={<Icon as={<MapPin color={colors.gray[300]}/>} ml={4}/>}
        mb={3}

      />
      <Input
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
        mb={3}
      />
      <Input
        placeholder='Confirmar Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
      />
    </>
    }
    {user === 'barbearia' &&
    <>
        <Input
        placeholder='E-mail'
        mb={3}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
      /> 
      <Input
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
        mb={3}
      />
      <Input
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
      />
      <Input
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
      />
      <Input
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
      />
      
    </>
    }

    {user === 'barbeiro' &&
    <>
        <Input
        placeholder='E-mail'
        mb={3}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
      /> 
      <Input
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
        mb={3}
      />
      <Input
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
      />
      <Input
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
      />
      <Input
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
      />
      
    </>
    }


    <Button
      w='full'
      title='Cadastrar'
      mb={2} 
      mt={12}
    />
   </VStack>
</VStack>
  );
}