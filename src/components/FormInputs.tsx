import { FC, InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string,
  label: string
}

const FormInputs: FC<FormInputProps> = ({ name, label, ...others }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} {...others}></input>
        </div>
    )
}

export default FormInputs