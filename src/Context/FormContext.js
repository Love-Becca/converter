import React, { useState, createContext } from 'react';
export const FormContext = createContext()


const FormContextProvider = (props) => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });
    return (
        <FormContext.Provider value={{formData, setFormData}}>
            {props.children}
        </FormContext.Provider>
    );
}
 
export default FormContextProvider;