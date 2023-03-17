import { Center, Spinner } from 'native-base';

export function Loading() {
  return (
    <Center bg="gray.600" mt={5}>
      <Spinner color="secondary.700" />
    </Center>
  );
}