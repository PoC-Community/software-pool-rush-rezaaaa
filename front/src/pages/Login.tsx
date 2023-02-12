import React from 'react';

import '../app/App.css';

import { Center, Text, VStack, Link, Button, Divider, Stack } from '@chakra-ui/react';

import { InputText } from 'component/TexInput';


export function DisplayButton({ mail, password }: { mail: string, password: string }): JSX.Element {

    const handleClick = () => {
        console.log("mail = ", mail)
        console.log("password = ", password)
    };

    return (
        <Center mt="160px">
            <VStack spacing="32px">
                <Button colorScheme='blue' variant='outline' >
                    <Link color='blue' href='/home'>
                        validate
                    </Link>
                </Button >
            </VStack>
        </Center>
    );
}

export const Login = (): JSX.Element => {
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');


    return <div style={{
        backgroundImage: `url(https://papers.co/wallpaper/papers.co-nh60-sunset-sky-cloud-vacation-nature-red-flare-23-wallpaper.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
        height: 930, width: 1905
    }}>
        <VStack spacing="32px">
            <Stack spacing={1} direction='row'>
                <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>L</Text>
                <Text color="orange" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>O</Text>
                <Text color="yellow" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>G</Text>
                <Text color="green" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>I</Text>
                <Text color="blue" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>N</Text>
            </Stack>

            <InputText setValue={setMail} placeHolder="mail" type="email" color={'blue'} />
            <Center height='50px'>
                <Divider orientation='vertical' />
            </Center>
            <InputText setValue={setPassword} placeHolder="password" type="password" color={'blue'} />

            <DisplayButton mail={mail} password={password} />
            <Button colorScheme='blue' variant='outline' >
                <Link color='blue' href='/register'>
                    Create an account
                </Link>
            </Button >

        </VStack>
    </div>
}
