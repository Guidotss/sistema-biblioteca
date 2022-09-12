import { useState } from 'react'; 

export const useForm = (initialState={}) =>{
    const [form, setForm] = useState(initialState);

    const resetForm = () =>{
        setForm(initialState);
    }
    const onInputChange = ({target}) =>{
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    return{
        ...form,
        onInputChange,
        resetForm
    }
}