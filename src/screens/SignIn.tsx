import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../assets/new_logo2.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

 export function SignIn(){

  const  { colors } = useTheme();

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo/>
      <Heading color="gray.100" fontSize="xl" mt={20} mb={3}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder='E-mail'
        mb={3}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
      /> 
      <Input
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
        mb={8}
      />

      <Button
        w='full'
        title='Entrar'
        mb={2}
        
      />
      <Button
        w='full'
        title='Cadastre-se'
        bg='transparent'
        borderWidth={2}
        borderColor='green.700'
      />

      <Button
        mt={15} 
        bg='transparent'
        title='Esqueceu a senha? Clique aqui'
       
      />

    </VStack>
  )
}