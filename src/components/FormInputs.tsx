import { FC, InputHTMLAttributes } from 'react';

// We are using extending HTMLInputElement properties in FormInputProps 
// such that we can be able to pass all input element props to this component.
// I am also using interface, not type; to describe the data shape of this object containing FormInputProps.
// However, feel free to use type while defining the type of data passed in ...others
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string,
  label: string
}

// I am using FC to provide an implicit definition of children. 
// This means the component will implicitly take children of type ReactNode 
// and additionally open our component's props to them.
// I used the spread operator to spread other options, this is entirely optional, if 
// you have other props passed to this component, you can as well destructure 
// them willingly but follow TS conventions
const FormInputs: FC<FormInputProps> = ({ name, label, ...others }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} {...others}></input>
        </div>
    )
}

export default FormInputs