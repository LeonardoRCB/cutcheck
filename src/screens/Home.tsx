import React from 'react';
import { VStack, HStack,IconButton, useTheme, Icon, Menu, Pressable } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import { Platform } from 'react-native';
import { MagnifyingGlass,List } from 'phosphor-react-native';

import Logo from '../assets/new_logo.svg';
import { Filter } from '../components/Filter';
import { Input } from '../components/Input';

export function Home() {
  const  { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        mb={8}
      >
        <Logo/>
      <HStack ml={-5} mr={6}>
      <Menu shadow={2} w="190" flex={1} trigger={triggerProps => {
       return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
          <IconButton
            icon={<List size={26} color={colors.gray[300]} />}
            />
          </Pressable>;
       }}>
          <Menu.Item>Perfil</Menu.Item>
          <Menu.Item>Configurações</Menu.Item>
          <Menu.Item>Sair</Menu.Item>
       </Menu>
     </HStack>
    </HStack>
    <VStack px={4}>
    <HStack space={3} mb={8}>
          <Filter
            type="open"
            title="em andamento"
            //onPress={() => setStatusSelected('open')}
            //isActive={statusSelected === 'open'}
          />

          <Filter
            type="closed"
            title="finalizados"
            //onPress={() => setStatusSelected('closed')}
            //isActive={statusSelected === 'closed'}
          />
        </HStack>
    <Input
      bg='gray.600'
      placeholder='Pesquisar'
      InputRightElement={<Icon as={<MagnifyingGlass color={colors.gray[300]} />} mr={4} />}
    />
    </VStack>
  </VStack>
       
  );
}