import React from 'react';

import '../app/App.css';

import { Center, Text, VStack, Link, Button } from '@chakra-ui/react';

import { InputText } from 'component/TexInput';


export function DisplayButton({ mail, password }: { mail: string, password: string }): JSX.Element {

    const handleClick = () => {
        console.log("mail = ", mail)
        console.log("password = ", password)
    };

    return (
        <Center mt="160px">
            <VStack spacing="32px">
                <Button colorScheme='teal' variant='outline' onClick={handleClick} > validate </Button >
            </VStack>
        </Center>
    );
}

export const Login = (): JSX.Element => {
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return <Center mt="160px">
        <VStack spacing="32px">
            <Text fontSize={{ base: '20px', md: '40px', lg: '60px' }}>Login</Text>

            <InputText setValue={setMail} placeHolder="mail" type="email" />
            <InputText setValue={setPassword} placeHolder="password" type="password" />

            <DisplayButton mail={mail} password={password} />
            <Button colorScheme='teal' variant='outline' >
                <Link color='teal.500' href='/register'>
                    Create an account
                </Link>
            </Button >
        </VStack>
    </Center>

}
