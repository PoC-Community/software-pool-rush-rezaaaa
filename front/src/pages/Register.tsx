import React from 'react';

import '../app/App.css';

import { Center, Spinner, Text, VStack, Heading, Stack, Link, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

import { InputText } from 'component/TexInput';

export function Display({ mail, password, checkPassword }: { mail: string, password: string; checkPassword: string; }): JSX.Element {

    const handleClick = () => {
        console.log("mail = ", mail)
        console.log("password = ", password)
        console.log("checkPassword = ", checkPassword)
    };

    return (
        <Center mt="160px">
            <VStack spacing="32px">
                <Button colorScheme='teal' variant='outline' onClick={handleClick} > validate </Button >
            </VStack>
        </Center>
    );
}

export const Register = (): JSX.Element => {
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checkPassword, setCheckPassword] = React.useState('');

    return <Center mt="160px">
        <VStack spacing="32px">

            <Text fontSize={{ base: '20px', md: '40px', lg: '60px' }}>Register</Text>

            <InputText setValue={setMail} placeHolder="mail" type="email" />
            <InputText setValue={setPassword} placeHolder="password" type="password" />
            <InputText setValue={setCheckPassword} placeHolder="check password" type="password" />

            <Display mail={mail} password={password} checkPassword={checkPassword} />

            <Button colorScheme='teal' variant='outline' >
                <Link color='teal.500' href='/login'>
                    Or login here
                </Link>
            </Button >

        </VStack>
    </Center>
}

