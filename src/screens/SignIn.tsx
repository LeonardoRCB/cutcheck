import { VStack, Heading, Icon, useTheme} from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import { signIn } from '../services/auth';

import Logo from '../assets/new_logo2.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Button2 } from '../components/Button2';

 export function SignIn(navigate){


  const  { colors } = useTheme();

  async function handleSignIn() {
   const response = await signIn();
   console.log(response);
  }

  function handleSignUp() {
    navigate.navigation.navigate('tipodeusuario');
  }

  return ( 
        <VStack flex={1} bg="gray.600" alignItems='center' px={8} pt={24}>
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
              onPress={handleSignIn}
            />
            <Button2
              w='full'
              title='Cadastre-se'
              bg='transparent'
              borderWidth={2}
              borderColor='green.700'
              onPress={handleSignUp}
            />
            <Button
              mt={15} 
              bg='transparent'
              title='Esqueceu a senha? Clique aqui'  
            />
          
        </VStack>
  )
}