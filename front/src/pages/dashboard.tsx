import React from 'react';

import '../app/App.css';

import { Text, VStack, Box, SimpleGrid, GridItem, Grid, Stack, Heading, Select, Divider } from '@chakra-ui/react';

import { InputText } from 'component/TexInput';
import InputFile from 'component/FileInput';

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
                title='reza_s_sercret.txt'
                desc=''
            />
            <Feature
                title='memory_leak_generator.c'
                desc=''
            />
            <Feature
                title='quoi.feur'
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

export const Home2 = (): JSX.Element => {
    //  let audio = new Audio("/christmas.mp3")
    const [file, setFile] = React.useState('');

    return <div style={{
        backgroundImage: `url(https://cdn.wallpapersafari.com/29/65/BiLp83.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
        height: 930, width: 1920
    }}>

        <VStack spacing="32px">
            <Stack spacing={1} direction='row'>
                <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>T</Text>
                <Text color="orange" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>H</Text>
                <Text color="yellow" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>E</Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text color="green" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>C</Text>
                <Text color="blue" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>L</Text>
                <Text color="purple" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>O</Text>
                <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>U</Text>
                <Text color="orange" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>D</Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text fontSize={{ base: '20px', md: '30px', lg: '60px' }}> </Text>
                <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>R</Text>
                <Text color="orange" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>E</Text>
                <Text color="yellow" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>I</Text>
                <Text color="green" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>N</Text>
                <Text color="blue" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>V</Text>
                <Text color="purple" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>E</Text>
                <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>N</Text>
                <Text color="orange" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>T</Text>
                <Text color="yellow" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>E</Text>
                <Text color="green" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>D</Text>
            </Stack>

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

            <InputFile />
            {/* 
            <InputText setValue={setFile} placeHolder="choose your file" type="file" color={'purple'} />
            <input type={"file"}></input>
            <input type="file" webkitdirectory mozdirectory directory />

            <Divider orientation='horizontal' />

            <Text fontSize={{ base: '5px', md: '10px', lg: '20px' }}>Your files</Text>

            <StackEx2 />
 */}
        </VStack>
        <Divider orientation='vertical' />

        <Text fontSize={{ base: '100px', md: '100px', lg: '100px' }}>MADE BY REZA</Text>
    </div>
}

