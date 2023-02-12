import React from 'react';

import '../app/App.css';

import { Center, Spinner, Text, VStack, Heading, Link, Box, Image, Stack, Button } from '@chakra-ui/react';

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
        backgroundImage: `url(https://wallpapers-clan.com/wp-content/uploads/2022/08/aesthetic-clouds-purple-wallpaper-2-scaled.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
        height: 5000, width: 1905
    }}>
        <VStack spacing="32px">
            <Stack spacing={900} direction='row'>
                <img src="logo.png" alt="logo" />
                <img src="logo.png" alt="logo" />
            </Stack>

            <Stack spacing={1} direction='row'>

                <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>R</Text>
                <Text color="orange" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>E</Text>
                <Text color="yellow" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>Z</Text>
                <Text color="green" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>A</Text>
                <Text color="blue" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>A</Text>
                <Text color="purple" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>A</Text>
                <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>A</Text>
                {/* faire  une map pour les espaces */}
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text color="orange" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>C</Text>
                <Text color="yellow" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>l</Text>
                <Text color="green" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>o</Text>
                <Text color="blue" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>u</Text>
                <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>d</Text>
            </Stack>


            <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>rezaaaa cloud is the best way to store data</Text>
            <Text color="orange" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>you can store files</Text>
            <Text color="yellow" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>you can also store files</Text>
            <Text color="green" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>you can once again store files</Text>
            <Text color="Blue" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>you can ALWAYS store files</Text>
            <Text color="red" fontSize={{ base: '5px', md: '7px', lg: '9px' }}>you can't store anything else anyway'</Text>



            <Stack spacing={50} direction='row'>
                <Button colorScheme='teal' variant='outline' >
                    <Link color='teal.500' href='/register'>
                        Create an account
                    </Link>
                </Button >
                <Button colorScheme='teal' variant='outline' >
                    <Link color='teal.500' href='/login'>
                        Login to your account
                    </Link>
                </Button >
            </Stack>

            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>
            <Text fontSize={{ base: '25px', md: '50px', lg: '100px' }}> </Text>


            <img src="reza.jpg" alt="logo" />
            <img src="reza.jpg" alt="logo" />
            <img src="reza.jpg" alt="logo" />

        </VStack>
    </div>
);

