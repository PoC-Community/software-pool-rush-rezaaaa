import { Input } from "@chakra-ui/react";


interface InputProps {
    setValue: (value: string) => void;
    placeHolder: string;
    type: "text" | "email" | "password";
}

export function InputText({ setValue, placeHolder, type }: InputProps): JSX.Element {

    return (
        <Input
            pr='4.5rem'
            type={type}
            placeholder={placeHolder}
            onChange={e => setValue(e.target.value)}
        />
    );
}