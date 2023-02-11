import React from 'react';

import '../app/App.css';

import { Text, VStack, Box, SimpleGrid, GridItem, Grid, Stack, Heading, Select, Divider } from '@chakra-ui/react';


function Feature({ title, desc }: { title: string, desc: string }) {
    return (
        <Box p={45} bg={"white"} shadow='md' borderRadius={'12px'} border={"none"} >
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box >
    );
}

function StackEx() {
    return (
        <Stack spacing={8} direction='row'>
            <Feature
                title='Quoi'
                desc=''
            />
            <Feature
                title='Feur'
                desc=''
            />
            <Feature
                title='Rien'
                desc=''
            />
        </Stack>
    )
}

function StackEx2() {
    return (
        <Stack spacing={8} direction='row'>
            <Feature
                title='reza_s_sercret.txt'
                desc=''
            />
            <Feature
                title='memory_leak_generator.c'
                desc=''
            />
            <Feature
                title="PoC Software Pool 2023 - Day 06 - find reza's secret"
                desc=''
            />
            <Feature
                title='quoi.feur'
                desc=''
            />
        </Stack>
    )
}

export const Home2 = (): JSX.Element => (
    <div style={{
        backgroundImage: `url(https://cdn.wallpapersafari.com/29/65/BiLp83.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
        height: 930, width: 1920
    }}>
        <VStack spacing="32px">
            <Text fontSize={{ base: '40px', md: '60px', lg: '80px' }}>The CLOUD reinvented</Text>

            {/* <Select placeholder='Mon drive'>
                <Divider orientation='horizontal' />
                <option value='option1'>Nouveau dossier</option>
                <option value='option2'>Importer un dossier</option>
                <option value='option3'>Importer un fichier</option>
            </Select> */}
            <Divider orientation='horizontal' />
            <Divider orientation='horizontal' />

            <Text fontSize={{ base: '5px', md: '10px', lg: '20px' }}>suggestion</Text>

            <StackEx />

            <Divider orientation='horizontal' />

            <input type={"file"}></input>
            {/* <input type="file" webkitdirectory mozdirectory directory /> */}

            <Divider orientation='horizontal' />

            <Text fontSize={{ base: '5px', md: '10px', lg: '20px' }}>Your files</Text>

            <StackEx2 />

        </VStack>
    </div>
);

