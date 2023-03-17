import React from 'react';
import { VStack, Box, Heading, Icon, useTheme, KeyboardAvoidingView, Center, View } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import { Platform } from 'react-native';

import { Header } from '../components/Header';

export function Home() {
  const  { colors } = useTheme();

  return (
    <View>
      <Box bg="gray.600" px={6}>
        <Header title="Home" />
      </Box>
      
    </View>
  );
}