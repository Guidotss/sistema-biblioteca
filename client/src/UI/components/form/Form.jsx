import { useForm } from "../../../hooks/useForm";
import './form.css'

export const Form = () => {
    const { bookInfo,onInputChange,resetForm } = useForm({
        bookInfo:'',
    });


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(bookInfo);
        resetForm();
    }
    
  return (
    <form onSubmit={onSubmit}>
        <input type="text" className="form-control rounded" placeholder="Buscar libro..." onChange={ onInputChange } value={ bookInfo } name="bookInfo" autoComplete="off" />
        <button className="btn btn-info">Search</button>
    </form>
  )
}