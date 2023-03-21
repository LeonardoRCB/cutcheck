import { VStack, Heading, Icon, useTheme } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native'
import  React,{ useState } from 'react'
import { Alert } from 'react-native'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { useRoute } from '@react-navigation/native'

export function SignUp({navigation}) {
    const route = useRoute()
    const  { colors } = useTheme();
    const user = Object.values(route.params).toString()
    


  return (
    <VStack flex={1} bg="gray.600" alignItems='center' px={8} pt={24}>
    <Heading color="gray.100" fontSize="xl" mt={20} mb={3}>
      Acesse sua conta
    </Heading>

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
    </>
    }
    {user === 'cliente' &&
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
      mt={8}
    />
   
</VStack>
  );
}