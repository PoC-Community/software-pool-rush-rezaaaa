import React from 'react';

import '../app/App.css';

import { Center, Spinner, Text, VStack, Heading, Link, Box, Image } from '@chakra-ui/react';

import backgroundImage from '../component/backgroudImage';

function HeaderBox() {
    return (
        <Box bg='tomato' w='100%' p={4} color='white'>
            This is the Box
        </Box>
    )
}

export const Head = (): JSX.Element => (
    <div style={{
        backgroundImage: `url(https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?cs=srgb&dl=pexels-ithalu-dominguez-907485.jpg&fm=jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
        height: 925, width: 1920
    }}>
        <VStack spacing="32px">
            <Text fontSize={{ base: '40px', md: '60px', lg: '80px' }}>Cloud</Text>
            <Text fontSize={{ base: '20px', md: '40px', lg: '60px' }}>...</Text>
            <Text>
                {' '}
                <Link color='teal.500' href='/register'>
                    register
                </Link>
            </Text>
            <Text>
                {' '}
                <Link color='teal.500' href='/login'>
                    login
                </Link>
            </Text>
        </VStack>
    </div>
);

