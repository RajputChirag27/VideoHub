import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={16}>
        <Heading
          textTransform={'uppercase'}
          m={'auto'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={4}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'wider'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Welcome to our Video Hub, the ultimate destination for all your
            video needs! With our user-friendly platform, you can explore a vast
            library of videos covering a wide range of topics. Enjoy seamless
            video playback and discover new content through our personalized
            recommendation system. Create your channel, engage with creators,
            and build a vibrant community around your interests. Stay updated
            with your favorite channels by subscribing and receiving
            notifications for new uploads. Monetize your content and gain
            valuable insights through our analytics tools. Whether you're into
            entertainment, education, or anything in between, our Video Hub is
            here to cater to your video cravings! Join us today and experience
            the world of videos like never before.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const headingOptions = {
  pos: 'absolute',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  textAlign: 'center',
  fontSize: '4xl',
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >

    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        VideoHub- Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming On Console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        One Piece is Real
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
