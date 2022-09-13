import { useNavigate,useLocation } from 'react-router-dom'; 
import queryString from 'query-string';
import { useForm,useFetch } from '../../../hooks/index';
import './form.css'

export const Form = () => {
    
  const navigate = useNavigate(); 
  const location = useLocation();
  const {query=''}  = queryString.parse(location.search);

    const { bookInfo,onInputchange } = useForm({
      bookInfo:query
    }); 

    const { data } = useFetch(); 

    const handleSubmit = (e) => {
        e.preventDefault();
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