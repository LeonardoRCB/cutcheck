import React from 'react';
import { VStack } from 'native-base';

import Logo from '../assets/new_logo2.svg';
import { Loading } from '../components/Loading';

export function Preload() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" bg="gray.600">
      <Logo/>
      <Loading/>
    </VStack>
  );
}