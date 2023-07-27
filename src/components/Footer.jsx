import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={40} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'} my={['4', '0']}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            Subscribe to get Updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              type={'email'}
              placeholder={'Enter email here...'}
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          my={['4', '0']}
          w={'full'}
          borderLeft={['none', 'none', '1px solid white', '1px solid white']}
          borderRight={['none', 'none', '1px solid white', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text textAlign={'center'}>Copyright © 2023 VideoHub, Inc.</Text>
          <Text textAlign={'center'}>All Rights Reserved</Text>
        </VStack>

        <VStack w={'full'} my={['4', '0']}>
          <Heading size={'sm'} textTransform={'uppercase'} textAlign={'center'}>
            Social Media
          </Heading>
          <Box>
            <Button variant={'ghost'} colorScheme={'purple'}>
              <a
                href="https://www.youtube.com/channel/UClErdcAacgk3XXVW-DjOUEA"
                target="blank"
              >
                <FaYoutube />
              </a>
            </Button>

            <Button variant={'ghost'} colorScheme={'purple'}>
              <a href="https://www.instagram.com/chirag_27_08/" target="blank">
                <FaInstagram />
              </a>
            </Button>

            <Button variant={'ghost'} colorScheme={'purple'}>
              <a href="https://github.com/RajputChirag27" target="blank">
                <FaGithub />
              </a>
            </Button>
          </Box>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
