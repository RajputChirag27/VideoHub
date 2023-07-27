import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxW={Container.xl} h={'100vh'} p={16}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          margin={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>VIDEO HUB</Heading>

          <Avatar boxSize={'32'} alignSelf={'center'} />

          <Input
            type={'text'}
            placeholder={'Name'}
            required 
            focusBorderColor="purple.500"
            />
            
          <Input
            type={'email'}
            placeholder={'Email'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            type={'password'}
            placeholder={'Password'}
            required
            focusBorderColor="purple.500"
          />


          <Button type={'submit'} colorScheme={'purple'}>
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already a User?{' '}
            <Button variant={'link'} colorScheme="purple">
              <Link to="/login">Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
