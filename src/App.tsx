import { useState } from 'react';
import './App.css';
import FormInputs from './components/FormInputs';

type InputDetails = {
  username: string,
  email: string,
  fullname: string,
  password: string
}


function App() {
  const [values, setValues] = useState<InputDetails>({
    username: '',
    email: '',
    fullname: '',
    password: ''
  });

  // Input attribute types
  type InputAttributes = {
    id: string,
    name: string,
    type?: string,
    placeholder?: string,
    required?: boolean,
    errormessage?: string,
    pattern?: string,
    label: string
  }[]

  // Input atrributes data and their respective ID'S
  // Replace with fields you intend to use in your application 
  const inputs: InputAttributes = [
    {
      id: "1",
      name: "username",
      type: "text",
      placeholder: "Username",
      errormessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "2",
      name: "email",
      type: "email",
      placeholder: "Email",
      errormessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: "3",
      name: "fullname",
      type: "string",
      placeholder: "Fullname",
      pattern: "^[A-Za-z0-9]{4, 100}$",
      errormessage: "Fullname should be 4-100 characters!",
      label: "Fullname",
      required: true
    },
    {
      id: "4",
      name: "password",
      type: "password",
      placeholder: "Password",
      errormessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }
  ];

  // Onsubmit
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("Submit button clicked", e)
    // You can do your API interaction here e.g posting the data 
    // collected from the form to the API
  }

  // onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value has changed", e)
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className="App">
      <form>
        {inputs.map((input, index) => (
          <FormInputs
            {...input}
            name={input.name}
            onChange={onChange}
            key={index}
            label={input.label}
          />
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
