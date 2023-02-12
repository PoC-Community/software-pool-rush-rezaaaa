import React from 'react';

import '../app/App.css';

import { Center, Spinner, Text, VStack, Heading, Stack, Link, Input, InputGroup, InputRightElement, Button, Divider } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { InputText } from 'component/TexInput';

export function Display({ name, surname, mail, password, checkPassword }: { name: string, surname: string, mail: string, password: string; checkPassword: string; }): JSX.Element {

    const handleClick = () => {
        console.log("name = ", name)
        console.log("surname = ", surname)
        console.log("mail = ", mail)
        console.log("password = ", password)
        console.log("checkPassword = ", checkPassword)
    };
    const toast = useToast()

    return (
        <Center mt="160px">
            <VStack spacing="32px">
                <Button colorScheme='purple' variant='outline' >
                    <Link color='purple' href='/home'>
                        validate
                    </Link>
                </Button >
            </VStack>
        </Center>
    );
}

export const Register = (): JSX.Element => {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checkPassword, setCheckPassword] = React.useState('');

    return <div style={{
        backgroundImage: `url(https://wallpaper.dog/large/863787.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
        height: 930, width: 1905
    }}>
        <VStack spacing="32px">

            <Stack spacing={1} direction='row'>
                <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>R</Text>
                <Text color="orange" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>E</Text>
                <Text color="yellow" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>G</Text>
                <Text color="green" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>I</Text>
                <Text color="blue" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>S</Text>
                <Text color="purple" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>T</Text>
                <Text color="red" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>E</Text>
                <Text color="orange" fontSize={{ base: '20px', md: '30px', lg: '60px' }}>R</Text>
            </Stack>

            <InputText setValue={setName} placeHolder="name" type="text" color={'purple'} />
            <InputText setValue={setSurname} placeHolder="surname" type="text" color={'purple'} />
            <Center height='50px'>
                <Divider orientation='vertical' />
            </Center>
            <InputText setValue={setMail} placeHolder="email" type="email" color={'purple'} />
            <Center height='50px'>
                <Divider orientation='vertical' />
            </Center>
            <InputText setValue={setPassword} placeHolder="password" type="password" color={'purple'} />
            <InputText setValue={setCheckPassword} placeHolder="check password" type="password" color={'purple'} />

            <Display name={name} surname={surname} mail={mail} password={password} checkPassword={checkPassword} />

            <Button colorScheme='purple' variant='outline' >
                <Link color='purple' href='/login'>
                    Or login here
                </Link>
            </Button >

        </VStack>
    </div>
}

