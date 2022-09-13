import { useNavigate,useLocation } from 'react-router-dom'; 
import queryString from 'query-string';
import { useForm,useFetch } from '../../../hooks/index';


import './form.css'

export const Form = () => {
    
  const navigate = useNavigate(); 
  const { q='' } = queryString.parse(useLocation().search);

    const { bookInfo,onInputchange,onResetForm } = useForm({
      bookInfo:q
    }); 

    const handleSubmit = (e) => {
        e.preventDefault();
        onResetForm();
        navigate(`/search?q=${bookInfo}`);
    } 

  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text" 
            value={ bookInfo } 
            onChange={ onInputchange } 
            placeholder='Search...' 
            autoComplete='off' 
            name='bookInfo'
            />
            

        <button className='btn btn-info'>Search</button>    
    </form>
  )
}