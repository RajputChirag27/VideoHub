import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={Container.xl} h={'100vh'} p={16}>
        <form >
            <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} margin={'auto'} my={'16'}>
                <Heading textAlign={'center'}>
                    Welcome Back
                </Heading>
            <Input type={'email'} placeholder={'Email'} required focusBorderColor='purple.500'/>
            <Input type={'password'} placeholder={'Password'} required focusBorderColor='purple.500'/> 

            <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to='/forgetpassword'>Forgot Password</Link>
            </Button>

            <Button type={'submit'} colorScheme={'purple'}>
                Login
            </Button>

            <Text textAlign={'right'}>New User? {' '}
            <Button variant={'link'} colorScheme='purple'>
                <Link to='/signup'>Sign Up</Link>
            </Button>
            </Text>

            </VStack>
        </form>
    </Container>
  )
}

export default Login
